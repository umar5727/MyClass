import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PriceCard = () => {
  return (
    <div className="px-6 py-4 border w-full lg:w-[350px] rounded-lg">
      <h3 className="font-bold text-2xl mb-4">Course Features</h3>
      {/* fretures starts  */}
      <div>
        <div className="flex items-center gap-2 ">
          <FontAwesomeIcon icon={faUser} className=""/>
          <span>
            <strong>Enrolled : </strong> 1200 Students
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
