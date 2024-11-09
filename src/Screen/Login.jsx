import React, { useEffect, useRef, useState } from "react";
import { makeLogin } from "../API/Requests";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../Loading/loading.json";
import { AnimatePresence, motion } from "framer-motion";

const Login = () => {
  const [details, setDetails] = useState({
    username: "emilys",
    isUsernameValid: true,
    password: "emilyspass",
    isPasswordValid: true,
  });
  const btnRef = useRef(); // Ref is used to access and control over the element (button)

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    btnRef.current.focus();
  }, []);

  const errorNotify = () => toast.error("Invalid Credentials");

  const successNotify = () => toast.success("You are Welcome!");

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleError(name, value);
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleError = (name = null, value = null) => {
    if (name) {
      // Check a specific field if a name and value are provided
      if (name === "username" && !value) {
        setDetails((prev) => ({ ...prev, isUsernameValid: false }));
      } else if (name === "password" && !value) {
        setDetails((prev) => ({ ...prev, isPasswordValid: false }));
      } else {
        setDetails((prev) => ({
          ...prev,
          isUsernameValid: name === "username" ? true : prev.isUsernameValid,
          isPasswordValid: name === "password" ? true : prev.isPasswordValid,
        }));
      }
    } else {
      // Check both fields if no name is provided (for form submission)
      setDetails((prev) => ({
        ...prev,
        isUsernameValid: prev.username !== "",
        isPasswordValid: prev.password !== "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleError(); // Check all fields
    if (!details.username || !details.password) return; // Prevent submission if fields are invalid

    setIsLoading(true);
    let loginBody = {
      username: details.username,
      password: details.password,
    };
    const res = await makeLogin(loginBody);
    setIsLoading(false);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.accessToken);
      navigate("/admin/main");
      successNotify();
    } else {
      errorNotify();
    }
  };

  const onEnter = (e) => {
    if (e.code === "Enter") handleSubmit(e);
    // else return;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }} // Add exit animation here
      transition={{
        animate: {
          ease: "easeInOut",
          duration: 1, // Duration for the incoming (animate) transition
        },
        exit: {
          ease: "easeInOut",
          duration: 1, // Duration for the outgoing (exit) transition
        },
      }}
      key={"main"}
    >
      <ToastContainer position="top-right" theme="light" draggable />
      <div
        tabIndex={0}
        onKeyDown={(e) => onEnter(e)}
        className="flex items-center justify-center min-h-screen bg-gray-100"
      >
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={details.username}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="you@example.com"
              />
              {!details.isUsernameValid && (
                <p className="text-red-500">Username is required</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={details.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="********"
              />
              {!details.isPasswordValid && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
            <AnimatePresence key={"animation"} mode="wait">
              {isLoading ? (
                <motion.div
                  style={{ marginTop: "-10px", marginBottom: "-35px" }}
                  key={"loading"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.1 }}
                  className="w-full h-fit rounded-md"
                >
                  <Lottie
                    style={{ padding: 0, margin: 0 }}
                    height={100}
                    options={{
                      autoplay: true,
                      animationData: animationData,
                      loop: true,
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={"button"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "ease", duration: 0.1 }}
                  exit={{ opacity: 0 }}
                >
                  <button
                    id="btnRef"
                    ref={btnRef}
                    type="submit"
                    className="flex items-center justify-center w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    disabled={isLoading}
                  >
                    Login
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
