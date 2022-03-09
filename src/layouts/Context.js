import React, { createContext } from "react"
import { themeStyles } from "./theme";

export const UserContext = createContext()

export const Context = (props) => {
    
  return (
    <UserContext.Provider value={ props } >
        <div {...themeStyles(props.theme)  } >
          { props.children }
        </div>
    </UserContext.Provider>
  );
}