import { resData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from 'react'

function BodyComponent() {
    const [resList, setResList] = useState(resData);
    return (
        <div className="Body">
            <div className="rated-btn">
                <button onClick={() => {
                    const newData = resList.filter(obj => obj.card.card.info.avgRating > 4.5);
                    setResList(newData);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resList.map(obj =>
                    <RestaurantCard
                        key={obj.card.card.info.id}
                        resObj={obj?.card?.card?.info}
                    />)}
            </div>
        </div>
    )
}

export default BodyComponent;