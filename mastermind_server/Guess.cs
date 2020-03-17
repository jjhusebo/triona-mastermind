using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mastermind_server
{
    public class Guess
    {
        public string GuessString { get; set; }
        public int Whites { get; set; }
        public int Blacks { get; set; }
    }
}
