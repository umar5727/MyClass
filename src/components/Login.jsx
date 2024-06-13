import React, { useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate(); //navigate is use to navigate user after login to other page
  const dispatch = useDispatch(); // to update redux state
  const { register, handleSubmit } = useForm();
  // register handle form state and handleSubmit handles form submit
  const [error, setError] = useState("");

  const login = async (data) => {
    // e.preventDefault();
    setError(""); //when submit form clearing the error and starting login process
    console.log("login data: ", data);
    const response = await fetch("http://localhost:8000/api/v1/users/login", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/form-data" },
      body: data,
    });
    console.log("response data: ", response);
    navigate("/MyClass/");
  };

  return (
    <div className="w-1/3 px-8 py-10 bg-primary-light rounded-md mx-auto mt-20">
      <form onSubmit={handleSubmit(login)} className=" flex flex-col gap-3 ">
        <div className="flex gap-1 flex-col ">
          <label htmlFor="email">Email</label>
          <input
            className="rounded-md p-3 text-lg pl-3 bg-primarydark"
            type="email"
            placeholder="Email"
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
            placeholder="Enter yourPassword"
            {...register("password", {
              required: true,
            })}
          />
        </div>
        <div className="mt-2">
          <Button type="submit" className="w-1/2 self-center">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
