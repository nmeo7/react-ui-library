import React, { createContext } from "react"
import { themeStyles } from "./theme";

export const UserContext = createContext()

const defaultTheme = {
  primaryColor: '#333',
  secondaryColor: '',
  primaryColorVariant: '#777',
  primaryColorDark: '#000',
  primaryColorLight: '#aaa',
  secondaryColorVariant: '',
  borderCorners: '',
  font: '',
  animatedBackground: true,
  backgroundColor: '#eee',
  headerBackgroundColor: '',
  headerTextColor: '',
  primaryTextColor: '#fff',
  primaryTextColorInverse: '#111',
  disabledTextColor: '',
  disabledBackground: '',
  textColorOnPrimary: '',
  textColorOnSecondary: '',
  textColorOnDark: '',
  fontFamily: '',
  fontFamilyBold: ''
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