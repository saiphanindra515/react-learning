import { BASE_URL } from "./utils/constants"

const RestroCard = ({resData}) => {
    console.log(resData);
    const {name, cuisines, cloudinaryImageId, costForTwo, deliveryTime } = resData.data;
    return(
        <div className="res-card">
            <div className="res-img">
                <img src={BASE_URL+cloudinaryImageId} />
            </div>
            <div className="res-details">
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{costForTwo/100} for two</h4>
                <h4>Delivers in {deliveryTime} mins</h4>
            </div>
        </div>
    )
}

export default RestroCard;