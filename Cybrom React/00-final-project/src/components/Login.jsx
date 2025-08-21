import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginFrm, setLoginFrm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleInput(e) {
    setLoginFrm({ ...loginFrm, [e.target.name]: e.target.value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("signfrm"));
    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    const email = (loginFrm.email || "").trim();
    const password = (loginFrm.password || "").trim();

    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      alert("Login successful!");
      localStorage.setItem("userLoggedIn", "true"); // ✅ used by Cart/Payment
      localStorage.setItem("currentUser", JSON.stringify({ email }));
      navigate("/");
    } else {
      alert("Wrong Credentials");
    }
  }

  return (
    <>
      <div className="parent-container bg-gray-200 py-[40px] flex justify-center align-center">
        <div className="signup-container flex align-center justify-center text-center h-[540px] w-[1180px] bg-white rounded-[30px]">
          <div className="left-container rounded-[20px] w-[580px] h-[540px] bg-white flex align-center justify-center">
            <form className="flex flex-col align-center justify-center gap-[30px]" onSubmit={handleLoginSubmit}>
              <h2 className="font-bold text-black italic text-[28px]">Login</h2>

              <div className="email bg-gray-200 border-1 border-gray-300 h-[45px] w-[380px] rounded-[10px] flex align-center justify-center">
                <input
                  type="email"
                  placeholder="Enter email here"
                  name="email"
                  value={loginFrm.email}
                  onChange={handleInput}
                  className="h-[45px] outline-0 w-[320px] font-semibold"
                />
                <MdEmail className="mt-[12px]" />
              </div>

              <div className="password bg-gray-200 border-1 border-gray-300 h-[45px] w-[380px] rounded-[10px] flex align-center justify-center">
                <input
                  type="password"
                  placeholder="Enter password here"
                  name="password"
                  value={loginFrm.password}
                  onChange={handleInput}
                  className="h-[45px] outline-0 w-[320px] font-semibold"
                />
                <RiLockPasswordFill className="mt-[12px]" />
              </div>

              <input
                type="submit"
                value="Login"
                className="h-[45px] w-[380px] bg-[rgb(51,180,227)] rounded-[10px] text-white font-bold italic text-[16px]"
              />

              <div className="admin-container flex items-center justify-center">
                <p className="w-[150px]">Are you an Admin?</p>
                <Link
                  to="/adminlogin"
                  className="w-[110px] border-1 rounded-[10px] p-[5px] bg-[rgb(68,202,250)] text-white font-semibold italic"
                >
                  Login here
                </Link>
              </div>
            </form>
          </div>

          <div className="right-container w-[600px] text-white bg-[rgb(51,180,227)] rounded-tr-[30px] rounded-tl-[200px] rounded-br-[30px] rounded-bl-[200px] flex align-center justify-center text-center flex-col">
            <h2 className="font-bold text-[40px]">Hello, Welcome!</h2>
            <p>Don't have an account?</p>
            <Link
              to="/signup"
              className="border-2 border-white mt-[15px] w-[120px] p-[5px] pb-[8px] rounded-2xl font-semibold ml-[250px]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
