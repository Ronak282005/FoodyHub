import { CDN_URl } from "../utils/constants";
import './RestaurentCard.css'; // Import the CSS file

export default function RestaurentCard(prop) {
    const { resData } = prop;
    const { name, cloudnaryImageId, cuisines, avgRating, costForTwo, sla } = resData.info;

    return (
        <div className="res-card">
            <img src={CDN_URl + cloudnaryImageId} alt="Restaurant" />
            <h3>{name}</h3>
            <h4>{cuisines[0]}</h4>
            <h4>Rating: {avgRating}</h4>
            <h4>Cost for Two: {costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes!</h4>
        </div>
    );
}