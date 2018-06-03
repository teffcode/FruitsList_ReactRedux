import React from 'react';

const FruitsList = ({ fruits }) => {
    const fruitsItems = fruits.map(fruit => <li key={ fruit.id }><img src={fruit.url}/></li>);
    return <ul>{ fruitsItems }</ul>
}

export default FruitsList;