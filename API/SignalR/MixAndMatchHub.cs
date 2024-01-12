
using Application.MixAndMatch;
using MediatR;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    public class MixAndMatchHub: Hub
    {


        private readonly IMediator _mediator;

        public MixAndMatchHub(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task SendRound(Create.Command command)
        {

                   
            
             var round = await _mediator.Send(command);
            


            await Clients.Group(command.ActivityId.ToString()).SendAsync("ReceiveRounds", round.Value);
           
          
             
           

           
        }
          public async Task DeleteRound(Delete.Command command)
        {

                   
             try
            {
                



              await _mediator.Send(command);
            


            await Clients.Group(command.ActivityId.ToString()).SendAsync("RemoveRound",command.Id);
            
           
          
              }
            catch (System.Exception ex)
            {
                  Console.Write("Hub ERROR:" + ex.Message);
            }
                  
           

           
        }

         public async Task UpdateGame(Edit.Command command)
        {
            try
            {


                 var round = await _mediator.Send(command);

                

             await Clients.Group(command.ActivityId.ToString()).SendAsync("ReceiveGame", round.Value);
                
            }
            catch (System.Exception ex)
            {
                  Console.Write("Hub ERROR:" + ex.Message);
            }
                  
           
        }

        public override async Task OnConnectedAsync()
        {
            var httpContext = Context.GetHttpContext();
            var activityId = httpContext.Request.Query["activityId"];
            var roundId = httpContext.Request.Query["roundId"];

            MixAndMatchParams param= new MixAndMatchParams();


            int id;
             bool success = int.TryParse(roundId, out id);
         if (success)
         {
                param.roundId=id;
         }

                param.activityId=Guid.Parse(activityId);
               



            await Groups.AddToGroupAsync(Context.ConnectionId, activityId);
            var result = await _mediator.Send(new List.Query{ Params = param });
            await Clients.Caller.SendAsync("LoadRounds", result.Value);
        }
    }
        
    
}