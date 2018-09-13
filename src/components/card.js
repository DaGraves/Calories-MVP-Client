import React from 'react';


export default function Card(props) {
    return (
        <div data={props.id} className="card-container">
            <p className="card-date"><b><i className="far fa-calendar-alt"></i> Date:</b> {props.date}</p>
            <p className="card-meal1 "><b><i className="fas fa-dumbbell"></i> Meal 1:</b> {props.meal1}</p>
            <p className="card-meal2"><b><i className="far fa-clock"></i> Meal 2:</b> {props.meal2}</p>
            <p className="card-meal3 "><b><i className="fas fa-dumbbell"></i> Meal 3:</b> {props.meal3}</p>
            <p className="card-snack"><b><i className="far fa-clock"></i> Snacks/Others:</b> {props.snack}</p>
            <button onClick={() => props.handleClick(props.id)} type="button" className="exit-btn">Delete</button>
        </div>
    );
}