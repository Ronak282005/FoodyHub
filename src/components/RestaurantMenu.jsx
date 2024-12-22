import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import './RestaurantMenu.css'; // Import the CSS file

export default function RestaurantMenu() {
    const { resId } = useParams();
    const listMenu = useRestaurantMenu(resId);

    if (listMenu == null) {
        return <Shimmer />;
    }

    const { itemCards } = listMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return (
        <div className="menu">
            <h1>{listMenu.cards[2].card.card.info.name}</h1>
            <h2>City: {listMenu.cards[2].card.card.info.city}</h2>
            <p>Cuisines: {listMenu.cards[2].card.card.info.cuisines.join(", ")} - {listMenu.cards[2].card.card.info.costForTwoMessage}</p>
            <h3>Avg Ratings: {listMenu.cards[2].card.card.info.avgRating}</h3>
            <ul>
                {itemCards.map((e) => (
                    <li key={e.id}>{e.name}</li>
                ))}
            </ul>
        </div>
    );
}