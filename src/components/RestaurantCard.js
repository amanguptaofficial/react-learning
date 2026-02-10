import { IMAGE_URL } from "../utils/constant";

function RestaurantCard({ resObj }) {
    if (!resObj) return null;
    const {
        name,
        cuisines = [],
        avgRating,
        cloudinaryImageId,
        sla = {}
    } = resObj;

    const imageUrl =
        `${IMAGE_URL}/${cloudinaryImageId}`;

    return (
        <div className="res-card" style={{border: "1px solid black"}}>
            <img className="res-logo" alt="res-logo" src={imageUrl} />
            <div className="res-details">
                <h3 className="res-name">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h5>{avgRating} ⭐</h5>
                <h5>Delivery Time: {sla.deliveryTime} minutes</h5>
            </div>
        </div>

    );
}

export default RestaurantCard;