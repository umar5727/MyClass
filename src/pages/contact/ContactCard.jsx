import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactCard = ({ heading, location, phone, email }) => {
  return (
    <div className="aspect-video bg-gradient-to-br  col-span-2 rounded-xl flex flex-col gap-2 justify-center text-center items-center px-10 shadow-[0_0_35px_-2px_rgba(0,0,0,0.2)]">
      <h3 className="text-2xl font-bold">{heading}</h3>
      <p className="duration-300 hover:text-primary">
        <FontAwesomeIcon icon={faLocation} />
        {location}
      </p>
      <p  className="duration-300 hover:text-primary">
        <FontAwesomeIcon icon={faPhone} />
        {phone}
      </p>
      <p  className="duration-300 hover:text-primary">
        <FontAwesomeIcon icon={faMailBulk} />
        {email}
      </p>
    </div>
  );
};

export default ContactCard;
