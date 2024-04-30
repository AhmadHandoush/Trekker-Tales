function TopCard({ trip }) {
  const { name, trip_image } = trip;
  return (
    <div className="top-card">
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

export default TopCard;
