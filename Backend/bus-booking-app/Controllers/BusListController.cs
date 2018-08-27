using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using bus_booking_app.Models;

namespace bus_booking_app.Controllers
{
    public class BusListController : ApiController
    {
        Data db = new Data();
       
        [HttpGet]
        public IEnumerable<iBusList> BusList()
        {
            db.SqlConnection();
            return db.GetBusList();
        }
    }
}
