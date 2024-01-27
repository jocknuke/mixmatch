using Application.Core;
using Application.Interfaces;
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
              private readonly IUserAccessor _userAccessor;
           public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _mapper = mapper;
                _context = context;
            }
            public async Task<Result<List<ActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                

                    
                    var activities = new List<ActivityDto>();


       
 var today = DateTime.UtcNow;

Console.WriteLine("#########################");

Console.WriteLine(request.Predicate);

Console.WriteLine("#########################");
               

                switch (request.Predicate)
                {
                    case "popular":
                        activities = await _context.Activities.Where(a => a.Date >= today)
                   
                    .OrderBy(d => d.Date)
                    .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider, new { currentUsername = _userAccessor.GetUsername() })
                    .OrderByDescending(x=>x.Attendees.Count())
                    .ToListAsync();
                        break;
                    case "future":
                        activities = await _context.Activities.Where(a => a.Date >= today)
                   
                    .OrderBy(d => d.Date)
                    .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider, new { currentUsername = _userAccessor.GetUsername() })
                    .ToListAsync();
                        break;

                    case "isgoing":
                        activities = await _context.Activities.Where(a => a.Date >= today)
                   
                    .OrderBy(d => d.Date)
                    .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider, new { currentUsername = _userAccessor.GetUsername() })
                    .Where(x => x.Attendees.Any(a => a.Username == _userAccessor.GetUsername()))
                    .ToListAsync();
                        break;

                     default:
                        activities = await _context.Activities.Where(a => a.Date >= today)
                   
                    .OrderBy(d => d.Date)
                    .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider, new { currentUsername = _userAccessor.GetUsername() })
                    .OrderByDescending(x=>x.Attendees.Count())
                    .ToListAsync();
                        break;

                }

                return Result<List<ActivityDto>>.Success(activities);
            }
        }
    }
}