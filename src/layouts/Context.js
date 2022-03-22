import React, { createContext } from "react"
import { themeStyles } from "./theme";

export const UserContext = createContext()



const defaultTheme = {
  primaryColor: '#985a0a',
  secondaryColor: '',
  primaryColorVariant: '#ebcf8a',
  primaryColorDark: '#783918',
  primaryColorLight: '#F9F1DC',
  secondaryColorVariant: '',
  borderCorners: '',
  font: '',
  animatedBackground: true,
  backgroundColor: '#fffdf9',
  headerBackgroundColor: '',
  headerTextColor: '',
  primaryTextColor: '#fff',
  primaryTextColorInverse: '#000',
  disabledTextColor: '',
  disabledBackground: '',
  textColorOnPrimary: '',
  textColorOnSecondary: '',
  textColorOnDark: ''
}

export const Context = (props) => {

  const props2 = {...props}
  props2['theme'] = props.theme || defaultTheme
    
  return (
    <UserContext.Provider value={ props2 } >
        <div {...themeStyles(props2.theme)  } >
          { props.children }
        </div>
    </UserContext.Provider>
  );
}