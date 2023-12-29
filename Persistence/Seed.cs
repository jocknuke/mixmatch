using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context,
            UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any() && !context.Activities.Any())
            {

                
                var users = new List<AppUser>(){

   
                    new AppUser
                    {
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Jane",
                        UserName = "jane",
                        Email = "jane@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@test.com"
                    },  
    new AppUser                
  {
    DisplayName= "Christie Rowe",
    Email= "christie_rowe@testemail.com",
    UserName= "christie"
  },
   new AppUser 
  {
    DisplayName= "Gates Mccoy",
    Email= "gates_mccoy@testemail.com",
    UserName= "gates"
  },
   new AppUser 
  {
    DisplayName= "Evangeline Fisher",
    Email= "evangeline_fisher@testemail.com",
    UserName= "evangeline"
  },
   new AppUser 
  {
    DisplayName= "Francis Potter",
    Email= "francis_potter@testemail.com",
    UserName= "francis"
  },
   new AppUser 
  {
    DisplayName= "Mckee Cox",
    Email= "mckee_cox@testemail.com",
    UserName= "mckee"
  },
   new AppUser 
  {
    DisplayName= "Foreman Jackson",
    Email= "foreman_jackson@testemail.com",
    UserName= "foreman"
  },
   new AppUser 
  {
    DisplayName= "Latoya Craft",
    Email= "latoya_craft@testemail.com",
    UserName= "latoya"
  },
   new AppUser 
  {
    DisplayName= "Margery Nicholson",
    Email= "margery_nicholson@testemail.com",
    UserName= "margery"
  },
   new AppUser 
  {
    DisplayName= "Hazel Garner",
    Email= "hazel_garner@testemail.com",
    UserName= "hazel"
  },
   new AppUser 
  {
    DisplayName= "Mcbride Davidson",
    Email= "mcbride_davidson@testemail.com",
    UserName= "mcbride"
  },
   new AppUser 
  {
    DisplayName= "Holland Mckinney",
    Email= "holland_mckinney@testemail.com",
    UserName= "holland"
  },
   new AppUser 
  {
    DisplayName= "Cote Rose",
    Email= "cote_rose@testemail.com",
    UserName= "cote"
  },
   new AppUser 
  {
    DisplayName= "Owens Acosta",
    Email= "owens_acosta@testemail.com",
    UserName= "owens"
  },
   new AppUser 
  {
    DisplayName= "Jeannette Lancaster",
    Email= "jeannette_lancaster@testemail.com",
    UserName= "jeannette"
  },
   new AppUser 
  {
    DisplayName= "Miles Porter",
    Email= "miles_porter@testemail.com",
    UserName= "miles"
  },
   new AppUser 
  {
    DisplayName= "Schroeder Brewer",
    Email= "schroeder_brewer@testemail.com",
    UserName= "schroeder"
  },
   new AppUser 
  {
    DisplayName= "Decker Gilbert",
    Email= "decker_gilbert@testemail.com",
    UserName= "decker"
  },
   new AppUser 
  {
    DisplayName= "Raquel Holman",
    Email= "raquel_holman@testemail.com",
    UserName= "raquel"
  },
   new AppUser 
  {
    DisplayName= "Gaines Carson",
    Email= "gaines_carson@testemail.com",
    UserName= "gaines"
  },
   new AppUser 
  {
    DisplayName= "Jewel Silva",
    Email= "jewel_silva@testemail.com",
    UserName= "jewel"
  },
   new AppUser 
  {
    DisplayName= "Whitney Winters",
    Email= "whitney_winters@testemail.com",
    UserName= "whitney"
  },
   new AppUser 
  {
    DisplayName= "Opal Gallegos",
    Email= "opal_gallegos@testemail.com",
    UserName= "opal"
  },
   new AppUser 
  {
    DisplayName= "Leach Cain",
    Email= "leach_cain@testemail.com",
    UserName= "leach"
  },
   new AppUser 
  {
    DisplayName= "Knowles Norton",
    Email= "knowles_norton@testemail.com",
    UserName= "knowles"
  },
   new AppUser 
  {
    DisplayName= "Judy Stone",
    Email= "judy_stone@testemail.com",
    UserName= "judy"
  },
   new AppUser 
  {
    DisplayName= "Rosales Hayes",
    Email= "rosales_hayes@testemail.com",
    UserName= "rosales"
  },
   new AppUser 
  {
    DisplayName= "Arnold Carter",
    Email= "arnold_carter@testemail.com",
    UserName= "arnold"
  },
   new AppUser 
  {
    DisplayName= "Farrell Medina",
    Email= "farrell_medina@testemail.com",
    UserName= "farrell"
  },
   new AppUser 
  {
    DisplayName= "Bartlett Armstrong",
    Email= "bartlett_armstrong@testemail.com",
    UserName= "bartlett"
  },
   new AppUser 
  {
    DisplayName= "Rosemary Fitzpatrick",
    Email= "rosemary_fitzpatrick@testemail.com",
    UserName= "rosemary"
  },
   new AppUser 
  {
    DisplayName= "Margaret Vaughn",
    Email= "margaret_vaughn@testemail.com",
    UserName= "margaret"
  },
   new AppUser 
  {
    DisplayName= "Pearlie Sosa",
    Email= "pearlie_sosa@testemail.com",
    UserName= "pearlie"
  },
   new AppUser 
  {
    DisplayName= "Underwood Nolan",
    Email= "underwood_nolan@testemail.com",
    UserName= "underwood"
  },
   new AppUser 
  {
    DisplayName= "Waters Adkins",
    Email= "waters_adkins@testemail.com",
    UserName= "waters"
  },
   new AppUser 
  {
    DisplayName= "Jacqueline Camacho",
    Email= "jacqueline_camacho@testemail.com",
    UserName= "jacqueline"
  },
   new AppUser 
  {
    DisplayName= "Jerry Forbes",
    Email= "jerry_forbes@testemail.com",
    UserName= "jerry"
  },
   new AppUser 
  {
    DisplayName= "Mcfadden Howe",
    Email= "mcfadden_howe@testemail.com",
    UserName= "mcfadden"
  },
   new AppUser 
  {
    DisplayName= "Mason Woods",
    Email= "mason_woods@testemail.com",
    UserName= "mason"
  },
   new AppUser 
  {
    DisplayName= "Diann Nelson",
    Email= "diann_nelson@testemail.com",
    UserName= "diann"
  },
   new AppUser 
  {
    DisplayName= "Deanne Mann",
    Email= "deanne_mann@testemail.com",
    UserName= "deanne"
  },
   new AppUser 
  {
    DisplayName= "Mae Scott",
    Email= "mae_scott@testemail.com",
    UserName= "mae"
  },
   new AppUser 
  {
    DisplayName= "Kelly Lewis",
    Email= "kelly_lewis@testemail.com",
    UserName= "kelly"
  },
   new AppUser 
  {
    DisplayName= "Shepard Floyd",
    Email= "shepard_floyd@testemail.com",
    UserName= "shepard"
  },
   new AppUser 
  {
    DisplayName= "Ronda Riddle",
    Email= "ronda_riddle@testemail.com",
    UserName= "ronda"
  },
   new AppUser 
  {
    DisplayName= "Hampton Nash",
    Email= "hampton_nash@testemail.com",
    UserName= "hampton"
  },
   new AppUser 
  {
    DisplayName= "Sofia Massey",
    Email= "sofia_massey@testemail.com",
    UserName= "sofia"
  },
   new AppUser 
  {
    DisplayName= "Karin Douglas",
    Email= "karin_douglas@testemail.com",
    UserName= "karin"
  },
   new AppUser 
  {
    DisplayName= "Leonor Cervantes",
    Email= "leonor_cervantes@testemail.com",
    UserName= "leonor"
  },
   new AppUser 
  {
    DisplayName= "Camacho Mcguire",
    Email= "camacho_mcguire@testemail.com",
    UserName= "camacho"
  },
   new AppUser 
  {
    DisplayName= "Edwards Walls",
    Email= "edwards_walls@testemail.com",
    UserName= "edwards"
  },
   new AppUser 
  {
    DisplayName= "Donovan Moss",
    Email= "donovan_moss@testemail.com",
    UserName= "donovan"
  },
   new AppUser 
  {
    DisplayName= "Mattie Landry",
    Email= "mattie_landry@testemail.com",
    UserName= "mattie"
  },
   new AppUser 
  {
    DisplayName= "Melva Allison",
    Email= "melva_allison@testemail.com",
    UserName= "melva"
  },
   new AppUser 
  {
    DisplayName= "Solomon Houston",
    Email= "solomon_houston@testemail.com",
    UserName= "solomon"
  },
   new AppUser 
  {
    DisplayName= "Salinas Petersen",
    Email= "salinas_petersen@testemail.com",
    UserName= "salinas"
  },
   new AppUser 
  {
    DisplayName= "Myrtle Stokes",
    Email= "myrtle_stokes@testemail.com",
    UserName= "myrtle"
  }
       
   };


                 var  AllAttendees = new List<ActivityAttendee>();


               

                foreach (var user in users)
                {
                    user.Gender="Male";
                   var attendee= new ActivityAttendee
                            {
                                AppUser = user,
                                IsHost = true
                            };
                    AllAttendees.Add(attendee);
                    
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }

                var activities = new List<Activity>
                {
                    new Activity
                    {
                        Title = "Past Activity 1",
                        Date = DateTime.UtcNow.AddMonths(-2),
                        Description = "Activity 2 months ago",
                        Category = "mixandmatch",
                        City = "London",
                        Venue = "Pub",
                        Attendees = AllAttendees
                    },
                    new Activity
                    {
                        Title = "Past Activity 2",
                        Date = DateTime.UtcNow.AddMonths(-1),
                        Description = "Activity 1 month ago",
                        Category = "culture",
                        City = "Paris",
                        Venue = "The Louvre",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[0],
                                IsHost = true
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                IsHost = false
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 1",
                        Date = DateTime.UtcNow.AddMonths(1),
                        Description = "Activity 1 month in future",
                        Category = "music",
                        City = "London",
                        Venue = "Wembly Stadium",
                        Attendees = AllAttendees
                    },
                    new Activity
                    {
                        Title = "Future Activity 2",
                        Date = DateTime.UtcNow.AddMonths(2),
                        Description = "Activity 2 months in future",
                        Category = "food",
                        City = "London",
                        Venue = "Jamies Italian",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[0],
                                IsHost = true
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[2],
                                IsHost = false
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 3",
                        Date = DateTime.UtcNow.AddMonths(3),
                        Description = "Activity 3 months in future",
                        Category = "drinks",
                        City = "London",
                        Venue = "Pub",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                IsHost = true                            
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[0],
                                IsHost = false                            
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 4",
                        Date = DateTime.UtcNow.AddMonths(4),
                        Description = "Activity 4 months in future",
                        Category = "culture",
                        City = "London",
                        Venue = "British Museum",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                IsHost = true                            
                            }
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 5",
                        Date = DateTime.UtcNow.AddMonths(5),
                        Description = "Activity 5 months in future",
                        Category = "drinks",
                        City = "London",
                        Venue = "Punch and Judy",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[0],
                                IsHost = true                            
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                IsHost = false                            
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 6",
                        Date = DateTime.UtcNow.AddMonths(6),
                        Description = "Activity 6 months in future",
                        Category = "music",
                        City = "London",
                        Venue = "O2 Arena",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[2],
                                IsHost = true                            
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                IsHost = false                            
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 7",
                        Date = DateTime.UtcNow.AddMonths(7),
                        Description = "Activity 7 months in future",
                        Category = "travel",
                        City = "Berlin",
                        Venue = "All",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[0],
                                IsHost = true                            
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[2],
                                IsHost = false                            
                            },
                        }
                    },
                    new Activity
                    {
                        Title = "Future Activity 8",
                        Date = DateTime.UtcNow.AddMonths(8),
                        Description = "Activity 8 months in future",
                        Category = "drinks",
                        City = "London",
                        Venue = "Pub",
                        Attendees = new List<ActivityAttendee>
                        {
                            new ActivityAttendee
                            {
                                AppUser = users[2],
                                IsHost = true                            
                            },
                            new ActivityAttendee
                            {
                                AppUser = users[1],
                                IsHost = false                            
                            },
                        }
                    }
                };

                await context.Activities.AddRangeAsync(activities);
                await context.SaveChangesAsync();
            }
        }
    }
}
