import React from 'react'
import { MdStarRate } from "react-icons/md";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

const LatestProducts = () => {
  return (
    <>
     <hr className="text-gray-200"/>
     <h1 className="font-bold text-center text-[22px] mt-[20px] italic [text-shadow:2px_2px_0_#9ca3af] text-black">Latest Products</h1>
     <div className="row mt-[35px] h-[400px] flex gap-[30px] justify-evenly align-center px-[30px]">
            <div className="item-div h-[200px]">
                 <img src="product-1.jpg" alt="" className="bg-contain border-[2px] border-gray-300 rounded-[10px]"/>
                 <h4 className="font-stretch-100% font-semibold">Amazon Alexa Voice Remote</h4>
                   <p className="font-semibold">₹4,499</p>
                   <div className="stars flex text-[rgb(68,202,250)]">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                   </div>
             </div>
             <div className="item-div">
                 <img src="product-6.jpg" alt="" className="bg-cover border-[2px] border-gray-300 rounded-[10px]"/>
                 <h4 className="font-stretch-100% font-semibold">Amazon Alexa Voice Remote</h4>
                   <p className="font-semibold">₹4,499</p>
                   <div className="stars flex text-[rgb(68,202,250)]">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                   </div>
             </div>
             <div className="item-div">
                 <img src="product-3.jpg" alt="" className="bg-cover border-[2px] border-gray-300 rounded-[10px]"/>
                 <h4 className="font-stretch-100% font-semibold">Amazon Alexa Voice Remote</h4>
                   <p className="font-semibold">₹4,499</p>
                   <div className="stars flex text-[rgb(68,202,250)]">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                   </div>
             </div>
             <div className="item-div">
                 <img src="product-4.jpg" alt="" className="bg-cover border-[2px] border-gray-300 rounded-[10px]"/>
                 <h4 className="font-stretch-100% font-semibold">Amazon Alexa Voice Remote</h4>
                   <p className="font-semibold">₹4,499</p>
                   <div className="stars flex text-[rgb(68,202,250)]">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                   </div>
             </div>
           </div>
           <div className="row mt-[20px] h-[60vh] flex gap-[30px] justify-evenly align-center px-[30px]">
             <div className="item-div h-[200px]">
                 <img src="product-1.jpg" alt="" className="bg-contain border-[2px] border-gray-300 rounded-[10px]"/>
                 <h4 className="font-stretch-100% font-semibold">Amazon Alexa Voice Remote</h4>
                   <p className="font-semibold">₹4,499</p>
                   <div className="stars flex text-[rgb(68,202,250)]">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                   </div>
             </div>
             <div className="item-div">
                 <img src="product-6.jpg" alt="" className="bg-cover border-[2px] border-gray-300 rounded-[10px]"/>
                 <h4 className="font-stretch-100% font-semibold">Amazon Alexa Voice Remote</h4>
                   <p className="font-semibold">₹4,499</p>
                   <div className="stars flex text-[rgb(68,202,250)]">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                   </div>
             </div>
             <div className="item-div">
                 <img src="product-3.jpg" alt="" className="bg-cover border-[2px] border-gray-300 rounded-[10px]"/>
                 <h4 className="font-stretch-100% font-semibold">Amazon Alexa Voice Remote</h4>
                   <p className="font-semibold">₹4,499</p>
                   <div className="stars flex text-[rgb(68,202,250)]">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                   </div>
             </div>
             <div className="item-div">
                 <img src="product-4.jpg" alt="" className="bg-cover border-[2px] border-gray-300 rounded-[10px]"/>
                 <h4 className="font-stretch-100% font-semibold">Amazon Alexa Voice Remote</h4>
                   <p className="font-semibold">₹4,499</p>
                   <div className="stars flex text-[rgb(68,202,250)]">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                   </div>
             </div>
           </div>
    </>
  )
}

export default LatestProducts
