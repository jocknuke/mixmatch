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
                        DisplayName = "jonhonor",
                        UserName = "jonhonor",
                        Email = "jonhonor@test.com",
                         Gender="M"
                    },

   
                    new AppUser
                    {
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@test.com",
                         Gender="M"
                    },
                    new AppUser
                    {
                        DisplayName = "Jane",
                        UserName = "jane",
                        Email = "jane@test.com",
                         Gender="F"
                    },
                    new AppUser
                    {
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@test.com",
                         Gender="F"
                    },  
    new AppUser                
  {
    DisplayName= "Christie Rowe",
    Email= "christie_rowe@testemail.com",
    UserName= "christie",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Gates Mccoy",
    Email= "gates_mccoy@testemail.com",
    UserName= "gates",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Evangeline Fisher",
    Email= "evangeline_fisher@testemail.com",
    UserName= "evangeline",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Francis Potter",
    Email= "francis_potter@testemail.com",
    UserName= "francis",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Mckee Cox",
    Email= "mckee_cox@testemail.com",
    UserName= "mckee",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Foreman Jackson",
    Email= "foreman_jackson@testemail.com",
    UserName= "foreman",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Latoya Craft",
    Email= "latoya_craft@testemail.com",
    UserName= "latoya",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Margery Nicholson",
    Email= "margery_nicholson@testemail.com",
    UserName= "margery",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Hazel Garner",
    Email= "hazel_garner@testemail.com",
    UserName= "hazel",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Mcbride Davidson",
    Email= "mcbride_davidson@testemail.com",
    UserName= "mcbride",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Holland Mckinney",
    Email= "holland_mckinney@testemail.com",
    UserName= "holland",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Cote Rose",
    Email= "cote_rose@testemail.com",
    UserName= "cote",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Owens Acosta",
    Email= "owens_acosta@testemail.com",
    UserName= "owens",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Jeannette Lancaster",
    Email= "jeannette_lancaster@testemail.com",
    UserName= "jeannette",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Miles Porter",
    Email= "miles_porter@testemail.com",
    UserName= "miles",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Schroeder Brewer",
    Email= "schroeder_brewer@testemail.com",
    UserName= "schroeder",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Decker Gilbert",
    Email= "decker_gilbert@testemail.com",
    UserName= "decker",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Raquel Holman",
    Email= "raquel_holman@testemail.com",
    UserName= "raquel",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Gaines Carson",
    Email= "gaines_carson@testemail.com",
    UserName= "gaines",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Jewel Silva",
    Email= "jewel_silva@testemail.com",
    UserName= "jewel",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Whitney Winters",
    Email= "whitney_winters@testemail.com",
    UserName= "whitney",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Opal Gallegos",
    Email= "opal_gallegos@testemail.com",
    UserName= "opal",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Leach Cain",
    Email= "leach_cain@testemail.com",
    UserName= "leach",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Knowles Norton",
    Email= "knowles_norton@testemail.com",
    UserName= "knowles",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Judy Stone",
    Email= "judy_stone@testemail.com",
    UserName= "judy",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Rosales Hayes",
    Email= "rosales_hayes@testemail.com",
    UserName= "rosales",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Arnold Carter",
    Email= "arnold_carter@testemail.com",
    UserName= "arnold",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Farrell Medina",
    Email= "farrell_medina@testemail.com",
    UserName= "farrell",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Bartlett Armstrong",
    Email= "bartlett_armstrong@testemail.com",
    UserName= "bartlett",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Rosemary Fitzpatrick",
    Email= "rosemary_fitzpatrick@testemail.com",
    UserName= "rosemary",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Margaret Vaughn",
    Email= "margaret_vaughn@testemail.com",
    UserName= "margaret",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Pearlie Sosa",
    Email= "pearlie_sosa@testemail.com",
    UserName= "pearlie",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Underwood Nolan",
    Email= "underwood_nolan@testemail.com",
    UserName= "underwood",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Waters Adkins",
    Email= "waters_adkins@testemail.com",
    UserName= "waters",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Jacqueline Camacho",
    Email= "jacqueline_camacho@testemail.com",
    UserName= "jacqueline",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Jerry Forbes",
    Email= "jerry_forbes@testemail.com",
    UserName= "jerry",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Mcfadden Howe",
    Email= "mcfadden_howe@testemail.com",
    UserName= "mcfadden",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Mason Woods",
    Email= "mason_woods@testemail.com",
    UserName= "mason",
    Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Diann Nelson",
    Email= "diann_nelson@testemail.com",
    UserName= "diann",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Deanne Mann",
    Email= "deanne_mann@testemail.com",
    UserName= "deanne",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Mae Scott",
    Email= "mae_scott@testemail.com",
    UserName= "mae",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Kelly Lewis",
    Email= "kelly_lewis@testemail.com",
    UserName= "kelly",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Shepard Floyd",
    Email= "shepard_floyd@testemail.com",
    UserName= "shepard",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Ronda Riddle",
    Email= "ronda_riddle@testemail.com",
    UserName= "ronda",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Hampton Nash",
    Email= "hampton_nash@testemail.com",
    UserName= "hampton",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Sofia Massey",
    Email= "sofia_massey@testemail.com",
    UserName= "sofia",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Karin Douglas",
    Email= "karin_douglas@testemail.com",
    UserName= "karin",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Leonor Cervantes",
    Email= "leonor_cervantes@testemail.com",
    UserName= "leonor",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Camacho Mcguire",
    Email= "camacho_mcguire@testemail.com",
    UserName= "camacho",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Edwards Walls",
    Email= "edwards_walls@testemail.com",
    UserName= "edwards",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Donovan Moss",
    Email= "donovan_moss@testemail.com",
    UserName= "donovan",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Mattie Landry",
    Email= "mattie_landry@testemail.com",
    UserName= "mattie",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Melva Allison",
    Email= "melva_allison@testemail.com",
    UserName= "melva",
     Gender="F"
  },
   new AppUser 
  {
    DisplayName= "Solomon Houston",
    Email= "solomon_houston@testemail.com",
    UserName= "solomon",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Salinas Petersen",
    Email= "salinas_petersen@testemail.com",
    UserName= "salinas",
     Gender="M"
  },
   new AppUser 
  {
    DisplayName= "Myrtle Stokes",
    Email= "myrtle_stokes@testemail.com",
    UserName= "myrtle",
     Gender="F"
  }
       
   };


                 var  AllAttendees = new List<ActivityAttendee>();


               

                foreach (var user in users)
                {
                    
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
                        Title = "Mix And Match",
                        Date = DateTime.UtcNow.AddMonths(1),
                        Description = "Activity 1 months in the future",
                        Category = "mixandmatch",
                        City = "Charlotte",
                        Venue = "CUVC",
                        Attendees = AllAttendees,
                        MixAndMatchGames=new List<MixAndMatchGame>
                        {
                             new MixAndMatchGame
                             { 
                                 Id=1,
                                  RoundId=1,
                                  CourtNumber=1,

                                  Players=new List<MixAndMatchPlayer>{

                                    new MixAndMatchPlayer{


                                         AppUser=AllAttendees[0].AppUser
                                    }
                                     

  


                                  }



                             }


                        }
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
                        Title = "Beach Volleyball",
                        Date = DateTime.UtcNow.AddDays(8),
                        Description = "Activity 8 days in future",
                        Category = "beachvolleyball",
                        City = "Rio",
                        Venue = "Pub",
                        Attendees = AllAttendees
                    },
                    new Activity
                    {
                        Title = "Soccer",
                        Date = DateTime.UtcNow.AddDays(7),
                        Description = "Activity 7 days in future",
                        Category = "soccer",
                        City = "London",
                        Venue = "Wembly Stadium",
                        Attendees = AllAttendees
                    },
                   
                    new Activity
                    {
                        Title = "Grass Volleyball",
                        Date = DateTime.UtcNow.AddDays(18),
                        Description = "Activity 18 days in future",
                        Category = "grassvolleyball",
                        City = "Charlotte",
                        Venue = "grasss",
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
                        Title = "Volleyball",
                        Date = DateTime.UtcNow.AddMonths(4),
                        Description = "Activity 4 months in future",
                        Category = "volleyball",
                        City = "Charlotte",
                        Venue = "CUVC",
                        Attendees = AllAttendees
                    },
                    new Activity
                    {
                        Title = "Mix And Match",
                        Date = DateTime.UtcNow.AddMonths(5),
                        Description = "Activity 5 months in future",
                        Category = "mixandmatch",
                        City = "Charlotte",
                        Venue = "CUVC",
                        Attendees = AllAttendees
                    }
                  
                   
                };

                await context.Activities.AddRangeAsync(activities);
                await context.SaveChangesAsync();
            }
        }
    }
}
