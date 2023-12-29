using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; }
        public DbSet<ActivityAttendee> ActivityAttendees { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<MixAndMatchGame> MixAndMatchGames { get; set; }
        public DbSet<MixAndMatchPlayer> MixAndMatchPlayers { get; set; }
        public DbSet<UserFollowing> UserFollowings { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ActivityAttendee>(x => x.HasKey(aa => new { aa.AppUserId, aa.ActivityId }));

            builder.Entity<ActivityAttendee>()
                .HasOne(u => u.AppUser)
                .WithMany(u => u.Activities)
                .HasForeignKey(aa => aa.AppUserId);

                

            builder.Entity<ActivityAttendee>()
                .HasOne(u => u.Activity)
                .WithMany(u => u.Attendees)
                .HasForeignKey(aa => aa.ActivityId);

            
           

            builder.Entity<Comment>()
                .HasOne(a => a.Activity)
                .WithMany(c => c.Comments)
                .OnDelete(DeleteBehavior.Cascade);

               
            builder.Entity<MixAndMatchPlayer>(x => x.HasKey(aa => new { aa.AppUserId, aa.GameId }));

             builder.Entity<MixAndMatchPlayer>()
                .HasOne(u => u.AppUser)
                .WithMany(u => u.Players)
                .HasForeignKey(aa => aa.AppUserId);

                builder.Entity<MixAndMatchPlayer>()
                .HasOne(u => u.Game)
                .WithMany(u => u.Players)
                .HasForeignKey(aa => aa.GameId);



                 builder.Entity<MixAndMatchGame>()
                .HasOne(a => a.Activity)
                .WithMany(m => m.ActivityMixAndMatchGames)
                .HasForeignKey(aa => aa.ActivityId);

          
     
 

            builder.Entity<UserFollowing>(b =>
            {
                b.HasKey(k => new { k.ObserverId, k.TargetId });

                b.HasOne(o => o.Observer)
                    .WithMany(f => f.Followings)
                    .HasForeignKey(o => o.ObserverId)
                    .OnDelete(DeleteBehavior.Cascade);
                b.HasOne(t => t.Target)
                    .WithMany(f => f.Followers)
                    .HasForeignKey(t => t.TargetId)
                    .OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}