using SPFxApiDemo.Models;
using System.Collections.Generic;

namespace SPFxApiDemo.Services
{
    public interface IPeopleService
    {
        List<Person> GetAll();
        Person Get(int id);
    }
}