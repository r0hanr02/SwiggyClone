/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const SecSlider = () => {
  const [slide, setSlide] = useState(0);
  const restaurants = [
    {
      name: "Maa Ki Khichdi",
      offer: "50% OFF UPTO ₹100",
      rating: "4.3 · 30-35 mins",
      category: "Home Food, Healthy Food, Indian",
      location: "Marol, Mumbai",
      img: "https://tiryanc.com/cdn/shop/files/KHICHDI_afad3d0e-5bf7-4971-ae49-77636533cce7.png?v=1721889335&width=416",
    },
    {
      name: "AL Zaika Dhaba",
      offer: "30% OFF UPTO ₹75",
      rating: "4.3 · 25-30 mins",
      category: "Indian, Chinese, Thalis, Biryani",
      location: "Kurla",
      img: "https://content3.jdmagicbox.com/v2/comp/mumbai/j2/022pxx22.xx22.211213101549.z1j2/catalogue/al-zaika-dhaba-kurla-west-mumbai-restaurants-8b7lsz78nw.jpg",
    },
    {
      name: "Goila Butter Chicken",
      offer: "₹125 OFF ABOVE ₹249",
      rating: "4.3 · 30-35 mins",
      category: "North Indian, Biryani, Kebabs",
      location: "Andheri Kurla Road",
      img: "https://b.zmtcdn.com/data/pictures/chains/6/18324086/04e3fabbadec9086aa1d9e59ef7cab56_featured_v2.jpg",
    },
    {
      name: "Mughal Dhaba",
      offer: "40% OFF UPTO ₹80",
      rating: "4.3 · 25-30 mins",
      category: "Mughlai, Chinese",
      location: "Kurla West",
      img: "https://content.jdmagicbox.com/v2/comp/mumbai/f6/022pxx22.xx22.160111144614.x8f6/catalogue/mughal-dhaba-kurla-west-mumbai-north-indian-restaurants-fg80nx70w5-250.jpg",
    },
    {
      name: "Haldiram's Restaurant",
      offer: "₹100 OFF ABOVE ₹299",
      rating: "4.2 · 25-30 mins",
      category: "South Indian, Fast Food",
      location: "Kurla",
      img: "https://etimg.etb2bimg.com/photo/104778347.cms",
    },
    {
      name: "Deluxe Restaurant",
      offer: "15% OFF ABOVE ₹900",
      rating: "4.3 · 20-25 mins",
      category: "Mughlai, Chinese, North Indian",
      location: "Kurla",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PwUZXYrYpPSuJ4jL0R_PwNZflE7FtjzIqg&s",
    },
    {
      name: "Makhani Darbar",
      offer: "ITEMS AT ₹46",
      rating: "4.1 · 20-25 mins",
      category: "Biryani, North Indian, Mughlai",
      location: "Kalina",
      img: "https://content.jdmagicbox.com/comp/def_content_category/restaurants/photo-1497644083578-611b798c60f3-restaurants-6-h85ts.jpg",
    },
    {
      name: "Persian Darbar",
      offer: "60% OFF UPTO ₹120",
      rating: "4.3 · 20-25 mins",
      category: "North Indian, Biryani, Mughlai",
      location: "Bandra Kurla Complex",
      img: "https://b.zmtcdn.com/data/pictures/7/18735687/08080d9eed052ab5c289545d2f087bec_featured_v2.jpg",
    },
    {
      name: "Taco Bell",
      offer: "TACOS FROM ₹149",
      rating: "4.0 · 20-30 mins",
      category: "Mexican, Fast Food",
      location: "Mulund West",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonVd3EgGHe48SWtd1bcssAfrMyigqiU650Q&s",
    }
  ];
  

  const Next = () => {
    console.log(restaurants.length);
    if (restaurants.length - 3 == slide) return false;
    setSlide(slide + 3);
  };
  const previous = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-9/12 flex justify-around md:justify-between my-5">
          <p className="text-2xl m-2 font-bold">Top restaurant chains in Mumbai</p>
          <div className="flex gap-3">
            <div
              onClick={previous}
              className="bg-slate-200 cursor-pointer selection:bg-transparent rounded-full w-10 h-10 flex items-center justify-center"
            >
              <MdNavigateBefore size={30} />
            </div>
            <div
              onClick={Next}
              className="bg-slate-200 cursor-pointer selection:bg-transparent rounded-full w-10 h-10 flex items-center justify-center"
            >
              <MdNavigateNext size={30} />
            </div>
          </div>
        </div>
        <div className="w-10/12 md:w-8/12 flex overflow-hidden">
          <div className="flex md:space-x-4">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                style={{ transform: `translateX(-${slide*100}%)` }}
                className="overflow-hidden w-[180px] md:w-[250px] bg-white rounded-lg shadow-md m-3 hover:scale-90 duration-300"
              >
                <img
                  src={restaurant.img}
                  alt={restaurant.name}
                  className="w-full h-40 object-cover"
                />
                <div className="linear-gradiant absolute w-full h-40 top-0 flex items-end p-2 font-bold text-white"> 
                  {restaurant.offer}
                </div>
                <div className="p-4">
                  
                  <h3 className="text-lg font-bold mt-2">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm">{restaurant.rating}</p>
                  <p className="text-gray-500 hidden md:block text-sm">{restaurant.category}</p>
                  <p className="text-gray-500 hidden md:block text-sm">{restaurant.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SecSlider;
