using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.MixAndMatch
{
    public class List
    {
        public class Query : IRequest<Result<List<MixAndMatchDto>>>
        {
           
            public MixAndMatchParams Params { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<List<MixAndMatchDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<MixAndMatchDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var games = await _context.MixAndMatchGames
                    .Where(x => x.Activity.Id == request.Params.activityId)
                    .OrderBy(x => x.RoundId)
                    .ProjectTo<MixAndMatchDto>(_mapper.ConfigurationProvider)
                    .ToListAsync();


                    if (request.Params.roundId!=null)
                {
                    games = games.Where(x => x.RoundId==request.Params.roundId).ToList();
                }

                return Result<List<MixAndMatchDto>>.Success(games);
            }
        }
    }
}