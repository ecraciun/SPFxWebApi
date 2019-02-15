using System;
using System.Collections.Generic;
using System.Linq;
using SPFxApiDemo.Models;

namespace SPFxApiDemo.Services
{
    public class PeopleService : IPeopleService
    {
        private static readonly List<Models.Person> _people;

        static PeopleService()
        {
            var ids = 0;
            var faker = new Bogus.Faker<Person>()
                .CustomInstantiator(f => new Person { Id = ids++ })
                .RuleFor(p => p.FirstName, f => f.Name.FirstName())
                .RuleFor(p => p.LastName, f => f.Name.LastName())
                .RuleFor(p => p.Email, f => f.Internet.Email())
                .RuleFor(p => p.City, f => f.Address.City());
            _people = faker.Generate(100);
        }

        public Person Get(int id)
        {
            return _people.FirstOrDefault(x => x.Id == id);
        }

        public List<Person> GetAll()
        {
            return _people;
        }
    }
}