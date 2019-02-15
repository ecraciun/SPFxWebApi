using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SPFxApiDemo.Models;
using SPFxApiDemo.Services;

namespace SPFxApiDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly IPeopleService _peopleService;

        public PeopleController(IPeopleService peopleService)
        {
            _peopleService = peopleService ?? throw new ArgumentNullException(nameof(peopleService));
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Person>> Get()
        {
            return _peopleService.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Person> Get(int id)
        {
            return _peopleService.Get(id);
        }
    }
}