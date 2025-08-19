import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center py-[50px] px-[20px]">
      <article className="max-w-[1200px] min-h-[550px] mx-auto px-[30px] md:px-[60px] lg:px-[80px] py-[30px] rounded-[40px] bg-white shadow-2xl">
        
        {/* Main Heading */}
        <h1 className="text-[36px] md:text-[42px] font-extrabold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-[30px] italic underline underline-offset-4 decoration-cyan-400">
          About Us
        </h1>

        {/* Intro Text */}
        <p className="text-[18px] text-gray-700 text-center md:text-justify mb-[40px] leading-[30px]">
          Welcome to{" "}
          <span className="font-semibold text-cyan-500">Gadget Galaxy</span>,
          your ultimate destination for the latest and greatest in electronic
          gadgets. Founded in{" "}
          <span className="font-semibold text-black">2024</span>, we are
          passionate about bringing cutting-edge technology to your fingertips.
        </p>

        {/* Our Story Section */}
        <div className="mt-[32px]">
          <h2 className="text-[26px] font-bold text-gray-800 mb-[15px] italic text-center relative">
            Our Story
            <span className="block w-[80px] h-[3px] bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-[6px] rounded-full"></span>
          </h2>
          <p className="text-gray-600 leading-[28px] mb-[16px] text-[17px]">
            At Gadget Galaxy, we believe that technology should not just keep up
            with your life – it should make it better. That’s why we handpick
            every product, from the latest smartphones and smartwatches to
            headphones, cameras, and more.
          </p>
          <p className="text-gray-600 leading-[28px] text-[17px]">
            Our mission is simple: provide high-quality gadgets at competitive
            prices with outstanding customer service. Whether you're a tech
            enthusiast or someone looking for the perfect gift, Gadget Galaxy is
            here to make your shopping experience stellar.
          </p>
        </div>

        {/* Join Our Journey Section */}
        <div className="mt-[50px] text-center">
          <h3 className="text-[22px] font-semibold text-black mb-[12px] italic relative inline-block">
            Join Our Journey
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
          </h3>
          <p className="text-gray-700 leading-[28px] max-w-[800px] mx-auto text-[17px]">
            As we continue to grow, our goal remains the same – to keep our
            customers at the center of everything we do. Thank you for making
            <span className="font-bold text-cyan-500"> Gadget Galaxy</span> a
            part of your tech world.
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutUs;
