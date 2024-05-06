import React, { useState, useEffect } from "react";

const AddTrip = ({ setAdd }) => {
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
    const { name, value, files } = e.target;
    if (name === "trip_image") {
      setFormData((prev) => ({ ...prev, trip_image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
    const tripData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "locations") {
        value.forEach((location) => tripData.append("locations[]", location));
      } else {
        tripData.append(key, value);
      }
    });
    try {
      const response = await fetch("http://127.0.0.1:8000/api/add_trip", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: tripData,
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
    <div className="add-trip-box  flex column">
      <div className="close">
        {" "}
        <span onClick={() => setAdd(false)}>X</span>
      </div>
      <h2>Add Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex column input">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter the Trip name"
          />
        </div>
        <div className="flex column input">
          <label> Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Enter the Trip destination"
          />
        </div>
        <div className="flex column input">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Enter the Trip date"
          />
        </div>
        <div className="flex column input">
          <label>Start Time</label>
          <input
            type="time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            placeholder="Enter the Trip start time"
          />
        </div>
        <div className="flex column input">
          <label>End Time</label>
          <input
            type="time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
          />
        </div>
        <div className="flex column input">
          <label> Total Seats</label>
          <input
            type="number"
            name="total_seats"
            value={formData.total_seats}
            onChange={handleChange}
            placeholder="Enter the total seats"
          />
        </div>
        <div className="flex column input">
          <label>Available Seats</label>
          <input
            type="number"
            name="available_seats"
            value={formData.available_seats}
            onChange={handleChange}
            placeholder="Enter the available"
          />
        </div>
        <div className="flex column input">
          <label>Fees</label>
          <input
            type="number"
            name="fees"
            value={formData.fees}
            onChange={handleChange}
            placeholder="Enter the trip fee"
          />
        </div>
        <div className="flex column input">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter the Trip description"
          ></textarea>
        </div>

        <div className="flex column input">
          <label>Trip Image</label>
          <input type="file" name="trip_image" onChange={handleChange} />
        </div>
        <div>
          <label> Select Locations</label>
          <select
            name="locations"
            multiple
            value={formData.selectedLocations}
            onChange={handleLocationChange}
          >
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTrip;
