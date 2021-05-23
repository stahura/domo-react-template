import React, { useState, useEffect, useRef } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const domo = require("ryuu.js");

function StateProvider(props) {

  //Define functions and state variables here:

      /*  Example:

      const [state,setState] = useState("")

      const getData() = () => {
        console.log("test")
      }

      */

  //add variables and functions you want to pass to other components
  
      /*  Example:

          const templatContext = {
            state, 
            setState,
            getData
          }

      */

  //to use these variables in other components, make a copy of my AppContext.js and then do the following:

      /*  testComponent.js
          
          import AppContext

          const templateContext = useContext(AppContext)
          const {state,setState,getData} = templateContext

      */

  const templateContext = {
    
  };

  return (
    <AppContext.Provider value={templateContext}>
      {props.children}
    </AppContext.Provider>
  );
}



export default StateProvider;
