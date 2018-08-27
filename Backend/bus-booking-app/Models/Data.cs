using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using bus_booking_app.Models;

namespace bus_booking_app.Models
{
    public class Data
    {
        SqlConnection _con = null;

        public void SqlConnection()
        {
            try
            {
                string connectionString = @"Server=tcp:busbookingserver.database.windows.net,1433;Initial Catalog=busbooking;Persist Security Info=False;User ID=testuser;Password=password@123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30";
                _con = new SqlConnection(connectionString);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
        
        public IEnumerable<iBusList> GetBusList()
        {
            List<iBusList> busList = new List<iBusList>();
            try
            {
                _con.Open();
                string sql1 = "SELECT busDetail.travelID, driverID, busSeats, movie, chargingPoints, waterBottle, wifi, isAC, busType, journeyID, destination, source, boardingTime, dropingTime, travelDate, fare, travelName, busJourneyDetail.busID FROM dbo.busJourneyDetail LEFT JOIN dbo.busDetail ON dbo.busDetail.busID = dbo.busJourneyDetail.busID LEFT JOIN dbo.travelDetail ON busDetail.travelID = travelDetail.travelID";
                SqlCommand cmd = new SqlCommand(sql1, _con);
                SqlDataReader dataread = cmd.ExecuteReader();
                while (dataread.Read())
                {
                    iBusList iBus = new iBusList();
                    iBus.busID = Convert.ToInt32(dataread["busID"]);
                    iBus.travelID = Convert.ToInt32(dataread["travelID"]);
                    iBus.driverID = Convert.ToInt32(dataread["driverID"]);
                    iBus.journeyID = Convert.ToInt32(dataread["journeyID"]);
                    iBus.busSeats = Convert.ToInt32(dataread["busSeats"]);
                    iBus.busType = dataread["busType"].ToString();
                    iBus.destination = dataread["destination"].ToString();
                    iBus.source = dataread["source"].ToString();
                    iBus.boardingTime = dataread["boardingTime"].ToString();
                    iBus.dropingTime = dataread["dropingTime"].ToString();
                    iBus.travelDate = dataread["travelDate"].ToString();
                    iBus.fare = Convert.ToInt32(dataread["fare"]);
                    iBus.travelName = dataread["travelName"].ToString();
                    iBus.movie = Convert.ToBoolean(dataread["movie"]);
                    iBus.chargingPoints = Convert.ToBoolean(dataread["chargingPoints"]);
                    iBus.waterBottle = Convert.ToBoolean(dataread["waterBottle"]);
                    iBus.wifi = Convert.ToBoolean(dataread["wifi"]);
                    iBus.isAC = Convert.ToBoolean(dataread["isAC"]);
                    busList.Add(iBus);
                }
                _con.Close();
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return busList;
        }
    }
}