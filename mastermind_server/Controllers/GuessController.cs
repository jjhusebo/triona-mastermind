﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace mastermind_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuessController : ControllerBase
    {
        private readonly IMemoryCache _cache;

        public GuessController(IMemoryCache memoryCache)
        {
            _cache = memoryCache;
        }

        // GET: api/Guess
        [HttpGet]
        public ActionResult<List<Guess>> Get()
        {
            var cacheGuesses = _cache.Get<List<Guess>>("prevGuesses");
            return cacheGuesses;
        }

        // GET: api/Guess/5
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<Guess> Get(int id)
        {
            var guesses = _cache.Get<List<Guess>>("prevGuesses");
            return guesses.ElementAt(id);
        }

        // POST: api/Guess
        [HttpPost]
        public ActionResult<List<Guess>> Post([FromBody] Guess guess)
        {
            var cachedGuesses = _cache.Get<List<Guess>>("prevGuesses");
            var result = CheckGuess(guess);
            result.GuessString = guess.GuessString;
            cachedGuesses.Add(result);

            return _cache.Set("prevGuesses", cachedGuesses); ;
        }

        private Guess CheckGuess(Guess guess)
        {
            Guess result = new Guess();
            var possibleChars = "ABCDEF";
            var code = _cache.Get<string>("mastermindCode");
            var blackAndWhiteCount = 0;
            var blackCount = 0;
            for (var i = 0; i < 4; i++)
            {
                var guessChar = guess.GuessString[i];
                if (guessChar == code[i])
                    blackCount++;
            }

            for (var k = 0; k < 6; k++)
            {
                var possChar = possibleChars[k];
                var freqAnswer = code.Split(possChar).Length - 1;
                var freqGuess = guess.GuessString.Split(possChar).Length - 1;

                blackAndWhiteCount += Math.Min(freqAnswer, freqGuess);
            }

            var whiteCount = blackAndWhiteCount - blackCount;

            result.Whites = whiteCount;
            result.Blacks = blackCount;
            return result;
        }
    }
}
