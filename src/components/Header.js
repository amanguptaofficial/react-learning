import { ShoppingCart, PhoneCall } from 'lucide-react';
import { LOGO_URL } from '../utils/constant';
function HeaderComponent() {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About</li>
                    <li><ShoppingCart size={19} color='red' /> Cart</li>
                    <li><PhoneCall size={19} color='red' /> Contact</li>
                </ul>
            </div>

        </div>
    )
}

export default HeaderComponent;