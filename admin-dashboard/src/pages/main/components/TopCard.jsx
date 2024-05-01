function TopCard({ trip }) {
  const { name, trip_image } = trip;
  return (
    <div className="top-card">
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
