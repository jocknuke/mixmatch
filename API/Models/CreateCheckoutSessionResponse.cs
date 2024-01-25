using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class CreateCheckoutSessionResponse
    {
        public string SessionId { get; set; }
		public string PublicKey { get; set; }

        public string Session_Url { get; set; }       
    }
}