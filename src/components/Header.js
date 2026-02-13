import { ShoppingCart, PhoneCall } from 'lucide-react';
import { LOGO_URL } from '../utils/constant';
import { useEffect, useState } from 'react'
function HeaderComponent() {
    const [btnName, setBtnName] = useState('Login');
    function handleLoginButton() {
        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
    }
    console.log("Render whole react component")
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
                    <button className='login-btn' onClick={handleLoginButton}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}

export default HeaderComponent;