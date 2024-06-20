import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
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

  const dispatch = useDispatch();
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

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);
    const signUp = await fetch("http://localhost:8000/api/v1/users/register", {
      // mode: "no-cors",
      mode: "cors",
      method: "POST",
      // headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    });
    const response = await signUp.json();
    console.log(response.data, "\n  data from backend \n");
    const currentUser = response.data;
    dispatch(login({ currentUser }));
    navigate("/MyClass/login");
  };

  return (
    <div className="flex justify-between py-20 items-center">
      <div className="w-1/3 bg-red-300">
        <img src="student6.jpg" alt="#" className="aspect-square" />
      </div>
      <div className="w-1/3 px-8 py-10 bg-primary-light rounded-md">
        <form
          onSubmit={submitForm}
          className=" flex flex-col gap-3 "
        >
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
                className="rounded-md p-3 text-lg pl-3 bg-primarydark"
                onChange={(e) => {
                  field.setState(e.target.value);
                }}
              />
            </div>
          ))}
          <div className="flex gap-2 items-center">
            <div className="w-14 h-14 rounded-full  overflow-hidden">
              {avatar ? (
                <img src={URL.createObjectURL(avatar)} />
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
              className="cursor-pointer bg-primary-dark hover:bg-primary py-1 px-4 rounded-md font-semibold border border-primary transition-colors duration-300"
            >
              Choose Photo
            </label>
          </div>
                {/* //image preview ends  */}
          <div className="w-full mt-2 flex justify-center">
            <Button
              children="Submit"
              className="w-full self-center"
              type="submit"
            />
          </div>
        </form>
        <div className="mt-4 text-center">
          <span>already have accout </span>
          <Link to={"/MyClass/login"} className="text-primary underline">
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
