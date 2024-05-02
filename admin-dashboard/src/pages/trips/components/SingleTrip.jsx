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
        <div className="single-right">
          <img src={`http://127.0.0.1:8000/images/${trip_image}`} alt="" />
        </div>
        <div className="single-left"></div>
      </div>
    </div>
  );
}

export default SingleTrip;
