import { resData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

function BodyComponent() {
    return (
        <div className="Body">
            <div className="search" typeof="text">Search</div>
            <div className="res-container">
                {resData.map(obj =>
                    <RestaurantCard
                        key={obj.card.card.info.id}
                        resObj={obj?.card?.card?.info}
                    />)}
            </div>
        </div>
    )
}

export default BodyComponent;