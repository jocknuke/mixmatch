using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.MixAndMatch
{
    public class EditList
    {
        public class Command : IRequest<Result<List<MixAndMatchDto>>>
        {
            public Guid ActivityId { get; set; }
            public MixAndMatchGame[] MixAndMatchGames { get; set; }

        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.ActivityId).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command, Result<List<MixAndMatchDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<MixAndMatchDto>>> Handle(Command request, CancellationToken cancellationToken)
            {
                try
                {  

                            List<MixAndMatchDto> results=new List<MixAndMatchDto>();

                            
                    
                    foreach(MixAndMatchGame newgame in request.MixAndMatchGames){



                       

                      var _game =  _context.MixAndMatchGames.Include(x => x.Players).ThenInclude(u => u.AppUser)
                    .Where(x=>x.ActivityId==request.ActivityId  && x.RoundId==newgame.RoundId && x.CourtNumber==newgame.CourtNumber).FirstOrDefault();

              
                    if(_game!=null){


                     

                        
                           _game.Players.Clear();
                          
                           
                          MixAndMatchDto newCourt= _mapper.Map<MixAndMatchDto>(_game);

                         foreach(MixAndMatchPlayer player in newgame.Players){

                            
                            PlayerDto p =new PlayerDto{

                            AppUserId=player.AppUserId,
                            Team=player.Team,
                            
                             

                            };
                           

                            _game.Players.Add(player);
                          
                          newCourt.Players.Add(p);

                            

                         }

                       
                          
                       


                             results.Add( newCourt);


}

                    }




                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<List<MixAndMatchDto>>.Failure("Failed to update game");


                           



                return Result<List<MixAndMatchDto>>.Success(results);
                    
                }
                catch (System.Exception ex)
                {
                    
                Console.Write("Edit command ERROR:" + ex.InnerException);
                


                     return Result<List<MixAndMatchDto>>.Failure(ex.ToString() );
                }
               

              
            }
        }
    }
        
    
}