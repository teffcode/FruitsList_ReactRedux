import React from 'react';

const FruitsList = ({ gifs }) => {
    const gifItems = gifs.map(gif => <li key={ gif.id }>{ gif.url }</li>);
    return <ul>{ gifItems }</ul>
}

export default FruitsList;