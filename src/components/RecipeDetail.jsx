import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const APP_ID = "3306e412";
        const APP_KEY = "c3fbc26743a933c5c17f02ac1ef05ba4";
        const response = await axios.get(
          `https://api.edamam.com/search?r=${encodeURIComponent(
            id
          )}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        setRecipeDetail(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe detail", error);
        setLoading(false);
      }
    };
    fetchRecipeDetail();
  }, [id]);

  if (loading) {
    return <p>Loadingg....</p>;
  }

  if (!recipeDetail) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="recipe-detail p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">{recipeDetail.label}</h1>
      <img
        src={recipeDetail.image}
        alt={recipeDetail.label}
        className="w-full h-40 object-cover rounded-md mb-6"
      />
      <p className="text-xl mb-2">
        <strong>Calories: </strong>
        {Math.round(recipeDetail.calories)}
      </p>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Ingredients</h2>
      <ul className="list-disc ml-6 mt-2">
        {recipeDetail.ingredientLines.map((ingredient, index) => (
          <li className="text-lg" key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-blue-500">
        <a href={recipeDetail.url} target="_blank" rel="noopener noreferrer">
          View Full Recipe
        </a>
      </p>
    </div>
  );
};

export default RecipeDetail;
