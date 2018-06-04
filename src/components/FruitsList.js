import React from 'react';

import './FruitsList.css';

const FruitsList = ({ fruits }) => {
    const fruitsItems = fruits.map(fruit => 
            <li key={ fruit.id } className="list">
                <img src={fruit.url}/>
            </li>
        );
    return <ul>{ fruitsItems }</ul>
}

export default FruitsList;