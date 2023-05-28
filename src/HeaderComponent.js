import { LOGO_URL } from "./utils/constants";
import {Link} from "react-router-dom";
import {useContext} from "react";
import UserContext from "./utils/UserContext";
import { useSelector } from 'react-redux';
export default HeaderComponent = () => {
    const { user } = useContext(UserContext);
    const items = useSelector(store => store.cart.items);
    return(
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL } />
            </div> 
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about"> About Us </Link></li>
                    <li>Contact Us</li>
                    <li>Cart : {items.length} items</li>
                    <li>{user.name}</li>
                </ul>
            </div>
        </div>
    )
}