import React from 'react';
import './card.styles.css';
export const Card = props => (
    <div className='card-container'>
        <img src={'download.jfif'}/>
        <h2> {props.monster.name}</h2>
        <font> {props.monster.email} </font>
    </div>
)