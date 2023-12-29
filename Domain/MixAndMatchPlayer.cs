namespace Domain
{
    public class MixAndMatchPlayer
    {
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public int GameId { get; set; }
        public MixAndMatchGame Game { get; set; }   
        public bool IsActive { get; set; }

        public int Team { get; set; }
    }
}