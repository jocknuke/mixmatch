
namespace Domain
{
    public class MixAndMatchGame
    {
        public int Id { get; set; }
        
        public int RoundId { get; set; }

        public int CourtNumber { get; set; }
        
        public int TeamOneScore { get; set; }

        public int TeamTwoScore { get; set; }

        public ICollection<MixAndMatchPlayer> Players { get; set; } = new List<MixAndMatchPlayer>();

        public bool? Completed { get; set; }

        public Guid ActivityId { get; set; }

        public Activity Activity { get; set; }

        public bool? IsPlayoff { get; set; }
    }
}


