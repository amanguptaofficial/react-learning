import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react'
import ShimmerComponent from "./Shimmer";

function BodyComponent() {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://corsproxy.io?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5423815&lng=77.1234044&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await response.json();
        console.log("json-->", json)
        const restaurants = json?.data?.cards
            ?.map(card => card?.card?.card)
            ?.filter(item =>
                item?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
            )
            ?.map(item => item.info);
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants)
    }

    return filteredRestaurants?.length === 0 ? <ShimmerComponent /> : (
        <div className="Body">
            <div className="filter-btn">
                <div className="rated-btn">
                    <button onClick={() => {
                        const newData = filteredRestaurants?.filter(obj => obj.avgRating > 4.5);
                        setFilteredRestaurants(newData);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="search-btn">
                    <input type="text" placeholder="Search Restaurants" value={searchText} onChange={(e) => {
                        console.log("searchText", searchText)
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={
                        () => {
                            const searchedData = listOfRestaurants.filter(obj => obj.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRestaurants(searchedData);
                        }
                    } >Search</button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants?.map(obj =>
                        <RestaurantCard
                            key={obj.id}
                            resObj={obj}
                        />)}
            </div>
        </div>
    )
}

export default BodyComponent;