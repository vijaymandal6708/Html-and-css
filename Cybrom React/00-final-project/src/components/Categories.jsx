import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const Categories = () => {
  const categories = ["All", "Smartphone", "Headphones", "Cameras"];

  const products = [
    { id: 1, title: "Oneplus Nord Ce 2 Lite 5G", price: 19999, image: "category-1.jpg", category: "Smartphone" },
    { id: 2, title: "Realme GT 6", price: 25999, image: "category-2.png", category: "Smartphone" },
    { id: 3, title: "Nothing Phone 2a", price: 15999, image: "category-3.avif", category: "Smartphone" },
    { id: 4, title: "Lava Blaze 5g Pro", price: 12999, image: "category-4.jpg", category: "Smartphone" },
    { id: 5, title: "Lava Blaze 5g Pro", price: 12999, image: "category-4.jpg", category: "Smartphone" },
    { id: 6, title: "Nothing Phone 2a", price: 15999, image: "category-3.avif", category: "Smartphone" },
    { id: 7, title: "Gaming Console", price: 25999, image: "category-2.png", category: "Smartphone" },
    { id: 8, title: "Bluetooth Speaker", price: 19999, image: "category-1.jpg", category: "Smartphone" },

    { id: 9, title: "Realme Buds Air5", price: 3499, image: "category-5.jpg", category: "Headphones" },
    { id: 10, title: "Hitage Neckband", price: 1099, image: "category-6.jpg", category: "Headphones" },
    { id: 11, title: "Boat Airdopes 181", price: 1399, image: "category-7.jpg", category: "Headphones" },
    { id: 12, title: "Sony Headphones", price: 19999, image: "category-8.jpg", category: "Headphones" },
    { id: 13, title: "Sony Headphones", price: 19999, image: "category-8.jpg", category: "Headphones" },
    { id: 14, title: "Boat Airdopes 181", price: 1399, image: "category-7.jpg", category: "Headphones" },
    { id: 15, title: "Kurta", price: 1099, image: "category-6.jpg", category: "Headphones" },
    { id: 16, title: "Saree", price: 3499, image: "category-5.jpg", category: "Headphones" },

    { id: 17, title: "4K Smart Cameras", price: 25000, image: "category-9.jpg", category: "Cameras" },
    { id: 18, title: "DSLR Canon EOS 1500D", price: 38000, image: "category-10.jpg", category: "Cameras" },
    { id: 19, title: "Sony Alpha a6400", price: 75000, image: "category-11.jpg", category: "Cameras" },
    { id: 20, title: "GoPro HERO 11", price: 40000, image: "category-12.jpg", category: "Cameras" },
    { id: 21, title: "Nikon D5600", price: 52000, image: "category-12.jpg", category: "Cameras" },
    { id: 22, title: "Fujifilm X-T4", price: 95000, image: "category-11.jpg", category: "Cameras" },
    { id: 23, title: "Canon EOS R6", price: 210000, image: "category-10.jpg", category: "Cameras" },
    { id: 24, title: "Sony ZV-1", price: 70000, image: "category-9.jpg", category: "Cameras" },
    ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const shownProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Buttons */}
      <hr className="text-gray-200"/>
      <div className="flex gap-4 justify-center mt-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-lg border transition
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
      <div className="mt-10 px-6 grid grid-cols-4 gap-6">
        {shownProducts.map((product) => (
          <div
            key={product.id}
            className="border-2 border-gray-200 rounded-lg p-3 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[280px] object-contain rounded-lg"
            />
            <h4 className="font-semibold mt-2 text-sm">{product.title}</h4>
            <p className="font-semibold">₹{product.price.toFixed(2)}</p>
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
