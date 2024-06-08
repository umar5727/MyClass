import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);

  const fields = [
    { name: "fullName", type: "text", state: fullName, setState: setFullName },
    { name: "userName", type: "text", state: userName, setState: setUserName },
    { name: "email", type: "email", state: email, setState: setEmail },
    { name: "password", type: "text", state: password, setState: setPassword },
  ];

  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    setAvatar(event.target.files[0]);
  };

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
  };

  return (
    <div className="flex justify-between py-20 items-center">
      <div className="w-1/3 bg-red-300">
        <img src="student6.jpg" alt="#" className="aspect-square" />
      </div>
      <form
        // enctype="multipart/form-data"
        onSubmit={submitForm}
        className=" flex flex-col gap-3 w-1/3 px-8 py-20 bg-primary-light rounded-md"
      >
        {fields.map((field, index) => (
          <div className="flex gap-1 flex-col " key={index}>
            <label
              htmlFor={field.name}
              className="w-20
            "
            >
              {field.name}
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
        <label htmlFor="avatar">Avatar:</label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          onChange={handleFileChange}
        />

        <div className="w-full mt-2">
          <Button children="Submit" className="w-1/2" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
