import { Link } from "react-router-dom";
import RestroCard from "./RestroCard";
import Shimmer from "./custom/Shimmer";
import restraunts from "./utils/Restraunts";
import { useState, useEffect } from 'react';

const Body = () =>{
    const [starRes, setStarRes] = useState([]);
    const [allRes, setAllRes] = useState([]);

    useEffect(() => {  
       getRestaurants();
    }, []);

    async function getRestaurants(){
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9689008&lng=79.59405439999999&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        console.log(json);
        setAllRes(json?.data?.cards[2]?.data?.data?.cards);
        setStarRes(json?.data?.cards[2]?.data?.data?.cards); 
    }

    return(
          allRes.length > 0 ?
            <div className="bodyContainer">
                <div className="search">Search</div>
                <button onClick={() => {
                    const filteredRes = restraunts.filter(res => res.rating >= 4);
                    setStarRes(filteredRes);
                }}>top rated restaurants</button>
                <div className="res-container">
                    {
                        starRes.map(res => <Link to = {"/restaurant/" + res?.data?.id} key={res?.data?.id}> <RestroCard resData={res} /> </Link>)
                    }
                </div>
            </div>
        : <div className="res-container"> <Shimmer /> </div>
    )
}

export default Body;