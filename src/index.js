//import  from "./js/components/ ";

import './index.scss'
import React from 'react'

const App = () => (
  <div className="testBox">
    <p className="testBox--text">Congrats! This Worked.</p>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));