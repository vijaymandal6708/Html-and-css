import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        About Us
      </h1>

      {/* Intro Paragraph */}
      <p className="text-lg text-gray-700 text-center mb-10 leading-relaxed">
        Welcome to <span className="font-semibold text-blue-500">Gadget Galaxy</span>, 
        your ultimate destination for the latest and greatest in electronic gadgets. 
        Founded in <span className="font-semibold">2024</span>, we are passionate about 
        bringing cutting-edge technology to your fingertips.
      </p>

      {/* Content Sections */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div>
          <img
            src="about.png"
            alt="Gadget Galaxy Store"
            className="shadow-lg w-full h-[250px] object-cover"
          />
        </div>

        {/* Right Side - Description */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Gadget Galaxy, we believe that technology should not just keep up 
            with your life – it should make it better. That’s why we handpick 
            every product, from the latest smartphones and smartwatches to 
            headphones, cameras, and more.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is simple: provide high-quality gadgets at competitive prices 
            with outstanding customer service. Whether you're a tech enthusiast or 
            someone looking for the perfect gift, Gadget Galaxy is here to make 
            your shopping experience stellar.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-blue-500 mb-2">
          Join Our Journey
        </h3>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          As we continue to grow, our goal remains the same – to keep our customers 
          at the center of everything we do. Thank you for making Gadget Galaxy 
          a part of your tech world.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

