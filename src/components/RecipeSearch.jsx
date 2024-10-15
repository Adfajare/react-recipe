import axios from "axios";
import React, { useState } from "react";

const RecipeSearch = ({ setRecipes }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const APP_ID = "3306e412";
    const APP_KEY = "c3fbc26743a933c5c17f02ac1ef05ba4";

    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((response) => {
        setRecipes(response.data.hits);
      })
      .catch((error) => {
        console.error("Error Fetching the recipes", error);
      });
  };

  return (
    <div className="search-bar flex justify-center mb-3">
      <input
        type="text"
        value={query}
        className="border p-2 shadow-inner rounded-md"
        placeholder="Enter ingredient"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="ml-3 bg-green-500 text-white p-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};
export default RecipeSearch;
