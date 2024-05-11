import { FaStar } from "react-icons/fa6";
import Base_url from "../../../components/Base_url";

function TopCard({ trip, average_rating }) {
  const { name, trip_image } = trip;
  let rating = parseFloat(average_rating).toFixed(1);
  const Base_URL = Base_url();

  return (
    <div className="top-card">
      <div className="rating flex-items">
        <FaStar />
        {rating}
      </div>
      <img
        src={{ uri: `${Base_URL}/images/${trip.trip_image}` }}
        alt={name}
        className="s-image"
      />

      <div className="bottom"></div>
      <h2>{name}</h2>
    </div>
  );
}

export default TopCard;
