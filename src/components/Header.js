import Image from "next/image";
import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";

function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <>
      <div className="flex text-center  md:flex justify-between  bg-gray-400 p-6">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer pt-3"
        >
          <Image src="/vercel.svg" alt="" width={100} height={100} />
        </div>

        <div
          className="relative flex items-center cursor-pointer"
          onClick={() => {
            router.push("/checkout");
          }}
        >
          <span className="absolute top-0 right-0 md:right-10 h-6 w-6 bg-yellow-400 text-center rounded-full text-white ">
            {items.length}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 0 24 24"
            width="48"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <p className="hidden md:inline font-extrabold md:text-sm mt-2 ">
            Basket
          </p>
        </div>
      </div>

      <div className="flex justify-between  pb-3 bg-slate-700 ">
        <div className="hidden sm:flex pl-10 pt-3 space-x-4 text-white text-md">
          <p className="cursor-pointer">All</p>

          <p className="cursor-pointer">Amazon miniTV</p>
          <p className="cursor-pointer">Sell</p>
          <p className="cursor-pointer">Best Sellers</p>
          <p className="cursor-pointer">Mobiles</p>
          <p className="cursor-pointer">Today's Deals</p>
        </div>
        <div className="hidden lg:inline pr-6 pt-3 ">
          <h1 className="text-lg text-yellow-500 text-bold">
            Great Summer Sale | Start 4th May{" "}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
