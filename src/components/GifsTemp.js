import React from 'react';

const GifsTemp = ({ gifs }) => {
    const gifItems = gifs.map(gif => <li key={ gif.id }>{ gif.url }</li>);
    return <ul>{ gifItems }</ul>
}