import React from 'react'
import { MdStarRate } from "react-icons/md";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

const FeaturedProducts = () => {

  const featuredProducts = [
    { id: 1, title: "Relame GT6", price:25999, image:"category-1.jpg"},
    { id: 2, title: "Nothing Phone2a", price:15999, image:"category-3.avif"},
    { id: 3, title: "HP 15s ,13th Gen Intel...", price:19999, image:"laptop1.jpg"},
    { id: 4, title: "Sony Alpha a7 48MP", price:179999, image:"category-9.jpg"},
    { id: 5, title: "Realme Buds Air5", price:3499, image:"category-1.jpg"},
    { id: 6, title: "Oneplus Nord Ce 2 lite 5G", price:19999, image:"category-1.jpg"},
    { id: 7, title: "Hitage Neckband", price:1099, image:"category-1.jpg"},
    { id: 8, title: "Asus Vivobook 15 OLED...", price:19999, image:"category-1.jpg"},
    { id: 9, title: "Lava Blaze 5G pro", price:12999, image:"category-1.jpg"},
    { id: 10, title: "Fujifilm X-H2 40MP", price:197999, image:"category-1.jpg"},
    { id: 11, title: "Boat Airdopes 181", price:1399, image:"category-1.jpg"},
    { id: 12, title: "ULTIMUS Apex Laptop Int...", price:17999, image:"category-1.jpg"},
    { id: 13, title: "Canon Eos 300D", price:19999, image:"category-1.jpg"},
    { id: 14, title: "Samsung Galaxy F15 5G", price:13999, image:"category-1.jpg"},
    { id: 15, title: "Sony Headphone XB-100", price:19999, image:"category-1.jpg"},
    { id: 16, title: "MSI Modern 15, Intel Core...", price:39999, image:"category-1.jpg"},
    { id: 17, title: "IQOO Neo 10R", price:21999, image:"category-1.jpg"},
    { id: 18, title: "", price:19999, image:"category-1.jpg"},
    { id: 19, title: "", price:19999, image:"category-1.jpg"},
    { id: 20, title: "", price:19999, image:"category-1.jpg"},
    { id: 21, title: "", price:19999, image:"category-1.jpg"},
    { id: 22, title: "", price:19999, image:"category-1.jpg"},
    { id: 23, title: "", price:19999, image:"category-1.jpg"},
    { id: 24, title: "", price:19999, image:"category-1.jpg"},

  ]

  return (
    <>
      <div className="featured-products grid grid-cols-4 gap-[25px] px-[30px] mt-[25px]">
        {
          featuredProducts.map((product)=>(
            <div className="product h-[40~0px] w-[350px] border-2 border-gray-200 rounded-[20px] overflow-hidden px-[20px] py-[10px] flex flex-col" key={product.id}>
              <div className="img-container h-[255px] mb-[10px] flex items-center justify-center">
                <img src={product.image} alt={product.title} className="h-[255px] m-[10px] w-auto"/>
              </div>
              <div className="details-container flex">
                <div className="left-container">
                  <h4 className="font-semibold">{product.title}</h4>
                  <p className="text-[13.5px] font-medium">₹{product.price}</p>
                  <div className="stars flex mt-[2px]">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                  <button className="border w-[105px] h-[32px] mt-[6px] bg-[rgb(68,202,250)] rounded-[8px] text-white text-[13.5px] font-semibold italic shadow-[2px_2px_2px_2px_rgb(229,231,235)]">Add to Cart</button>
                </div>
                {/* <div className="right-container flex items-center justify-center h-[70px] w-[100px]"> */}
                {/* </div> */}
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default FeaturedProducts
