import React from "react";
import "./App.css";
import BlackMirror from "./images/BlackMirror.jpg";
import BreakingBad from "./images/BreakingBad.jpg";
import DeathNote from "./images/DeathNote.jpg";
import GOT from "./images/GOT.jpg";
import TheWire from "./images/TheWire.jpg";
import WalkingDead from "./images/WalkingDead.jpg";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='divItem'>
          <img src={BlackMirror} alt="Black Mirror" />
          <div className = 'overlay'>
            <h1>Black Mirror</h1>
          </div>
        </div>
        <div className='divItem'>
          <img src={BreakingBad} alt="Breaking Bad" />
          <div className = 'overlay'>
            <h1>Breaking Bad</h1>
         </div>
        </div>
        <div className='divItem'>
          <img src={DeathNote} alt="Death Note" />
          <div className = 'overlay'>
            <h1>Death Note</h1>
         </div>
        </div>
      </div>
      <div className='container'>
        <div className='divItem'>
          <img src={GOT} alt="Game Of Thrones" />
          <div className = 'overlay'>
            <h1>Game Of Thrones</h1>
         </div>
        </div>
        <div className='divItem'>
          <img src={TheWire} alt="The Wire" />
          <div className = 'overlay'>
            <h1>The Wire</h1>
         </div>
        </div>
        <div className='divItem'>
          <img src={WalkingDead} alt="Walking Dead" />
          <div className = 'overlay'>
            <h1>Walking Dead</h1>
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
