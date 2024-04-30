function TopCard({ trip }) {
  const { name } = trip;
  return (
    <div className="top-card">
      <img
        src="./360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg"
        alt="trip_image"
        className="s-image"
      />
      <div className="bottom"></div>
      <h2>{name}</h2>
    </div>
  );
}

export default TopCard;
