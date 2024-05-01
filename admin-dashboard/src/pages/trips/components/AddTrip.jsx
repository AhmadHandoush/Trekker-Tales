import React, { useState, useEffect } from "react";

const AddTrip = () => {
  const token = localStorage.getItem("token");
  const [locations, setLocations] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    date: "",
    start_time: "",
    end_time: "",
    total_seats: "",
    available_seats: "",
    fees: "",
    description: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    locations: [],
  });

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/get_locations",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch locations");
        }
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocationChange = (e) => {
    const selectedLocations = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, locations: selectedLocations });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://your-laravel-api.com/api/trips", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to create trip");
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for trip details */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {/* Other input fields go here */}

      {/* Location selection */}
      <select multiple name="locations" onChange={handleLocationChange}>
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTrip;
