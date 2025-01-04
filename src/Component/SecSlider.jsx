const SecSlider = () => {
  const restaurants = [
    {
      name: "Pizza Hut",
      offer: "₹300 OFF ABOVE ₹1699",
      rating: "4.2 · 25-30 mins",
      category: "Pizzas",
      location: "Bandra Kurla Complex",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c08ef470-8561-436d-81ec-b119dfc997fa_9862.jpg",
    },
    {
      name: "Chinese Wok",
      offer: "ITEMS AT ₹149",
      rating: "4.4 · 30-35 mins",
      category: "Chinese, Asian, Tibetan",
      location: "Santacruz East",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    },
    {
      name: "Burger King",
      offer: "60% OFF UPTO ₹120",
      rating: "4.3 · 20-25 mins",
      category: "Burgers, American,Desserts",
      location: "Santacruz East",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_78036.JPG",
    },
    {
      name: "Domino's Pizza",
      offer: "ITEMS AT ₹89",
      rating: "3.8 · 20-25 mins",
      category: "Pizzas, Italian,Desserts",
      location: "Kurla West",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/9f606f46-923b-4be7-abfe-f3875f19da9a_24463.jpg",
    },
    // {
    //   name: "Domino's Pizza",
    //   offer: "ITEMS AT ₹89",
    //   rating: "3.8 · 20-25 mins",
    //   category: "Pizzas, Italian,Desserts",
    //   location: "Kurla West",
    //   img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/9f606f46-923b-4be7-abfe-f3875f19da9a_24463.jpg",
    // }
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center m-5 mx-7">
        <div className="w-10/12 flex justify-between">
          <p className="text-2xl font-bold">Top restaurant chains in Mumbai</p>
          <div className="flex gap-3">
            <div className="w-8 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer selection:bg-transparent">
              <img className="w-4" src="back.png" alt="Back" />
            </div>
            <div className="w-8 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer selection:bg-transparent">
              <img className="w-4" src="next.png" alt="Next" />
            </div>
          </div>
        </div>
        <div className="flex">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="w-60 bg-white rounded-lg shadow-md overflow-hidden m-3 hover:scale-90 duration-100"
            >
              <img
                src={restaurant.img}
                alt={restaurant.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-green-500 text-sm font-semibold">
                  {restaurant.offer}
                </p>
                <h3 className="text-lg font-bold mt-2">{restaurant.name}</h3>
                <p className="text-gray-600 text-sm">{restaurant.rating}</p>
                <p className="text-gray-500 text-sm">{restaurant.category}</p>
                <p className="text-gray-500 text-sm">{restaurant.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecSlider;
