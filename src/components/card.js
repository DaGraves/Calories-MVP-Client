import React from 'react';


export default function Card(props) {
    return (
        <div data={props.id} className="card-container">
            <p className="card-date"><b> Date:</b> {props.date}</p>
            <p className="card-meal1"><b> Meal #1:</b> {props.meal1}</p>
            <p className="card-meal2"><b>Meal #2:</b> {props.meal2} minutes</p>
            <p className="card-meal3"><b>Meal #3:</b> {props.meal3}</p>
            <p className="card-snack"><b> Snacks/Other:</b> {props.snack}</p>
            <button onClick={() => props.handleClick(props.id)} type="button" className="exit-btn">Delete</button>
        </div>
    );
}