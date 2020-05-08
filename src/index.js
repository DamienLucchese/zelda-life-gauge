import ReactDOM from 'react-dom'
import React from 'react'

//import  from "./js/components/ ";
import './index.scss'

const App = () => (
  <div className="testBox">
    <p className="testBox--text">Congrats! This Worked.</p>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));