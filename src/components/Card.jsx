import React from "react"
import data from '../data'


export default function Card(props) {
        console.log(props.isLast)
        return (
            <div id="card" className ={`card ${props.isLast ? "" : "hr"}`}>
                <img className ="card-img" src={`../images/${props.item.imageUrl}`}/>
                <div className="card-info">
                    <div className="card-loc-container">
                        <img className ="card-icon" src={`../images/${props.item.iconUrl}`}/>
                        <span className ="card-loc">{props.item.location}</span>
                        <span className ="card-map"><a className ="card-map-link">View on Star Tracker</a></span>
                    </div>
                    <h1>{props.item.title}</h1>
                    <p className ="card-date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className ="card-body">{props.item.description}</p>
                </div>
            </div>
        )
}