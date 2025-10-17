import React, {Component, useState} from "react";
import "./../styles/App.css";
function App() {
  return (
    <div id="main">
      // Do not alter the main div
          <ParagraphDisplay />

    </div>
  );
}
export default App;
 function ParagraphDisplay(){
    const[varible,paravar]=useState(false)
    let data = (varible)? <p id="para">Hello, I've learnt to use the full-stack evaluation tool.</p> : null;
    return(
        <div>
            {data}
            <button id="click" onClick={()=>paravar(!varible)}>Click me</button>
        </div>
    )
}
