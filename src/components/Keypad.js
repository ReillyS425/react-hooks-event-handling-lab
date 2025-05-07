import React from "react";


function Keypad (){
    function onChange() {
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={onChange}/>
        </div>
    );
}

export default Keypad;