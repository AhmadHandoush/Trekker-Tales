import { FaStar } from "react-icons/fa6";

function TopCard({ trip, average_rating }) {
  const { name, trip_image } = trip;
  let rating = parseFloat(average_rating).toFixed(1);

  return (
    <div className="top-card">
      <div className="rating flex-items">
        <FaStar />
        {rating}
      </div>
      <img
        src={{ uri: `http://127.0.0.1:8000/${trip_image}` }}
        alt={name}
        className="s-image"
      />

      <div className="bottom"></div>
      <h2>{name}</h2>
    </div>
  );
}

export default TopCard;
