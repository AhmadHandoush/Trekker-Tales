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
    breakfast: false,
    lunch: false,
    dinner: false,
    trip_image: null,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://your-laravel-api.com/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to create trip");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="add-trip-box center flex column">
      <h2>Add Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Time:
          <input
            type="time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
          />
        </label>
        <label>
          End Time:
          <input
            type="time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
          />
        </label>
        <label>
          Total Seats:
          <input
            type="number"
            name="total_seats"
            value={formData.total_seats}
            onChange={handleChange}
          />
        </label>
        <label>
          Available Seats:
          <input
            type="number"
            name="available_seats"
            value={formData.available_seats}
            onChange={handleChange}
          />
        </label>
        <label>
          Fees:
          <input
            type="number"
            name="fees"
            value={formData.fees}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Breakfast:
          <input
            type="checkbox"
            name="breakfast"
            checked={formData.breakfast}
            onChange={handleChange}
          />
        </label>
        <label>
          Lunch:
          <input
            type="checkbox"
            name="lunch"
            checked={formData.lunch}
            onChange={handleChange}
          />
        </label>
        <label>
          Dinner:
          <input
            type="checkbox"
            name="dinner"
            checked={formData.dinner}
            onChange={handleChange}
          />
        </label>
        <label>
          Trip Image:
          <input type="file" name="trip_image" onChange={handleChange} />
        </label>
        <label>
          Select Locations:
          <select
            name="selectedLocations"
            multiple
            value={formData.selectedLocations}
            onChange={handleChange}
          >
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTrip;
