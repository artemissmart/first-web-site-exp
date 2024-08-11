//cd = change directory
//npm = node package manager
//npm run dev ;to start the developpment server 
//.jsx = java script xml
//<ul></ul> unordered list
//<hr> = horizontool rule
//&copy;  = copyright
//<div> are blocks elements</div>
//{} use for dynamic value
/*
L’entité HTML &nbsp; (« non breaking space ») va nous permettre d’ajouter une espace simple dit espace « insécable » ;
L’entité HTML &ensp; (« en space ») va nous permettre de créer une espace double ;
L’entité HTML &emsp; (« em space ») va nous permettre de créer une espace quadruple ;
L’entité HTML &thinsp; (« thin space ») va nous permettre de créer un espace très fin (demi-espace).

PascaleCase   camelCase

props = read only properties that are shared between components.
        A parent component can send data to a child component.
        <Component key=value />


        PROPTYPES = a mechanism that ensures that the passed value
        is of the correct datatype.
         exempl: age: PropTypes.number 

*/




import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
