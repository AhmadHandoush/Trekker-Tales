import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import TopCard from "../main/components/TopCard";
import "./trips.css";
import TripCard from "./components/TripCard";
import Loader from "../../components/Loader";

function Trips() {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
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

        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getTrips();
  }, []);
  console.log(trips[0]);
  return (
    <div className="trips">
      <div className="add-trip flex">
        <button>
          Add
          <IoMdAdd />
        </button>
      </div>
      <div className="filters flex-between">
        <select name="" id="">
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
        <select name="" id="">
          <option value="">Status</option>
          <option value="1">Active</option>
          <option value="2">Pending</option>
          <option value="3">inactive</option>
        </select>{" "}
        <select name="" id="">
          <option value="name">ahmad</option>
          <option value="name">ahmad</option>
          <option value="name">ahmad</option>
        </select>
      </div>
      <section className="trips-sec">
        <div className="filter"></div>
        <div className="all-trips flex">
          {isLoading ? (
            <Loader />
          ) : (
            trips.map((trip, index) => (
              <TripCard trip={trip} key={index} isLoading={isLoading} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Trips;
