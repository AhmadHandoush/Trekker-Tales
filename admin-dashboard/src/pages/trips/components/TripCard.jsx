function TripCard({ trip }) {
  const { name, trip_image } = trip;
  console.log(trip);
  return (
    <div className="trip-card">
      <img
        src={`http://yourdomain.com/storage/images/${trip_image}`}
        alt={name}
        className="s-image"
      />

      <div className="bottom"></div>
      <h2>{name}</h2>
    </div>
  );
}

export default TripCard;
