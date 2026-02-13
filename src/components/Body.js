import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react'
import ShimmerComponent from "./Shimmer";

function BodyComponent() {
    const [resList, setResList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5423815&lng=77.1234044&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await response.json();

        const restaurants = json?.data?.cards
            ?.map(card => card?.card?.card)
            ?.filter(item =>
                item?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
            )
            ?.map(item => item.info);
        setResList(restaurants);
    }
    
    return resList.length === 0 ? <ShimmerComponent /> : (
        <div className="Body">
            <div className="rated-btn">
                <button onClick={() => {
                    const newData = resList.filter(obj => obj.avgRating > 4.5);
                    setResList(newData);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resList.map(obj =>
                    <RestaurantCard
                        key={obj.id}
                        resObj={obj}
                    />)}
            </div>
        </div>
    )
}

export default BodyComponent;