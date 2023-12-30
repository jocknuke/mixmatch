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
        public class Command :  IRequest<Result<Unit>>
        {
            
            public Guid ActivityId { get; set; }
            
            public MixAndMatchGame MixAndMatchGame { get; set; }


        }

       

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

      public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.ActivityId).NotEmpty();
            }
        }

           

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {

                var activity = await _context.Activities
                    .Include(x => x.MixAndMatchGames)
                    
                    
                    .FirstOrDefaultAsync(x => x.Id == request.ActivityId);


                if (activity == null) return null;

                var user = await _context.Users.FirstOrDefaultAsync(x => 
                    x.UserName == _userAccessor.GetUsername());


                activity.MixAndMatchGames.Add(request.MixAndMatchGame);

                

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create game");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
        
    
}