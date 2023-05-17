import useRestaurantDetails from "./utils/useRestaurantDetails";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
    const {id} = useParams();
    const restaurants =  useRestaurantDetails(id);
    return(
       restaurants?.menu ? 
       <ul>
        {
            Object.values(restaurants.menu.items).map(res => {
                return <li key={res.id}>{res.name}</li>
            })
        }
       </ul> : <>No menu</>
    )
}

export default RestaurantMenu;