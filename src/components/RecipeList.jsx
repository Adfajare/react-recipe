import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-6">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
        >
          <h3 className="text-xl font-bold mb-2">{recipe.recipe.label}</h3>
          <img
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <p className="text-gray-600">
            Calories: {Math.round(recipe.recipe.calories)}
          </p>
          <Link
            to={`/recipe/${encodeURIComponent(recipe.recipe.uri)}`} // Link ke halaman detail
            className="text-blue-500"
          >
            View Recipe Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
