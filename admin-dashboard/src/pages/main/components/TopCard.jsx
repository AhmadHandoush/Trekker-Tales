import { FaStar } from "react-icons/fa6";

function TopCard({ trip, average_rating }) {
  const { name, trip_image } = trip;
  let rating = parseFloat(average_rating).toFixed(1);

  return (
    <div className="top-card">
      <div className="rating">
        <FaStar />
        {rating}
      </div>
      <img
        // src={`http://yourdomain.com/storage/images/${trip_image}`}
        src="./360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg"
        alt={name}
        className="s-image"
      />

      <div className="bottom"></div>
      <h2>{name}</h2>
    </div>
  );
}

export default TopCard;
