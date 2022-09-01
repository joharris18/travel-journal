import React from "react"
import './App.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from './data'



export default function App() {
    
    const planets = data.map(planet => {
        // console.log(planet.id)
        // console.log(data.length)
        let isLast = false
        if (planet.id == data.length) {
           isLast = true
        } 
        // console.log(isLastCard)
        return <Card 
            key={planet.id}
            item={planet}
            isLast = {isLast}
        />
    })
    
   
    return (
        <div className="container">
            <Navbar />
            <div className="hero">
                {planets}
            </div>
        </div>
    )
    
     
}