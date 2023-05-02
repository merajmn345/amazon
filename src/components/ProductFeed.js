import React from "react";
import Main from "./Products";
import Image from "next/image";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => {
          return (
            <Main
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          );
        })}
      <Image
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
        height="400"
        width="1024"
      />

      <div className="md:col-span-2 ">
        {products.slice(4, 5).map((item) => {
          return (
            <>
              <div className="relative flex flex-col m-5 bg-white z-30 p-10">
                <p className="absolute top-2 right-2 text-xs italic text-gray-400">
                  {item.category}
                </p>

                <Image
                  src={item.image}
                  alt=""
                  height={200}
                  width={200}
                  objectFit="contain"
                />
                <h4 className="my-3">{item.title}</h4>

                <p className="text-xs my-2 line-clamp-2">{item.description}</p>

                <div className="mb-5">
                  <p>${item.price}</p>
                </div>

                <button className="mt-auto button">Add to Basket</button>
              </div>
            </>
          );
        })}
      </div>

      {products.slice(5, products.length).map((item) => {
        return (
          <>
            <div className="relative flex flex-col m-5 bg-white z-30 p-10">
              <p className="absolute top-2 right-2 text-xs italic text-gray-400">
                {item.category}
              </p>

              <Image
                src={item.image}
                alt=""
                height={200}
                width={200}
                objectFit="contain"
              />
              <h4 className="my-3">{item.title}</h4>

              <p className="text-xs my-2 line-clamp-2">{item.description}</p>

              <div className="mb-5">
                <p>${item.price}</p>
              </div>

              <button className="mt-auto button">Add to Basket</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ProductFeed;
