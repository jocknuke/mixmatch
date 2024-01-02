using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.MixAndMatch;
using Domain;


namespace API.Controllers
{
    
    public class MixAndMatchController : BaseApiController
    {

        

       

        [HttpPost("{id}")]
        public async Task<IActionResult> CreateMatch(Guid id, MixAndMatchGame[] mixAndMatchGames)
        {
            return HandleResult(await Mediator.Send(new Create.Command {  ActivityId=id,  MixAndMatchGames=mixAndMatchGames  }));
        }





        
    }
}