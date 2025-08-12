import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Fetch categories
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        // Ensure at least 5 categories (for demo we can repeat or add fake ones)
        let updatedCats = [...data];
        while (updatedCats.length < 5) {
          updatedCats.push(`Extra Category ${updatedCats.length + 1}`);
        }
        setCategories(["All", ...updatedCats]);
        setSelectedCategory("All");
      });

    // Fetch all products
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Ensure 8 products per category (duplicate if less)
        const paddedProducts = data.flatMap((p) =>
          Array(8).fill(p).map((item, i) => ({ ...item, id: item.id + "-" + i }))
        );
        setProducts(paddedProducts);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products.slice(0, 40) // 5 categories × 8 products
      : products.filter((p) => p.category === selectedCategory).slice(0, 8);

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex gap-4 justify-center mt-[40px] flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-lg border-[2px] transition duration-200
              ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="mt-[50px] px-[25px] grid grid-cols-4 gap-[25px]">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border-[2px] border-gray-300 rounded-[10px] p-3 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[200px] object-contain rounded-[10px]"
            />
            <h4 className="font-semibold mt-2 text-sm">{product.title}</h4>
            <p className="font-semibold">₹{(product.price * 80).toFixed(2)}</p>
            <div className="flex text-[rgb(68,202,250)]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
