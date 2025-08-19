import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { CartContext } from "../App";

const LatestProducts = () => {
  const { addToCart } = useContext(CartContext);

  const featuredProducts = [
    { id: 7, title: "Realme Buds Air5", price:3499, image:"category-5.jpg"},
    { id: 1, title: "Oneplus Nord Ce 2 lite 5G", price:19999, image:"category-1.jpg"},
    { id: 8, title: "Hitage Neckband", price:1099, image:"category-6.jpg"},
    { id: 14, title: "Asus Vivobook 15 OLED...", price:19999, image:"laptop2.jpg"},
    { id: 4, title: "Lava Blaze 5G pro", price:12999, image:"category-4.jpg"},
    { id: 20, title: "Fujifilm X-H2 40MP", price:197999, image:"category-10.jpg"},
    { id: 9, title: "Boat Airdopes 181", price:1399, image:"category-7.jpg"},
    { id: 15, title: "ULTIMUS Apex Laptop Int...", price:17999, image:"laptop3.jpg"},
    { id: 21, title: "Canon Eos 300D", price:19999, image:"category-11.jpg"},
    { id: 5, title: "Samsung Galaxy F15 5G", price:13999, image:"smartphone5.jpg"},
    { id: 10, title: "Sony Headphone XB-100", price:19999, image:"category-8.jpg"},
  ];

  return (
    <div className="px-6 py-8">
      <h1 className="font-bold text-center text-[22px] mb-6 italic text-black">
        Latest Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px]">
        {featuredProducts.map((product) => (
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
};

export default LatestProducts;
