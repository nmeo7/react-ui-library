import React, { createContext, useContext } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "./Context";
import { themeStyles } from "./theme";

export const AppLayout = (props) => {
  
  const { theme } =  useContext (UserContext)
    
  return (
    <div>
      <div style={{ background: '#333', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0', zIndex: '-1' }} ></div>
      <div style={{ background: theme.backgroundColor, maxWidth: '1240px', margin: 'auto', width: '100%', minHeight: '520px', height: 'calc(100vh - 40px)', marginTop: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '64px', borderBottom: '1px solid #333', display: 'flex' }} >
          <div style={{ width: props.back ? '64px' : '0px', display: 'block', overflow: 'hidden' }}  >
            {'<-'}
          </div>
          <div style={{ flex: '1' }} >
            { props.header }
          </div>
        </div>
        <div style={{ flex: '1', display: 'grid', placeItems: 'center' }} >
          { props.children }
        </div>
      </div>
    </div>
  );
}