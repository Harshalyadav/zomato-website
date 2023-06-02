import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const restaurantImage =[
  {
    _id:"1",
    name:"Food",
    city:"Raipur",
    address:"",
    mapLocation:"",
    cuisine:"uhugugu666",
    restaurantTimings:"",
    contactNumber:"",
    website:"",
    popularDishes:"",
    averageCost:"459",
    menuImages:"",
    menu:"",
    reviews:"",
    photos:"https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png"
  },
  {
    _id:"2",
    name:"Food",
    city:"Bilaspur",
    address:"",
    mapLocation:"",
    cuisine:"567",
    restaurantTimings:"",
    contactNumber:"",
    website:"",
    popularDishes:"",
    averageCost:"124",
    menuImages:"",
    menu:"",
    reviews:"",
    photos:"https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png"
  },
  {
    _id:"3",
    name:"",
    city:"",
    address:"",
    mapLocation:"",
    cuisine:"iii",
    restaurantTimings:"",
    contactNumber:"",
    website:"",
    popularDishes:"",
    averageCost:"123",
    menuImages:"",
    menu:"",
    reviews:"",
    photos:"https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png"
  },
  {
    _id:"4",
    name:"",
    city:"",
    address:"",
    mapLocation:"",
    cuisine:"",
    restaurantTimings:"",
    contactNumber:"",
    website:"",
    popularDishes:"",
    averageCost:"",
    menuImages:"",
    menu:"",
    reviews:"",
    photos:"https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png"
  }
]

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  // const reduxState = useSelector(
  //   (globalStore) => globalStore.restaurant.restaurants
  // );

     
 const setRestaurantList1=restaurantImage.map((restaurant)=>restaurant)
  console.log("restaurantList",setRestaurantList1);

  // useEffect(() => {
  //   reduxState.restaurants && setRestaurantList(reduxState.restaurants);
  // }, [reduxState.restaurants]);

  return (
    <>
      <DeliveryCarousal />
      {/* <Brand /> */}
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in Vijay Nagar
      </h1>
  
      {/* <RestaurantCard/> */}
        
      <div className="flex justify-between flex-wrap">
        {setRestaurantList1.map((restaurant) =>  (
            <RestaurantCard
            {...setRestaurantList1}
            key={setRestaurantList1._id}
            whereIsthisres="asf"
            />
          )
        )} 
      </div>
    </>
  );
};
export default Delivery;