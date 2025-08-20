import React, { useContext } from 'react';
import { FaStar } from "react-icons/fa6";
import { CartContext } from "../App";

const FeaturedProducts = () => {
  const { addToCart } = useContext(CartContext);

  const featuredProducts = [
    { id: 2, title: "Relame GT6", price: 25999, image: "category-2.png" },
    { id: 13, title: "HP 15s , 13th Gen Intel Core i3 1315u", price: 45999, image: "laptop1.jpg" },
    { id: 3, title: "Nothing Phone2a", price: 15999, image: "category-3.avif" },
    { id: 19, title: "Sony Alpha a7 48MP", price: 179999, image: "category-9.jpg" },
    { id: 7, title: "Realme Buds Air5", price: 3499, image: "category-5.jpg" },
    { id: 1, title: "Oneplus Nord Ce 2 lite 5G", price: 19999, image: "category-1.jpg" },
    { id: 8, title: "Hitage Neckband", price: 1099, image: "category-6.jpg" },
    { id: 14, title: "Asus Vivobook 15 OLED...", price: 19999, image: "laptop2.jpg" },
    { id: 4, title: "Lava Blaze 5G pro", price: 12999, image: "category-4.jpg" },
    { id: 20, title: "Fujifilm X-H2 40MP", price: 197999, image: "category-10.jpg" },
    { id: 9, title: "Boat Airdopes 181", price: 1399, image: "category-7.jpg" },
    { id: 15, title: "ULTIMUS Apex Laptop Int...", price: 17999, image: "laptop3.jpg" },
    { id: 21, title: "Canon Eos 300D", price: 19999, image: "category-11.jpg" },
    { id: 5, title: "Samsung Galaxy F15 5G", price: 13999, image: "smartphone5.jpg" },
    { id: 10, title: "Sony Headphone XB-100", price: 19999, image: "category-8.jpg" },
    { id: 16, title: "MSI Modern 15, Intel Core...", price: 39999, image: "laptop4.jpg" },
    { id: 6, title: "IQOO Neo 10R", price: 21999, image: "smartphone6.jpg" },
    { id: 11, title: "Apple Airpods Max", price: 59999, image: "headphone5.jpeg" },
    { id: 17, title: "2022 Macbook Air Laptop, M2 Chip", price: 52999, image: "laptop5.jpg" },
    { id: 22, title: "Sony Alpha ILCE 24.2MP", price: 51990, image: "category-12.jpg" },
    { id: 12, title: "Truke Buds Clarity", price: 33999, image: "headphone6.jpg" },
    { id: 23, title: "Sony Digital Camera 20MP", price: 34999, image: "camera5.webp" },
    { id: 18, title: "2024 MacBook Pro with M4 Chip", price: 95999, image: "laptop6.jpg" },
    { id: 24, title: "Sony New Alpha ILCE 24.2MP", price: 73990, image: "camera6.jpg" },
  ];

  return (
    <div className="featured-products grid grid-cols-4 gap-[25px] px-[30px] mt-[30px]">
      {featuredProducts.map((product) => (
        <div
          className="product h-[400px] w-[340px] border-2 border-gray-200 rounded-[20px] overflow-hidden px-[25px] py-[10px] flex flex-col mb-[10px] shadow-[5px_10px_10px_1px_rgb(229,231,235)]"
          key={product.id}
        >
          <div className="img-container h-[255px] mb-[10px] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-[255px] m-[10px] object-contain"
            />
          </div>
          <div className="details-container flex flex-col">
            <h4 className="font-semibold">{product.title}</h4>
            <p className="text-[13.5px] font-medium">₹{product.price}</p>
            <div className="stars flex mt-[3px] text-yellow-500">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <button
              onClick={() => addToCart(product)}
              className="border w-[120px] h-[36px] mt-[7px] bg-[rgb(68,202,250)] rounded-[8px] text-white text-[14px] font-semibold italic shadow-[2px_2px_2px_2px_rgb(229,231,235)] hover:bg-[rgb(40,180,220)]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
