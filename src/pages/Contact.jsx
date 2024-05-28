import React, { useEffect, useState } from "react";

import ContactCard from "./contact/ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../components/Button";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="my-20">
        <div className="mb-8">
          <h1 className="text-3xl  lg:text-4xl text-center font-bold mb-4">
            We're here to help!
          </h1>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
          <div>
            <ContactCard
              heading="Customer Support"
              location="Address"
              phone="9100000000"
              email="example@gamil.com"
            />
          </div>
          <div>
            <ContactCard
              heading="Contact Address"
              location="Address"
              phone="9100000000"
              email="example@gamil.com"
            />
          </div>
          <div>
            <ContactCard
              heading="Main Office Address"
              location="Address"
              phone="9100000000"
              email="example@gamil.com"
            />
          </div>
        </div>
      </section>
      {/* form starts  */}
      <section className="flex flex-col gap-6 lg:gap-0 md:flex-row py-10">
        {/* left Column - */}
        <div className="md:w-3/6 flex flex-col items-center gap-5 justify-center relative overflow-hidden">
          <div className="relative  ">
            <FontAwesomeIcon
              icon={faMailBulk}
              className="w-52 h-52  rounded-full"
            />
          </div>
          <div className="flex gap-2 items-center">
            <h3 className="text-2xl font-bold">Follow us on:</h3>
            {/* social links */}
            <div className="flex gap-2 h-fit">
              <div className="shadow-icon cursor-pointer bg-white px-2 rounded-sm transition-transform duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faFacebookF} className="text-primary" />
              </div>
              <div className="shadow-icon cursor-pointer dark:bg-white px-2 rounded-sm transition-transform duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faInstagram} className="text-red-600" />
              </div>
              <div className="shadow-icon cursor-pointer dark:bg-white px-2 rounded-sm transition-transform duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faTwitter} className="text-primary" />
              </div>
              <div className="shadow-icon cursor-pointer dark:bg-white px-2 rounded-sm transition-transform duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faLinkedin} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
        {/* right Column */}
        <div className="md:w-3/6 py-8  flex flex-col gap-5 justify-center items-center text-center lg:text-left lg:items-start md:py-0">
          <h2 className="text-3xl md:text-4xl font-bold  text-primary-text-heading dark:text-white">
            Let's talk
          </h2>
          <p className="text-lg font-medium md:text-xl  text-primary-text-normal dark:text-primary-text-normal-dark">
            To request a quote or want to meet up for coffee, contact us
            directly or fill out the form and we will get back to you promptly
          </p>
          {/* discription ends  */}
          <form action="#" className="flex flex-col w-full gap-5">
            <div>
              <label htmlFor="userName" className="w-fit">
                Your name *
              </label>
              <input
                type="text"
                id="userName"
                required
                className="w-full mt-1 bg-primary-light dark:bg-dark-bg-light py-3 px-4 rounded-md outline-none outline-1 duration-300 focus:outline-primary"
                value={userName}
                autoComplete="given-name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            {/* username ends  */}
            <div>
              <label htmlFor="email" className="w-fit">
                Email address *
              </label>
              <input
                type="text"
                id="email"
                required
                className="w-full mt-1 bg-primary-light dark:bg-dark-bg-light py-3 px-4 rounded-md outline-none outline-1 duration-300 focus:outline-primary"
                value={email}
                autoComplete="off"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            {/* email ends  */}
            <div>
              <label htmlFor="message" className="w-fit">
                Message *
              </label>
              <textarea
                rows={4}
                type="text"
                id="message"
                required
                className="w-full mt-1 bg-primary-light dark:bg-dark-bg-light py-3 px-4 rounded-md outline-none outline-1 duration-300 focus:outline-primary"
                value={message}
                autoComplete="off"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </section>
      {/* form ends  */}
    </>
  );
};

export default Contact;
