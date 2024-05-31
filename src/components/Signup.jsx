import React, { useState } from "react";
import Button from "./Button";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  return (
    <div className="flex justify-center pt-20 items-center"> 
      <form action="#" className=" flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <label htmlFor="name" className="w-20
          ">Name</label>
          <input 
          type="text" id="name" 
          placeholder="Name" 
          value={name}
          className="rounded-md p-3 w-64 text-lg pl-3 bg-black" 
          onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="email" className="w-20">Email</label>
          <input 
          type="email" 
          id="email" 
          placeholder="email" 
          value={email} 
          className="rounded-md p-3 w-64 text-lg  pl-3 bg-black"
          onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="password" className="w-20">Password</label>
          <input
            type="text"
            id="password"
            placeholder="password"
            value={password}
            className="rounded-md p-3 w-64 text-lg pl-3 bg-black"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        
        <div className="w-full">
            <Button children="Submit" className="w-full"/>
        </div>
      </form>
    </div>
  );
};

export default Signup;
