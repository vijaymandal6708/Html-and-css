import React, { useState, useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { CartContext } from "../App";  // Import CartContext

const Categories = () => {
  const { addToCart } = useContext(CartContext); // Access addToCart from context

  const categories = ["All", "Smartphone", "Headphones", "Laptops", "Cameras"];

  const products = [
    { id: 1, title: "Oneplus Nord Ce 2 Lite 5G", price: 19999, image: "category-1.jpg", category: "Smartphone" },
    { id: 2, title: "Realme GT 6", price: 25999, image: "category-2.png", category: "Smartphone" },
    { id: 3, title: "Nothing Phone 2a", price: 15999, image: "category-3.avif", category: "Smartphone" },
    { id: 4, title: "Lava Blaze 5g Pro", price: 12999, image: "category-4.jpg", category: "Smartphone" },
    { id: 5, title: "Samsung Galaxy F15 5G", price: 13999, image: "smartphone5.jpg", category: "Smartphone" },
    { id: 6, title: "IQOO Neo 10R", price: 21999, image: "smartphone6.jpg", category: "Smartphone" },

    { id: 7, title: "Realme Buds Air5", price: 3499, image: "category-5.jpg", category: "Headphones" },
    { id: 8, title: "Hitage Neckband", price: 1099, image: "category-6.jpg", category: "Headphones" },
    { id: 9, title: "Boat Airdopes 181", price: 1399, image: "category-7.jpg", category: "Headphones" },
    { id: 10, title: "Sony Headphone XB-100", price: 19999, image: "category-8.jpg", category: "Headphones" },
    { id: 11, title: "Apple Airpods Max", price: 59999, image: "headphone5.jpeg", category: "Headphones" },
    { id: 12, title: "Truke Buds Clarity", price: 3399, image: "headphone6.jpg", category: "Headphones" },

    { id: 13, title: "HP 15s ,13th Gen Intel Core i3 1315u", price: 45999, image: "laptop1.jpg", category: "Laptops" },
    { id: 14, title: "Asus Vivobook 15 OLED Ryzen 7530u", price: 38000, image: "laptop2.jpg", category: "Laptops" },
    { id: 15, title: "ULTIMUS Apex Laptop Intel Celeron Dual Core", price: 17999, image: "laptop3.jpg", category: "Laptops" },
    { id: 16, title: "MSI Modern 15, Intel Core i7", price: 39999, image: "laptop4.jpg", category: "Laptops" },
    { id: 17, title: "2022 Macbook Air Laptop, M2 Chip", price: 52999, image: "laptop5.jpg", category: "Laptops" },
    { id: 18, title: "2024 MAcBook Pro with M4 Chip", price: 95999, image: "laptop6.jpg", category: "Laptops" },

    { id: 19, title: "Sony Alpha a7 48MP", price: 179999, image: "category-9.jpg", category: "Cameras" },
    { id: 20, title: "Fujifilm X-H2 40MP", price: 197999, image: "category-10.jpg", category: "Cameras" },
    { id: 21, title: "Canon Eos 300D", price: 148999, image: "category-11.jpg", category: "Cameras" },
    { id: 22, title: "Sony Alpha ILCE 24.2MP", price: 51990, image: "category-12.jpg", category: "Cameras" },
    { id: 23, title: "Sony Digital Camera 20MP", price:34999, image: "camera5.webp", category: "Cameras" },
    { id: 24, title: "Sony New Alpha ILCE 24.2MP", price: 73990, image: "camera6.jpg", category: "Cameras" },
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

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px] mt-[35px]">
        {shownProducts.map((product) => (
          <div key={product.id}
            className="h-[400px] border-2 border-gray-200 rounded-[20px] overflow-hidden px-[20px] py-[10px] flex flex-col shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="h-[255px] mb-[10px] flex items-center justify-center">
              <img src={product.image} alt={product.title} className="h-[255px] object-contain"/>
            </div>
            <div>
              <h4 className="font-semibold">{product.title}</h4>
              <p className="text-[13.5px] font-medium">₹{product.price.toLocaleString("en-IN")}</p>
              <div className="flex mt-[3px] text-yellow-400">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <button
                onClick={() => addToCart(product)}
                className="border w-[105px] h-[32px] mt-[7px] bg-sky-400 rounded-[8px] text-white text-[13.5px] font-semibold italic shadow-md hover:bg-sky-500 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
