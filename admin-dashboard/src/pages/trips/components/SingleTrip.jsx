import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader";

function SingleTrip() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const {
    name,
    destination,
    description,
    locations,
    date,
    start_time,
    end_time,
    breakfast,
    dinner,
    lunch,
    fees,
    status,
    trip_image,
  } = data;
  useEffect(() => {
    const get_trip = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://127.0.0.1:8000/api/get_trip/${id}`,
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
        setData(data);
        console.log(data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    get_trip();
  }, []);
  return (
    <div className="single ">
      <div className="info flex">
        <div className="single-left">
          <img
            src={`http://127.0.0.1:8000/${trip_image}`}
            alt={name}
            className="s-image"
          />
        </div>
        <div className="single-right flex column">
          <h1>{name}</h1>
          <div className="flex-items flex-between">
            <h5>Destination:</h5>
            <h4>{destination}</h4>
          </div>{" "}
          <div className="flex-items flex-between">
            <h5>date:</h5>
            <h4>{date}</h4>
          </div>
          <div className="flex-items flex-between">
            <h5>Start_time:</h5>
            <h4>{start_time}</h4>
          </div>
          <div className="flex-items flex-between">
            <h5>End-time:</h5>
            <h4>{end_time}</h4>
          </div>
          <div className="flex-items flex-between">
            <h5>date:</h5>
            <h4>{date}</h4>
          </div>
          <div className="flex-items flex-between">
            <h5>Breakfast:</h5>
            <h4>{breakfast}</h4>
          </div>
          <div className="flex-items flex-between">
            <h5>Lunch:</h5>
            <h4>{lunch}</h4>
          </div>
          <div className="flex-items flex-between">
            <h5>Dinner:</h5>
            <h4>{dinner}</h4>
          </div>
          <div className="flex-items flex-between">
            <h5>Fee:</h5>
            <h2>$ {parseInt(fees)}</h2>
          </div>{" "}
          <div className="flex-items flex-between">
            <h5>Locations:</h5>
            <h2>
              {locations.map((location) => (
                <span>{location.name} </span>
              ))}
            </h2>
          </div>
          <div className="flex-items flex-between">
            <h5>Description:</h5>
            <h2>{description}</h2>
          </div>
          <div className="update-trip flex-center">
            <button className="btn-update">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTrip;
