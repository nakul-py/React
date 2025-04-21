import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import React from 'react';

function MyApp(){
    return (
        <h3>Suiiiiii</h3>
    )
}

const anotherElement = (
    <a href='https://github.com' target='_blank'>Visit Github</a>
)

const anotherUser = "Nakul Verma"

const reactElement = React.createElement(
    'a',
    { href: 'https://github.com', target: '_blank' },
    'Visit Github...',
    anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
