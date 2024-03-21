import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const API_Key = "pEhyfJN9L6Oy5gYQJ5YY28kmaD683OncSIqbQsVmtMM";

  const query = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos/?client_id=${API_Key}&query=${searchQuery}`
    );
    setData(response.data.results);
  };

  useEffect(() => {
    query();
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container">
      <div className="box-container">
        <h1 className="title">Image Generation App</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search for images"
            value={searchQuery}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
      </div>
      <div className="image-container">
        {data.map((image) => (
          <div key={image.id} className="image-card">
            <img src={image.urls.small} alt={image.alt_description} />
            <div className="description">{image.alt_description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
