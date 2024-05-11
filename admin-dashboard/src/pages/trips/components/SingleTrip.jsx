import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import Base_url from "../../../components/Base_url";

function SingleTrip() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const token = localStorage.getItem("token");
  const {
    name,
    destination,
    description,
    locations,
    date,
    start_time,
    end_time,
    fees,
    status,
    trip_image,
  } = data;
  const Base_URL = Base_url();
  useEffect(() => {
    const get_trip = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${Base_URL}/api/get_trip/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
        setOk(true);
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
      {isLoading ? (
        <Loader />
      ) : (
        <div className="info flex">
          <div className="single-left">
            <img
              src={`${Base_URL}/${trip_image}`}
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
              <h5>Fee:</h5>
              <h2>$ {parseInt(fees)}</h2>
            </div>{" "}
            <div className="flex-items flex-between">
              <h5>Locations:</h5>
              {/* <h2>
              {setOk &&
                locations.map((location) => <span>{location.name} </span>)}
            </h2> */}
            </div>
            <div className="flex-items flex-between">
              <h5>Description:</h5>
              <p>{description}</p>
            </div>
            <div className="flex-items flex-between">
              <h5>Status:</h5>
              <h2>{status}</h2>
            </div>
            <div className="update-trip flex-center">
              <button className="btn-update">Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleTrip;
