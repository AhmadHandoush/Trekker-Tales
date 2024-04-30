import InfoCard from "./components/InfoCard";
import "./main.css";
import TopCard from "./components/TopCard";

function Main() {
  return (
    <div className="main">
      <section className="cards-info flex">
        <InfoCard>
          <h2>Trips</h2>
          <h1>13</h1>
        </InfoCard>
        <InfoCard>
          <h2>Teachers</h2>
          <h1>13</h1>
        </InfoCard>
        <InfoCard>
          <h2>Users</h2>
          <h1>13</h1>
        </InfoCard>
      </section>
      <section className="top-trips">
        <h2>Highest Rating Trips:</h2>
        <div className="top-trips-cards flex">
          <TopCard />
          <TopCard />
          <TopCard />
        </div>
      </section>
    </div>
  );
}

export default Main;
