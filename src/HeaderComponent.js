import { LOGO_URL } from "./utils/constants";
import {Link} from "react-router-dom";

export default HeaderComponent = () => {
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
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}