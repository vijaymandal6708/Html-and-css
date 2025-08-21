import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [loginFrm, setLoginFrm] = useState({});
  const navigate = useNavigate();

  function handleInput(e) {
    setLoginFrm({ ...loginFrm, [e.target.name]: e.target.value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    let savedAdmin = JSON.parse(localStorage.getItem('adminfrm'));

    if (!savedAdmin) {
      alert("No admin account found. Please register an admin.");
      return;
    }

    if (loginFrm.email === savedAdmin.email && loginFrm.password === savedAdmin.password) {
      alert("Admin Login successful!");
      navigate("/admin"); // Redirect to Admin Panel
    } else {
      alert("Wrong Admin Credentials");
    }
  }

  return (
    <>
      <div className="parent-container bg-gray-200 py-[40px] flex justify-center align-center">
        <div
          className="signup-container flex align-center
      justify-center text-center h-[540px] w-[1180px] bg-white rounded-[30px]"
        >
          <div className="left-container rounded-[20px] w-[580px] h-[540px] bg-white flex align-center justify-center">
            <form className="flex flex-col align-center justify-center gap-[30px]" onSubmit={handleLoginSubmit}>
              <h2 className="font-bold text-black italic text-[28px]">Admin Login</h2>
              <div className="email bg-gray-200 border-1
              border-gray-300 h-[45px] w-[380px] rounded-[10px]
              flex align-center justify-center">
                <input
                  type="email"
                  placeholder="Enter admin email"
                  name="email"
                  onChange={handleInput} className="h-[45px] outline-0 w-[320px] font-semibold"
                />
                <MdEmail className="mt-[12px]"/>
              </div>
              <div className="password bg-gray-200 border-1
              border-gray-300 h-[45px] w-[380px] rounded-[10px]
              flex align-center justify-center">
                <input
                  type="password"
                  placeholder="Enter admin password"
                  name="password"
                  onChange={handleInput} className="h-[45px] outline-0 w-[320px] font-semibold"
                />
                <RiLockPasswordFill className="mt-[12px]"/>
              </div>
              <input type="submit" value="Login" className="h-[45px] w-[380px] bg-[rgb(51,180,227)] rounded-[10px] text-white font-bold italic text-[16px]"/>
            </form>
          </div>
          <div className="right-container w-[600px] text-white bg-[rgb(51,180,227)] rounded-tr-[30px] rounded-tl-[200px] rounded-br-[30px] rounded-bl-[200px] flex align-center justify-center text-center flex-col">
            <h2 className="font-bold text-[40px]">Admin Login Page</h2>
            <img src="admin.jpg" alt="" className="h-[180px] w-[180px] ml-[230px] mt-[10px]"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
