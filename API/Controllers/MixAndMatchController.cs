using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.MixAndMatch;
using Domain;
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{
    
    public class MixAndMatchController : BaseApiController
    {

        

       

        [HttpPost("{id}")]
        public async Task<IActionResult> CreateMatch(Guid id, MixAndMatchGame[] mixAndMatchGames)
        {
            return HandleResult(await Mediator.Send(new Create.Command {  ActivityId=id,  MixAndMatchGames=mixAndMatchGames  }));
        }


         [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGame(Guid id, MixAndMatchGame mixAndMatchGame)
        {
            return HandleResult(await Mediator.Send(new Edit.Command {  ActivityId=id,  mixAndMatchGame=mixAndMatchGame  }));
        }
       
         [HttpGet]
        public async Task<IActionResult> GetGames([FromQuery] MixAndMatchParams param)
        {
            return HandleResult(await Mediator.Send(new List.Query { Params = param }));
        }





        
    }
}