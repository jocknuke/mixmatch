using System.Text.Json.Nodes;
using Application.Core;
using Application.Interfaces;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.MixAndMatch
{
    
    public class Create
    {
        public class Command :  IRequest<Result<List<MixAndMatchDto>>>
        {
            
            public Guid ActivityId { get; set; }
            
            public MixAndMatchGame[] MixAndMatchGames { get; set; }


        }

       

        public class Handler : IRequestHandler<Command, Result<List<MixAndMatchDto>>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
               private readonly IMapper _mapper;

            public Handler(DataContext context, IUserAccessor userAccessor ,  IMapper mapper)
            {
                _userAccessor = userAccessor;
                _context = context;

             _mapper = mapper;
            }

      public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.ActivityId).NotEmpty();
            }
        }

           

            public async Task<Result<List<MixAndMatchDto>>> Handle(Command request, CancellationToken cancellationToken)
            {

 

                var activity = await _context.Activities
                    .Include(x => x.MixAndMatchGames)
                   
                    
                    
                    .FirstOrDefaultAsync(x => x.Id == request.ActivityId);

                if (activity == null) return null;

                var lastRound =  _context.MixAndMatchGames.OrderByDescending(x=>x.RoundId).FirstOrDefault();

                


               int _roundID= lastRound==null?1:lastRound.RoundId+1;

                 List<MixAndMatchDto> list = new List<MixAndMatchDto>();

                foreach(MixAndMatchGame game in request.MixAndMatchGames){

                    game.RoundId=_roundID;

                    foreach(MixAndMatchPlayer player in game.Players){

                        player.AppUser=  await _context.Users.SingleOrDefaultAsync(x => x.Id == player.AppUserId);



                    }
                    

                    activity.MixAndMatchGames.Add(game);

                    

                    list.Add(_mapper.Map<MixAndMatchDto>(game));

                }
;

                 var success = await _context.SaveChangesAsync() > 0;



                if (success) return Result<List<MixAndMatchDto>>.Success(list);

                return Result<List<MixAndMatchDto>>.Failure("Failed to add games");
            }
        }
    }
        
    
}