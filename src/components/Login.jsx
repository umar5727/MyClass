import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import H1 from "./heading/H1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { isLoading, login, stopLoading } from "../app/features/authSlice";
import { base_url } from "../constants/constant";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [popup, setPopup] = useState(false);


  const loginHandler = async (data) => {
    dispatch(isLoading())
    setError(""); //when submit form clearing the error and starting login process

    const email = data.email;
    const password = data.password;
    try {
      console.log("email :- " + email);
      // fetch starts
      const response = await fetch(base_url + "/users/login", {
        mode: "cors",
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      // fetch ends
      console.log('status : ', response.status)
      if (response.status >= 400) {     //if the response is error
        const errorData = await response.json(); // Parse error details
        setError(() => errorData.message)
        throw new Error(errorData.message || 'user not found '); // Provide user-friendly message
      }
      const resData = await response.json(); //taking the json values form response

      const userData = resData.data.user; //storing usedata in useData

      console.log("if user: ", userData.fullName);
      dispatch(login({ userData })); //dispatching
      setTimeout(() => {

        dispatch(stopLoading())
      }, 500)
      sessionStorage.setItem('user', JSON.stringify(userData));
      // console.log("\n role: ", userData.role)
      // setPopup(false)
      // setPopup(true)
      if (userData.role === 'instructor') {
        navigate('/MyClass/InstructorDashboard')
      } else {
        navigate('/MyClass/user/dashboard')
      }

    } catch (error) {
      console.log('\nerror form backend : ', error)
      dispatch(stopLoading())
      setError(error.message)
    }

  };

  return (
    <div className="sm:mx-20 flex items-center flex-col lg:flex-row lg:items-start lg:justify-between  py-20">

      <div className="md:w-1/2 flex flex-col order-2 lg:order-1 pt-14">
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

      <div className="max-w-[450px] px-4 pt-14 pb-20 bg-primary-light rounded-xl shadow-md sm:w-[450px] sm:px-12 order-1 lg:order-2">

        <H1 className="!text-4xl pb-8 font-semibold">Log In</H1>
        <form
          onSubmit={handleSubmit(loginHandler)}
          className=" flex flex-col gap-3 "
        >

          <div className="flex gap-1 flex-col ">
            <label htmlFor="email">Email</label>
            <input
              className="rounded-md p-3 text-lg pl-3 dark:bg-primarydark focus-visible:outline-primary focus-visible:outline-double"
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
              className="rounded-md p-3 text-lg pl-3 dark:bg-primarydark focus-visible: outline-primary focus-visible:outline-double"
              type="text"
              id="password"
              placeholder="Enter yourPassword"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          {/* error message or success message for login request  */}
          <div className="  ">
            {
              popup
                ?
                <div className="absolute top-2 left-1/3 bg-primary-light  w-fit px-4 py-2 rounded-md  ">Login successful!</div>

                :
                <div></div>
            }
            {
              error
                ?
                <div className="text-primary-danger text-sm">
                  {error}
                </div>
                :
                <></>
            }
          </div>
          <div className="grid grid-cols-2 mt-2 gap-1">
            <Button className="!px-0 hover:text-white min-w-fit ">
              Forgot Password?
            </Button>
            <Button type="submit" className=" self-center hover:text-white !px-0 min-w-fit ">
              Submit
            </Button>
          </div>
        </form>

        <div className="mt-10  text-center">
          <span>Create New Account: </span>
          <Link to='/MyClass/signup' className="font-bold text-blue-700 hover:underline ">
            Sign Up
          </Link>
        </div>
      </div>

    </div>
  );

};

export default Login;
