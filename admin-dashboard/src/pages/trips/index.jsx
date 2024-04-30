import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import TopCard from "../main/components/TopCard";

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
        setTrips(data.trips_number);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getTrips();
  }, []);
  return (
    <div className="trips">
      <div className="add-trip">
        <button>
          Add
          <IoMdAdd />
        </button>
      </div>
      <section className="trips-sec">
        <div className="filter"></div>
        <div className="all-trips flex"></div>
      </section>
    </div>
  );
}

export default Trips;
