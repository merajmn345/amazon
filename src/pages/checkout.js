import CheckoutProduct from "@/components/CheckoutProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { selectItems, selectTotal } from "@/slices/basketSlice";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  return (
    <div>
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}

        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            alt=""
            height={250}
            width={1020}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket "}
            </h1>

            {items.map((item, i) => {
              return (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">${total.toFixed(2)}</span>
              </h2>

              <button className="button mt-2">Proceed to checkout</button>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Checkout;
