using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using Stripe.Checkout;

namespace API.Controllers
{
    
   
    public class CheckoutController : BaseApiController
    {
       [AllowAnonymous]
        [HttpPost]
        

         public async  Task<IActionResult>  Create([FromBody] CreateCheckoutSessionRequest req)
        {

         


             var domain = "http://localhost:3000";
            var options = new SessionCreateOptions
            {
                LineItems = new List<SessionLineItemOptions>
                {
                  new SessionLineItemOptions
                  {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    Price = req.PriceId,
                    Quantity = 1,
                  },
                },
                Mode = "payment",
                SuccessUrl = domain + req.SuccessUrl,
                CancelUrl = domain + req.FailureUrl,
            };
            var service = new SessionService();
             service.Create(options);

           try
			{
				var session = await service.CreateAsync(options);
        
				return Ok(new CreateCheckoutSessionResponse
				{
					SessionId = session.Id,
          Session_Url=session.Url
					
				});
			}
			catch (StripeException e)
			{
				Console.WriteLine(e.StripeError.Message);
				return BadRequest(new ErrorResponse
				{
					ErrorMessage = new ErrorMessage
					{
						Message = e.StripeError.Message,
					}
				});
			}
        }
    } 
}