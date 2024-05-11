import { useState } from "react";

function Base_url() {
  const [baseUrl, setBaseUrl] = useState("http://192.168.0.103:8000");

  return baseUrl;
}

export default Base_url;
