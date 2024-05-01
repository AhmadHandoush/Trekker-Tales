import Loader from "../../../components/Loader";

function TripCard({ trip, isLoading }) {
  const { name, trip_image } = trip;

  return (
    <div className="trip-card">
      {isLoading ? (
        <Loader />
      ) : (
        <img
          // src={`http://yourdomain.com/storage/images/${trip_image}`}
          src="./shutterstock_585782942.jpg"
          alt={name}
          className="s-image"
        />
      )}

      <div className="bottom"></div>
      <h2>{name}</h2>
    </div>
  );
}

export default TripCard;
