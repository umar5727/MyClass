import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import H1 from "./heading/H1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Signup = ({ role = 'learner' }) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);

  const fields = [
    {
      label: "Full name",
      name: "fullName",
      type: "text",
      state: fullName,
      setState: setFullName,
    },
    // { label:'User Name',name: "userName", type: "text", state: userName, setState: setUserName },
    {
      label: "Email",
      name: "email",
      type: "email",
      state: email,
      setState: setEmail,
    },
    {
      label: "Password",
      name: "password",
      type: "text",
      state: password,
      setState: setPassword,
    },
  ];


  const navigate = useNavigate();

  // const handleFileChange = (event) => {
  //   setAvatar(event.target.files[0]);
  // };
  // const handleImagePreview = () => {
  //   if (avatar) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       return <img src={e.target.result} alt="Selected Profile Image" />;
  //     };
  //     reader.readAsDataURL(avatar);
  //   } else {
  //     return null;
  //   }
  // };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(fullName, email, password);
    // console.log('\nrole: ' + role + "\n")
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);
    formData.append("role", role);

    const signUp = await fetch("http://localhost:8000/api/v1/users/register", {
      // mode: "no-cors",
      mode: "cors",
      method: "POST",
      // headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    });

    const response = await signUp.json();
    console.log(response, "\n  data from backend \n");

    navigate("/MyClass/login");
  };

  useEffect(() => {
    console.log(avatar)
  }, [avatar])
  return (
    <div className="mx-20 flex justify-between py-14 ">
      <div className="w-1/2 flex flex-col pt-20">
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
      <div className="w-[450px] px-12 pt-12 pb-14 bg-primary-light rounded-xl">
        <H1 className="!text-4xl pb-8 font-semibold">Sign Up</H1>
        <form onSubmit={submitForm} className=" flex flex-col gap-3 ">
          {fields.map((field, index) => (
            <div className="flex gap-1 flex-col " key={index}>
              <label
                htmlFor={field.name}
                className="w-20
            "
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.name}
                value={field.state}
                required
                className="rounded-md p-3 text-lg pl-3 dark:bg-primarydark focus-visible:outline-primary focus-visible:outline-double"
                onChange={(e) => {
                  field.setState(e.target.value);
                }}
              />
            </div>
          ))}
          <div className="flex gap-2 items-center">
            <div className="w-14 h-14 rounded-full  overflow-hidden">
              {avatar ? (
                <img src={URL.createObjectURL(avatar)} className="w-full h-full" />
              ) : (
                <img src="userDemo.jpg" />
              )}
            </div>
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={(event) => setAvatar(event.target.files[0])}
              className="hidden"
            />
            <label
              htmlFor="avatar"
              className={!avatar ? "cursor-pointer dark:bg-primary-dark  hover:bg-primary hover:text-white dark:hover:bg-primary py-1 px-4 rounded-md font-semibold border border-primary transition-colors duration-300" : "cursor-pointer"}
            >
              {

                avatar ? <span>{avatar.name} </span> : <span>Choose Photo</span>
              }

            </label>
          </div>
          {/* //image preview ends  */}
          <div className="w-full mt-2 flex justify-center">
            <Button
              children="Submit"
              className="w-full self-center hover:text-white"
              type="submit"
            />
          </div>
        </form>
        <div className="mt-6 text-center">
          <span>Already a user? </span>
          <Link to={"/MyClass/login"} className="text-primary hover:underline ">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
