using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class ListActivities
    {
        public class Query : IRequest<Result<List<ActivityDto>>>
        {
           
            public string Predicate { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<List<ActivityDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<ActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var query = _context.Activities
                    .OrderBy(a => a.Date)
                    .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider)
                    .AsQueryable();
                
                var today = DateTime.UtcNow;

                query = request.Predicate switch
                {
                    "popular" => query.GroupBy(m => m.Attendees)
                    .OrderByDescending(g => g.Count()).SelectMany(g => g),
                    "future" => query.Where(a => a.Date <= today),
                    _ => query.Where(a => a.Date >= today)
                };

                var activities = await query.ToListAsync();

                return Result<List<ActivityDto>>.Success(activities);
            }
        }
    }
}