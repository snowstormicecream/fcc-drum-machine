//From https://www.youtube.com/watch?v=bztDMD4HSL0

import React from "react";
import "./ToggleSwitch.css"

const ToggleSwitch = ({isToggled, onToggle}) => {
    return (
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle}/>
        <span className="slider"/>
      </label>  
    );
};

export default ToggleSwitch;