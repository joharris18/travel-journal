import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img className="nav-icon" src={require("../images/planet-outline.svg")}/>
            <p>my travel journal.</p>
        </nav>
    )
}