import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoplay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/gi1"
            width="1020"
            height="340"
            alt="Banner"
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/6ff"
            width="1020"
            height="340"
            alt="Banner"
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/7ma"
            width="1020"
            height="340"
            alt="Banner"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
