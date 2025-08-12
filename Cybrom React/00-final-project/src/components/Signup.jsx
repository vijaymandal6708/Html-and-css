import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Signup = () => {
  let [signfrm, setSignfrm] = useState({});
  let navigator = useNavigate();

  function handleinput(e) {
    setSignfrm({ ...signfrm, [e.target.name]: e.target.value });
  }

  function handlesubmit(e) {
    e.preventDefault();
    localStorage.setItem("signfrm", JSON.stringify(signfrm));
    navigator("/login");
  }

  return (
    <>
      <div className="parent-container bg-gray-200 py-[40px] flex justify-center align-center">
        <div
          className="signup-container flex align-center
      justify-center text-center h-[540px] w-[1180px] bg-white rounded-[30px]"
        >
          <div className="left-container rounded-[20px] w-[580px] h-[540px] bg-white flex align-center justify-center">
            <form className="flex flex-col align-center justify-center gap-[30px]" onSubmit={handlesubmit}>
              <h2 className="font-bold text-black italic text-[28px]">Sign Up</h2>
              <div className="name bg-gray-200 border-1 border-gray-300 h-[45px] w-[380px] rounded-[10px] flex align-center justify-center">
                <input
                  type="text"
                  placeholder="Enter name here"
                  name="name"
                  onChange={handleinput} className="h-[45px] outline-0 w-[320px] font-semibold"
                />
                <FaUser className="mt-[12px]"/>
              </div>
              <div className="email bg-gray-200 border-1
              border-gray-300 h-[45px] w-[380px] rounded-[10px]
              flex align-center justify-center">
                <input
                  type="email"
                  placeholder="Enter email here"
                  name="email"
                  onChange={handleinput} className="h-[45px] outline-0 w-[320px] font-semibold"
                />
                <MdEmail className="mt-[12px]"/>
              </div>
              <div className="password bg-gray-200 border-1
              border-gray-300 h-[45px] w-[380px] rounded-[10px]
              flex align-center justify-center">
                <input
                  type="password"
                  placeholder="Enter password here"
                  name="password"
                  onChange={handleinput} className="h-[45px] outline-0 w-[320px] font-semibold"
                />
                <RiLockPasswordFill className="mt-[12px]"/>
              </div>
              <input type="submit" value="Sign Up" className="h-[45px] w-[380px] bg-[rgb(51,180,227)] rounded-[10px] text-white font-bold italic text-[16px]"/>
            </form>
          </div>
          <div className="right-container w-[600px] text-white bg-[rgb(51,180,227)] rounded-tr-[30px] rounded-tl-[200px] rounded-br-[30px] rounded-bl-[200px] flex align-center justify-center text-center flex-col">
            <h2 className="font-bold text-[40px]">Welcome Back!</h2>
            <p>Already have an account?</p>
            <Link to="/login" className="border-2 border-white mt-[15px] w-[120px] p-[5px] pb-[8px] rounded-2xl font-semibold ml-[250px]">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
