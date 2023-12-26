import React, { useState } from "react";

const PogressBar = ({ progres = 30 }) => {
  return (
    <>
      <div className="w-full relative">
        <span>Enterprise customer</span>
        <span className={`absolute `} style={{ left: `${progres-10}%` }}>
          {progres}%
        </span>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
          <div
            class={`bg-blue-600 h-2.5 rounded-full`}
            style={{ width: `${progres}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default PogressBar;
