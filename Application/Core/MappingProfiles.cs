using Application.Activities;
using Application.Comments;
using Application.MixAndMatch;
using Application.Profiles;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : AutoMapper.Profile
    {
        public MappingProfiles()
        {
            string currentUsername = null;
            CreateMap<Activity, Activity>();
            CreateMap<Activity, ActivityDto>()
                .ForMember(d => d.HostUsername, o => o.MapFrom(s => s.Attendees
                    .FirstOrDefault(x => x.IsHost).AppUser.UserName));
            CreateMap<ActivityAttendee, AttendeeDto>()
                .ForMember(d => d.DisplayName, o => o.MapFrom(s => s.AppUser.DisplayName))
                .ForMember(d => d.Username, o => o.MapFrom(s => s.AppUser.UserName))
                .ForMember(d => d.Bio, o => o.MapFrom(s => s.AppUser.Bio))
                 .ForMember(d => d.AppUserId, o => o.MapFrom(s => s.AppUser.Id))
                .ForMember(d => d.Gender, o => o.MapFrom(s => s.AppUser.Gender))
                .ForMember(d => d.Image, o => o.MapFrom(s => s.AppUser.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(d => d.FollowersCount, o => o.MapFrom(s => s.AppUser.Followers.Count))
                .ForMember(d => d.FollowingCount, o => o.MapFrom(s => s.AppUser.Followings.Count))
                .ForMember(d => d.Following,
                    o => o.MapFrom(s => s.AppUser.Followers.Any(x => x.Observer.UserName == currentUsername)));
            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(d => d.Image, s => s.MapFrom(o => o.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(d => d.FollowersCount, o => o.MapFrom(s => s.Followers.Count))
                .ForMember(d => d.FollowingCount, o => o.MapFrom(s => s.Followings.Count))
                .ForMember(d => d.Following,
                    o => o.MapFrom(s => s.Followers.Any(x => x.Observer.UserName == currentUsername)));
            CreateMap<Comment, CommentDto>()
                .ForMember(d => d.Username, o => o.MapFrom(s => s.Author.UserName))
                .ForMember(d => d.DisplayName, o => o.MapFrom(s => s.Author.DisplayName))
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Author.Photos.FirstOrDefault(x => x.IsMain).Url));
            CreateMap<ActivityAttendee, UserActivityDto>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Activity.Id))
                .ForMember(d => d.Date, o => o.MapFrom(s => s.Activity.Date))
                .ForMember(d => d.Title, o => o.MapFrom(s => s.Activity.Title))
                .ForMember(d => d.Category, o => o.MapFrom(s => s.Activity.Category))
                .ForMember(d => d.HostUsername, o => o.MapFrom(s =>
                    s.Activity.Attendees.FirstOrDefault(x => x.IsHost).AppUser.UserName));

               CreateMap<MixAndMatchGame, MixAndMatchDto>()
               .ForMember(d=>d.Players, o => o.MapFrom(s => s.Players))
                 .ForMember(d => d.CourtNumber, o => o.MapFrom(s => s.CourtNumber))
                  .ForMember(d => d.IsPlayoff, o => o.MapFrom(s => s.IsPlayoff))
                   .ForMember(d => d.Completed, o => o.MapFrom(s => s.Completed))
                  .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                   .ForMember(d => d.RoundId, o => o.MapFrom(s => s.RoundId))
                  .ForMember(d => d.TeamOneScore, o => o.MapFrom(s => s.TeamOneScore))
                  .ForMember(d => d.TeamTwoScore, o => o.MapFrom(s => s.TeamTwoScore))
                .ForMember(d => d.ActivityId, o => o.MapFrom(s => s.ActivityId));

                CreateMap<MixAndMatchPlayer, PlayerDto>()
                .ForMember(d => d.DisplayName, o => o.MapFrom(s => s.AppUser.DisplayName))
                .ForMember(d => d.Username, o => o.MapFrom(s => s.AppUser.UserName))
                .ForMember(d => d.Gender, o => o.MapFrom(s => s.AppUser.Gender))
                 .ForMember(d => d.AppUserId, o => o.MapFrom(s => s.AppUser.Id))
                  .ForMember(d => d.totalPoints, o => o.MapFrom(s => s.totalPoints))
                .ForMember(d => d.Image, o => o.MapFrom(s => s.AppUser.Photos.FirstOrDefault(x => x.IsMain).Url));
                
              
        }
    }
}