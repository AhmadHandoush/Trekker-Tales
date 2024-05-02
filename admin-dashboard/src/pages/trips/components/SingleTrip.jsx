import { useState } from "react";
import { useParams } from "react-router-dom";

function SingleTrip() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  return <div>hello {id}</div>;
}

export default SingleTrip;
