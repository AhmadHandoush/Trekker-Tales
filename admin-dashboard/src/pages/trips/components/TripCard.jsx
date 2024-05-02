import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";

function TripCard({ trip, isLoading }) {
  const { name, trip_image } = trip;

  return (
    <Link to={""}>
      {" "}
      <div className="trip-card">
        {isLoading ? (
          <Loader />
        ) : (
          <img
            src={`http://127.0.0.1:8000/${trip_image}`}
            alt={name}
            className="s-image"
          />
        )}

        <div className="bottom"></div>
        <h2>{name}</h2>
      </div>
    </Link>
  );
}

export default TripCard;
