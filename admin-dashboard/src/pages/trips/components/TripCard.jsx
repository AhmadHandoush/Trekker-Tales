import { BASE_URL } from "../../../components/Base_url";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";

function TripCard({ trip, isLoading }) {
  const { name, trip_image, id } = trip;

  return (
    <Link to={`/trips/${id}`}>
      <div className="trip-card">
        {isLoading ? (
          <Loader />
        ) : (
          <img
            src={`${BASE_URL}/${trip_image}`}
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
