import InfoCard from "./components/InfoCard";
import "./main.css";
import TopCard from "./components/TopCard";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { BASE_URL } from "../../components/Base_url";
// import { BASE_URL } from "../../components/Base_url";

function Main() {
  const [tripsNumber, setTripsNumber] = useState(null);
  const [usersNumber, setUsersNumber] = useState(null);
  const [highest, setHighest] = useState([]);
  const [teachersNumber, setTeachersNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  useEffect(() => {
    const getTrips = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/api/get_trips_number`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTripsNumber(data.trips_number);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getTrips();
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/api/get_users_number`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsersNumber(data.users_number);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getUsers();
    const getTeachers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/api/get_teachers_number`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTeachersNumber(data.teachers_number);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getTeachers();
    const get_highest = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/api/get_highest_rated`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setHighest(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    get_highest();
  }, []);

  return (
    <div className="main">
      <section className="cards-info flex">
        <InfoCard>
          <h2>Trips</h2>
          <h1>{isLoading ? <Loader /> : tripsNumber}</h1>
        </InfoCard>
        <InfoCard>
          <h2>Teachers</h2>
          <h1>{isLoading ? <Loader /> : teachersNumber}</h1>
        </InfoCard>
        <InfoCard>
          <h2>Users</h2>
          <h1>{isLoading ? <Loader /> : usersNumber}</h1>
        </InfoCard>
      </section>
      <section className="top-trips">
        <h2>Highest Rating Trips:</h2>
        <div className="top-trips-cards flex">
          {isLoading ? (
            <Loader />
          ) : (
            highest.map((trip) => (
              <TopCard
                trip={trip.trip}
                key={trip.trip.id}
                average_rating={trip.average_rating}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Main;
