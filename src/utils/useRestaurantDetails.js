import { useState, useEffect } from "react";
const useRestaurantDetails = (id) => {
    const [menu, setMenu] = useState(null);
    useEffect(() =>{
        getRestaurantMenu();
    },[]);
    async function getRestaurantMenu(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/quick?menuId=${id}&categories=true`);
        const json = await data.json();
        console.log(json);
        setMenu(json.data);
       
    }
    return menu;
}

export default useRestaurantDetails;