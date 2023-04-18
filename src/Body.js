import RestroCard from "./RestroCard";
import restraunts from "./utils/Restraunts";

const Body = () =>{
    return(
        <div className="bodyContainer">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    restraunts.map(res =>  <RestroCard resData={res} /> )
                }
            </div>
        </div>
    )
}

export default Body;