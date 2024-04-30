import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import TopCard from "../main/components/TopCard";
import "./trips.css";
import TripCard from "./components/TripCard";

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
          <option value="name">ahmad</option>
          <option value="name">ahmad</option>
          <option value="name">ahmad</option>
        </select>{" "}
        <select name="" id="">
          <option value="name">ahmad</option>
          <option value="name">ahmad</option>
          <option value="name">ahmad</option>
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
          {trips.map((trip, index) => (
            <TripCard trip={trip} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Trips;
