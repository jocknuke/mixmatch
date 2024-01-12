using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.MixAndMatch
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
           
            public int Id { get; set; }
            public Guid ActivityId { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                Console.Write(request);

                 var activity = await _context.Activities
                    .Include(x => x.MixAndMatchGames)
                   
                    
                    
                    .FirstOrDefaultAsync(x => x.Id == request.ActivityId);

                if (activity == null) return null;

                

                foreach(MixAndMatchGame game in activity.MixAndMatchGames.Where(x=>x.RoundId==request.Id)){

                        _context.Remove(game);

                }


              

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to delete the activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}