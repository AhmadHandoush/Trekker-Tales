import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import { BASE_URL } from "../../../components/Base_url";

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

  useEffect(() => {
    const get_trip = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/api/get_trip/${id}`, {
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
          <img src={`${BASE_URL}/${trip_image}`} alt="" />
          <div className="single-overlay"></div>
          <div className="infos flex column ">
            <div className="first flex-between">
              <div className="name">{name}</div>
              <div className="fees">${parseInt(fees)}</div>
            </div>
            <div className="second flex-between">
              <div className="date">{date}</div>
              <div className="destination">{destination}</div>
            </div>
          </div>
        </div>
      )}
      <section className="reviews"></section>
    </div>
  );
}

export default SingleTrip;
