import React, { useState } from "react";
import useBodyHooks from "../../utils/useBodyHooks";
import { imgURL } from "../../config";

const Banner = () => {
  const Data = useBodyHooks();
  const { bannerData } = Data;
  const getBannerImage =
    bannerData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < getBannerImage.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }}

  return (
    <div className="container">
      <div className="flex justify-between">
        <h3 className="font-bold text-black">Best offer for you</h3>
        <div className="flex justify-between">
          <button onClick={prevImage}>↩</button>
          <button onClick={nextImage}>↪</button>
        </div>
      </div>
      <div className="flex justify-center mt-1 p-1">
        {getBannerImage?.map((Image, index) => (
          <div
            className={`${
              index === currentImageIndex ? "block" : "hidden"
            } w-auto h-48 object-cover`}
            key={index}
          >
            <img
              src={imgURL + Image?.imageId}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
