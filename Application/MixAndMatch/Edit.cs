using System;
using System.Collections.Generic;
using System.Linq;
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
    public class Edit
    {
        public class Command : IRequest<Result<MixAndMatchDto>>
        {
            public Guid ActivityId { get; set; }
            public MixAndMatchGame mixAndMatchGame { get; set; }

        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.ActivityId).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command, Result<MixAndMatchDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<MixAndMatchDto>> Handle(Command request, CancellationToken cancellationToken)
            {
                try
                {
                   
                      var _game = await _context.MixAndMatchGames
                    
                  
                   
                    .FindAsync(request.mixAndMatchGame.Id);

               

              

               _game.TeamOneScore=request.mixAndMatchGame.TeamOneScore;
                _game.TeamTwoScore=request.mixAndMatchGame.TeamTwoScore;


               MixAndMatchDto updatedGame= _mapper.Map<MixAndMatchDto>(_game);


                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<MixAndMatchDto>.Failure("Failed to update game");

                return Result<MixAndMatchDto>.Success(updatedGame);
                    
                }
                catch (System.Exception ex)
                {
                    
                Console.Write("Edit command ERROR:" + ex.Message);
                


                     return Result<MixAndMatchDto>.Failure(ex.ToString() );
                }
               

              
            }
        }
    }
        
    
}