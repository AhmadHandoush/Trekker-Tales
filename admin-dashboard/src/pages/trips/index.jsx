import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import TopCard from "../main/components/TopCard";
import "./trips.css";
import TripCard from "./components/TripCard";
import Loader from "../../components/Loader";
import AddTrip from "./components/AddTrip";
import SuccessMessage from "./components/SuccessMessage";

function Trips() {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [status, setStatus] = useState("");
  const token = localStorage.getItem("token");
  const [add, setAdd] = useState(false);
  const [success, setSuccess] = useState(true);
  useEffect(() => {
    const getTrips = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/get_trips", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTrips(data.trips);
        setFilteredData(data.trips);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getTrips();
  }, []);
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  useEffect(() => {
    let result = trips;
    if (selectedMonth !== "") {
      result = result.filter((item) => {
        const month = new Date(item.date).getMonth() + 1;
        return month.toString() === selectedMonth;
      });
    }

    if (status !== "") {
      result = result.filter((item) => item.status === status);
    }
    setFilteredData(result);
  }, [selectedMonth, status]);

  return (
    <>
      {success && <SuccessMessage />}

      <div className="trips">
        {add && <AddTrip setAdd={setAdd} />}
        <div className="add-trip flex">
          <button onClick={() => setAdd(true)}>
            Add
            <IoMdAdd />
          </button>
        </div>
        <div className="filters flex-between">
          <select
            name=""
            id=""
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option value="">Select a Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>{" "}
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="inactive">inactive</option>
          </select>{" "}
        </div>
        <section className="trips-sec">
          <div className="filter"></div>
          <div className="all-trips flex">
            {isLoading ? (
              <Loader />
            ) : (
              filteredData.map((trip, index) => (
                <TripCard trip={trip} key={index} isLoading={isLoading} />
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Trips;
