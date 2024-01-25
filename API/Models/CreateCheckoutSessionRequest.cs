using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class CreateCheckoutSessionRequest
    {
       
		public string PriceId { get; set; }
		
		public string SuccessUrl { get; set; }
		
		public string FailureUrl { get; set; }
    }
}