import useRestaurantDetails from "./utils/useRestaurantDetails";
import {useParams} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItems } from "./utils/cartSlice";

const RestaurantMenu = () => {
    const {id} = useParams();
    const restaurants =  useRestaurantDetails(id);
    const dispatch = useDispatch();
    function handleAddToCart(name){
        dispatch(addItems(name));
    }
    return(
       restaurants?.menu ? 
       <ul>
        {
            Object.values(restaurants.menu.items).map(res => {
                return <li key={res.id}>{res.name} <button onClick={() => handleAddToCart(res.name)}>Add to Cart</button> </li>
            })
        }
       </ul> : <>No menu</>
    )
}

export default RestaurantMenu;