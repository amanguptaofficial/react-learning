import React from "react";
import ReactDOM from "react-dom/client";

function HeaderComponent() {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg" />
            </div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}

function RestaurantCard() {
    return (
        <div className="res-card">
            <h3>Megha Foods</h3>
        </div>
    )
}
function BodyComponent() {
    return (
        <div className="Body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                 <RestaurantCard />
                  <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <>
            <HeaderComponent />
            <BodyComponent />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)

