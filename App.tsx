import React from 'react';
import { Search, ChefHat, Clock, Users, BookOpen } from 'lucide-react';
import { AdUnit } from './components/AdUnit';

// Mock data for featured recipes
const featuredRecipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80",
    cookTime: "30 mins",
    servings: 4,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Creamy Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
    cookTime: "45 mins",
    servings: 6,
    rating: 4.7,
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    cookTime: "25 mins",
    servings: 2,
    rating: 4.9,
  }
];

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
        <div className="flex items-center text-gray-600 text-sm space-x-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
        <div className="mt-2 text-yellow-500">
          {'★'.repeat(Math.floor(recipe.rating))}
          <span className="text-gray-400 text-sm ml-1">({recipe.rating})</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">NextGenRecipes</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <BookOpen className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Discover Delicious Recipes</h2>
            <p className="text-xl mb-8">Find and share everyday cooking inspiration</p>
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Top Ad Unit */}
        <div className="mb-8">
          <AdUnit slot="1234567890" className="min-h-[90px]" />
        </div>

        {/* Featured Recipes */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* Middle Ad Unit */}
        <div className="my-8">
          <AdUnit slot="0987654321" className="min-h-[250px]" />
        </div>

        {/* Categories */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Breakfast', 'Main Dishes', 'Desserts', 'Healthy'].map((category) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow-sm p-6 text-center cursor-pointer hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Ad Unit */}
        <div className="mt-8">
          <AdUnit slot="5432109876" className="min-h-[90px]" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <ChefHat className="h-6 w-6 text-orange-500" />
                <span className="ml-2 font-bold">NextGenRecipes</span>
              </div>
              <p className="mt-2 text-gray-400">Discover and share the best recipes</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Submit Recipe</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <p className="text-gray-400">Follow us for more recipes and updates</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 NextGenRecipes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;