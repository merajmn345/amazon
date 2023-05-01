import React from "react";

function Footer() {
  return (
    <>
      <div className=" bg-white m-5 p-5 ">
        <hr className="w-full" />
        <div className="w-full mt-5 mb-5 flex flex-col justify-center items-center">
          <p className="mt-2">See personalized recommendations</p>
          <button className="mt-1  px-24 button">Sign in</button>
          <p className="mt-1 text-center">
            New cutomer?{" "}
            <span className="text-blue-500 cursor-pointer hover:font-bold">
              Start here
            </span>
          </p>
        </div>
        <hr className="w-full" />
      </div>

      <div className="p-3 text-center bg-gray-700 hover:bg-gray-600 cursor-pointer">
        <button className=" text-white">Back to top</button>
      </div>

      <div className="flex justify-evenly text-white p-7 bg-gray-900">
        <div className="">
          <h3 className="text-lg mt-2 font-bold">Get to Know Us</h3>
          <p className="text-sm">About Us</p>
          <p className="text-sm">Careers</p>
          <p className="text-sm">Press Releases</p>
          <p className="text-sm">Amazon Science</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mt-2">Connect with Us</h3>
          <p className="text-sm">Facebook</p>
          <p className="text-sm">Twitter</p>
          <p className="text-sm">Instagram</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mt-2">Let Us Help You</h3>
          <p className="text-sm">COVID-19 and Amazon</p>
          <p className="text-sm">Your Account</p>
          <p className="text-sm">Returns Center</p>
          <p>Help</p>
        </div>
      </div>
      <hr className="w-full" />

      <div className="bg-slate-900 text-white p-8">
        <div className="flex justify-center text-sm mt-4">
          <p>Conditions of Use & Sale</p>
          <p>Privacy Notice</p>
          <p>Interest-Based Ads</p>
        </div>
        <div className="text-center text-sm mt-4">
          <p>&copy; 1996-2023, Amazon.com, Inc or its affiliates</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
