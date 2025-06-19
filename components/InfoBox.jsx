import React from "react";
import Link from "next/link";

const InfoBox = ({
  children,
  heading,
  bgColor = "bg-gray-100",
  textColor = "text-gray-800",
  button,
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className={` ${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <Link
        href={button.Link}
        className={`${button.bgColor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {button.text}
      </Link>
    </div>
  );
};

export default InfoBox;
