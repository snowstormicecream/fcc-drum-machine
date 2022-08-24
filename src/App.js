import './styles.css'
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ToggleSwitch from './components/ToggleSwitch';

//Each button on click should trigger a state change and input 

function App() {
  
  const sounds = [
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  ]

  const [isToggledPower, setIsToggledPower] = useState(false);
  const [isToggledBank, setIsToggledBank] = useState(false);
  const [outPutText, setOutPutText] = useState("_");
  

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true)
  })

  const handleKeyDown = (e) => {

    switch(e.keyCode) {
      case 81:
        setOutPutText("Q");
        document.getElementById("Q").getElementsByClassName("clip")[0].play();
        break;
      case 87:
        setOutPutText("W");
        document.getElementById("W").getElementsByClassName("clip")[0].play();
        break;
      case 69:
        setOutPutText("E");
        document.getElementById("E").getElementsByClassName("clip")[0].play();
        break;
      case 65:
        setOutPutText("A");
        document.getElementById("A").getElementsByClassName("clip")[0].play();
        break;
      case 83:
        setOutPutText("S");
        document.getElementById("S").getElementsByClassName("clip")[0].play();
        break;
      case 68:
        setOutPutText("D");
        document.getElementById("D").getElementsByClassName("clip")[0].play();
        break;
      case 90:
        setOutPutText("Z");
        document.getElementById("Z").getElementsByClassName("clip")[0].play();
        break;
      case 88:
        setOutPutText("X");
        document.getElementById("X").getElementsByClassName("clip")[0].play();
        break;
      case 67:
        setOutPutText("C");
        document.getElementById("C").getElementsByClassName("clip")[0].play();
        break;
      default:
        break;
    }
  }
  
  return (
    <div className="App">
      <div className="container" id="drum-machine">
        <div className="row" id="display">
          <div className="col-sm-6">
            <div className="row">
              
              <button className="btn btn-dark col-sm-4 drum-pad" id="Q" onClick={() => {setOutPutText("Q");
              document.getElementById("Q").getElementsByClassName("clip")[0].play();
              }}>
                <audio id="Q" className="clip" src={sounds[0]} preload="auto"></audio> Q
              </button>

              <button className="btn btn-dark col-sm-4 drum-pad" id="W" onClick={() => {setOutPutText("W"); 
              document.getElementById("W").getElementsByClassName("clip")[0].play();
              }}>
                <audio id="W" className="clip" src={sounds[1]} preload="auto"></audio> W
              </button>

              <button className="btn btn-dark col-sm-4 drum-pad E" id="E" onClick={() => {setOutPutText("E");
              document.getElementById("E").getElementsByClassName("clip")[0].play();
              }}>
                <audio id="E" className="clip" src={sounds[2]} preload="auto"></audio> E
              </button>

            </div>
            <div className="row">
              
              <button className="btn btn-dark col-sm-4 drum-pad A" id="A" onClick={() => {setOutPutText("A");
              document.getElementById("A").getElementsByClassName("clip")[0].play();
              }}>
                <audio id="A" className="clip" src={sounds[3]} preload="auto"></audio> A
              </button>

              <button className="btn btn-dark col-sm-4 drum-pad S" id="S" onClick={() => {setOutPutText("S");
              document.getElementById("S").getElementsByClassName("clip")[0].play();
              }}>
                <audio id="S" className="clip" src={sounds[4]} preload="auto"></audio> S
              </button>

              <button className="btn btn-dark col-sm-4 drum-pad D" id="D" onClick={() => {setOutPutText("D");
              document.getElementById("D").getElementsByClassName("clip")[0].play();
              }}>
                <audio id="D" className="clip" src={sounds[5]} preload="auto"></audio> D
              </button>

            </div>
            <div className="row">
              
              <button className="btn btn-dark col-sm-4 drum-pad Z" id="Z"onClick={() => {setOutPutText("Z");
              document.getElementById("Z").getElementsByClassName("clip")[0].play();
              }}>
                <audio id="Z" className="clip" src={sounds[6]} preload="auto"></audio> Z
              </button>

              <button className="btn btn-dark col-sm-4 drum-pad X" id="X" onClick={() => {setOutPutText("X");
              document.getElementById("X").getElementsByClassName("clip")[0].play();
              }}>
                <audio id="X" className="clip" src={sounds[7]} preload="auto"></audio> X
              </button>

              <button className="btn btn-dark col-sm-4 drum-pad C" id="C" onClick={() => {setOutPutText("C");
              document.getElementById("C").getElementsByClassName("clip")[0].play();
              }}>
                <audio id="C" className="clip" src={sounds[8]} preload="auto"></audio> C
              </button>
              
            </div>
          </div>
          
          <div className="col-sm-6">
            <div className="row-sm-3">
              <ToggleSwitch isToggled={isToggledPower} onToggle={() => setIsToggledPower(!isToggledPower)} />
            </div>
            <div className="row-sm-3">
              {outPutText}
            </div>
            <div className="row-sm-3">
              Volume Slider
            </div>
            <div className="row-sm-3">
            <ToggleSwitch isToggled={isToggledBank} onToggle={() => setIsToggledBank(!isToggledBank)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
