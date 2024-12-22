import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import "./Body.css"; // Import the CSS file

let bodyStyle = {
  width:"90%",
  margin:"2rem  auto",
  display:"flex",
  flexWrap:"wrap",
  justifyContent:"center",
  gap: "1rem",
}

let btnStyle = {
  width:"90%",
  margin:"2rem  auto",
  display:"flex",
  justifyContent:"space-evenly",
  
}

export default function Body(){
    const [listOfRestaurent,setListOfRestaurent] = useState([])
    const [searchText,setSearchText] = useState("")
    const [filteredRestaurent,setFilteredRestaurent] = useState([])

    // const restaurantWithPromot = withPromotedLable(RestaurentCard)

    useEffect(()=>{
      fetchdata()
    },[])

    const fetchdata = async()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

      const json = await data.json()
      setListOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus()

    if(onlineStatus == false){
      return <h1>Opps You&apos;r Offline!! Please Check Your Internet Connection.</h1>
    }
    
    return listOfRestaurent.length == 0 ? <Shimmer/> : (
      <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchRests = filteredRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurent(searchRests);
              console.log(searchRests);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.info.avgRating >= 4.5
            );
            console.log(filteredList);
            setListOfRestaurent(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurent.map((restaurants) => (
          <Link key={restaurants.info.id} to={"/restaurants/" + restaurants.info.id}>
            <div className="restaurent-card">
              <RestaurentCard resData={restaurants} />
            </div>
          </Link>
        ))}
      </div>
    </div>
    )
}


  