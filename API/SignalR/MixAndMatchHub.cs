
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
            var comment = await _mediator.Send(command);

            await Clients.Group(command.ActivityId.ToString())
                .SendAsync("ReceiveRounds", comment.Value);
        }

        public override async Task OnConnectedAsync()
        {
            var httpContext = Context.GetHttpContext();
            var activityId = httpContext.Request.Query["activityId"];
            await Groups.AddToGroupAsync(Context.ConnectionId, activityId);
            var result = await _mediator.Send(new List.Query{ActivityId = Guid.Parse(activityId)});
            await Clients.Caller.SendAsync("LoadRounds", result.Value);
        }
    }
        
    
}