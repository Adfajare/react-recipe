import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./output.css";
import RecipeSearch from "./components/RecipeSearch";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <Router>
      <div className="min-h-screen p-6 bg-gradient-t-b from-green-200 to-green-400">
        <h1 className="text-4xl font-bold text-center mb-8">Recipe Finder</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeSearch setRecipes={setRecipes} />
                <RecipeList recipes={recipes} />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
