
import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Notify | Contact</title>
      </Helmet>
      <div className="container w-full h-screen  flex justify-center items-center">
      <h1 className="text-3xl font-bold text-center text-gray-500">For Contact me, please click <a href="https://sairoon.com/" target="_blank" className="text-blue-500 underline">Here</a></h1>

      </div>

    </>
  );
};

export default Contact;
