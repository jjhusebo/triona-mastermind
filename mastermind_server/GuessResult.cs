using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mastermind_server
{
    public class GuessResult
    {
        public List<Guess> Guesses { get; set; }
        public int whites { get; set; }
        public int blacks { get; set; }
    }
}
