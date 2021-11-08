import React from "react";
import "./SeethruBox.css";

const SeethruBox = () => {
  return (
    <>
      <div className="font-assistant text-sm text-ivory  bg-dark backdrop-filter backdrop-blur-lg bg-opacity-30 text-center see-thru pt-8 pb-16">
        <div>
          Find more &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SeethruBox;
