import React from "react"
import logo from "../images/planet-outline.svg"

export default function Navbar() {
    return (
        <nav>
            <img className="nav-icon" src={require(logo)}/>
            <p>my travel journal.</p>
        </nav>
    )
}