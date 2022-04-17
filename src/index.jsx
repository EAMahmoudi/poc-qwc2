import React from 'react';
import ReactDOM from 'react-dom';
import Index from './qwc2-demo-app/index';

// eslint-disable-next-line new-cap

const Demo = () =>{
    return <h1>Your CRA APP  HERE</h1>;
};

// eslint-disable-next-line new-cap
Index(Demo);
ReactDOM.render(
    <Demo/>,
    document.getElementById('app')
);
