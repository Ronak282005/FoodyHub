import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

export default function Header(){
    let headStyle = {
    border:"2px dashed black",
    height: "2rem",
    padding:"25px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    }

    let navitemStyle ={
        display: "flex",
        gap: "2rem",
        padding: "0",
    }
    

    const [btnName,setBtnName] = useState("LogIn")
     
    const onlineStatus = useOnlineStatus()
    
    return(
        // style={headStyle}
        <div className="flex" style={headStyle}>
            <div className="logo-container">
                <Link to={"/"}>
                    <i className="fa-solid fa-utensils"></i>
                </Link>
            </div>
            <div className="nav-items">
                {/* style={navitemStyle} */}
            <ul style={navitemStyle}>
                <li>STATUS : Online {onlineStatus ? "✅":"🔴"}</li>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>AboutUs</Link>
                <Link to={"/contactus"}>ContactUs</Link>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                    btnName == "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn")
                    }}>{btnName}</button>
            </ul>
            </div>
        </div>
    )
}