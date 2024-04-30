import InfoCard from "./components/InfoCard";
import "./main.css";

function Main() {
  return (
    <div className="main">
      <section className="cards-info flex">
        <InfoCard>
          <h2>Trips</h2>
          <h1>13</h1>
        </InfoCard>
        <InfoCard>
          <h2>Trips</h2>
          <h1>13</h1>
        </InfoCard>
        <InfoCard>
          <h2>Trips</h2>
          <h1>13</h1>
        </InfoCard>
      </section>
    </div>
  );
}

export default Main;
