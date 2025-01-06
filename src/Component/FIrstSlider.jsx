/* eslint-disable no-unused-vars */
import { useState } from "react";

const FirstSlider = () => {
  const images = [
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Rasgulla.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
  ];
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const Next = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const previous = () => {
  //   setCurrentIndex((prevIndex) => {
  //     return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
  //   });
  // };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full md:w-9/12 flex justify-between  my-5">
        <p className="text-2xl m-2 font-bold">What&apos;s on your mind?</p>
        <div className="flex gap-3">
          <div
            // onClick={previous}
            className="w-8 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer selection:bg-transparent"
          >
            <img className="w-4" src="back.png" alt="Back" />
          </div>
          <div
            // onClick={Next}
            className="w-8 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer selection:bg-transparent"
          >
            <img className="w-4" src="next.png" alt="Next" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 flex  border-b-2 border-gray-400">
        <div className="flex  md:space-x-4">
          {images.map((image, index) => (
            <div key={index} className="w-20 md:w-44 cursor-pointer">
              <img className="w-80" src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstSlider;
