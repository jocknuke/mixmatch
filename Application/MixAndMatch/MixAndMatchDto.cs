
using Application.Activities;

namespace Application.MixAndMatch
{
    public class MixAndMatchDto
    {
        public int Id { get; set; }
        
        public int RoundId { get; set; }

        public int CourtNumber { get; set; }
        
        public int TeamOneScore { get; set; }

        public int TeamTwoScore { get; set; }

        public ICollection<PlayerDto> Players { get; set; } = new List<PlayerDto>();

        public bool Completed { get; set; }

        public bool IsPlayoff { get; set; }
        
    }
}