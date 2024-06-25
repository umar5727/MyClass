import React, { useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import H1 from "./heading/H1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { login } from "../app/features/authSlice";
import { current } from "@reduxjs/toolkit";

const Login = () => {
  const navigate = useNavigate(); //navigate is use to navigate user after login to other page
  const dispatch = useDispatch(); // to update redux state
  const { register, handleSubmit } = useForm();
  // register handle form state and handleSubmit handles form submit
  const [error, setError] = useState("");

  const loginHandler = async (data) => {
    // e.preventDefault();
    setError(""); //when submit form clearing the error and starting login process
    // console.log("login data: ", data);
    //getting the data from reactHookForm
    const email = data.email;
    const password = data.password;
    console.log("email :- " + email);
    // fetch starts
    const response = await fetch("http://localhost:8000/api/v1/users/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    // fetch ends
    const resData = await response.json(); //taking the json values form response

    const userData = resData.data.loginUser; //storing usedata in useData

    if (userData) {
      console.log("if user: ", userData.fullName);
      dispatch(login({ userData })); //dispatching

      navigate("/MyClass/"); //after loging and dispatched the data navigate to home page
    }
  };

  return (
    <div className="mx-20 flex justify-between py-20">
      <div className="w-1/2 flex flex-col pt-14">
        {/* <img src="student6.jpg" alt="#" className="aspect-square" /> */}
        <h2 className="text-5xl font-semibold mb-4">
          Become a <br /> MyClass Schooler
        </h2>
        <p className="text-2xl font-medium mb-4">Free to use, easy to learn</p>
        <ul className=" flex flex-col gap-2">
          <li className="flex gap-[6px] font-medium ">
            <div>
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
            </div>{" "}
            Track your progress
          </li>
          <li className="flex gap-[6px] font-medium">
            <div>
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
            </div>
            Set your goals
          </li>
          <li className="flex gap-[6px] font-medium">
            <div>
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
            </div>
            Get a personalized learning path
          </li>
          <li className="flex gap-[6px] font-medium">
            <div>
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
            </div>
            Test your skills
          </li>
          <li className="flex gap-[6px] font-medium">
            <div>
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
            </div>
            Practice coding in browser
          </li>
          <li className="flex gap-[6px] font-medium">
            <div>
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
            </div>
            Build and host a website
          </li>
        </ul>
      </div>
      {/* left side ends  */}

      <div className="w-[450px] px-12 pt-14 pb-20 bg-primary-light rounded-md">
        <H1 className="!text-4xl pb-8 font-semibold">Log In</H1>
        <form
          onSubmit={handleSubmit(loginHandler)}
          className=" flex flex-col gap-3 "
        >
          <div className="flex gap-1 flex-col ">
            <label htmlFor="email">Email</label>
            <input
              className="rounded-md p-3 text-lg pl-3 bg-primarydark"
              type="email"
              placeholder="Email"
              id="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                    "Enter Valid Email",
                },
              })}
            />
          </div>
          <div className="flex gap-1 flex-col ">
            <label htmlFor="password">Password</label>
            <input
              className="rounded-md p-3 text-lg pl-3 bg-primarydark"
              type="text"
              id="password"
              placeholder="Enter yourPassword"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <div className="grid grid-cols-2 mt-2 gap-1">
            <Button className="!px-2 !py-1 hover:text-white">
              Forgot Password?
            </Button>
            <Button type="submit" className=" self-center hover:text-white">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
