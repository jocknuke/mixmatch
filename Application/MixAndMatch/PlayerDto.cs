using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.MixAndMatch
{
    public class PlayerDto
    {
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public string Gender { get; set; }
        public string Image { get; set; }
        public int Team { get; set; }
        public string AppUserId { get; set; }

        public int totalPoints { get; set; }
        
    }
}