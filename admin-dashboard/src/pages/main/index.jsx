import InfoCard from "./components/InfoCard";
import "./main.css";
import TopCard from "./components/TopCard";
import { useEffect, useState } from "react";

function Main() {
  const [tripsNumber, setTripsNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getTrips = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/get_trips_number",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTripsNumber(data.trips_number);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getTrips();
  }, []);
  return (
    <div className="main">
      <section className="cards-info flex">
        <InfoCard>
          <h2>Trips</h2>
          <h1>{tripsNumber}</h1>
        </InfoCard>
        <InfoCard>
          <h2>Teachers</h2>
          <h1>13</h1>
        </InfoCard>
        <InfoCard>
          <h2>Users</h2>
          <h1>13</h1>
        </InfoCard>
      </section>
      <section className="top-trips">
        <h2>Highest Rating Trips:</h2>
        <div className="top-trips-cards flex">
          <TopCard />
          <TopCard />
          <TopCard />
        </div>
      </section>
    </div>
  );
}

export default Main;
