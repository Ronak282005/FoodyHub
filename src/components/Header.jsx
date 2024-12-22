import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import './Header.css'; // Import the CSS file at the top of your component

export default function Header() {
    const [btnName, setBtnName] = useState("LogIn");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <Link to={"/"}>
                    <i className="fa-solid fa-utensils"></i>
                    <br />
                    FoodyHub
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>STATUS : Online {onlineStatus ? "✅" : "🔴"}</li>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>AboutUs</Link>
                    <Link to={"/contactus"}>ContactUs</Link>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}