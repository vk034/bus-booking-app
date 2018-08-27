using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace bus_booking_app.Models
{
    public class iBusList
    {
        public int busID { get; set; }
        public int travelID { get; set; }
        public int driverID { get; set; }
        public int journeyID { get; set; }
        public int busSeats { get; set; }
        public string busType { get; set; }
        public string destination { get; set; }
        public string source { get; set; }
        public string boardingTime { get; set; }
        public string dropingTime { get; set; }
        public string travelDate { get; set; }
        public int fare { get; set; }
        public string travelName { get; set; }
        public bool movie { get; set; }
        public bool chargingPoints { get; set; }
        public bool waterBottle { get; set; }
        public bool wifi { get; set; }
        public bool isAC { get; set; }   
    }
}