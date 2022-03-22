import React from 'react'
import { css } from 'glamor'
import { NavLink } from "react-router-dom"

export const LeftMenuSmall = (props) => {

    // make css rules
    let rule = css({
        marginLeft: '64px',
        width: '240px',
        position: 'fixed',
        top: '220px',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 240px)',
      '@media(max-width: 720px)': {
        color: 'white',
        bottom: '0',
        left: '0',
        right: '64px',
        height: '64px',
        width: 'calc(100% - 32px)',
        top: 'auto',
        background: '#333',
        flexDirection: 'row',
        margin: '0',
        
        ':hover': {
          
        },
        '& > div': {
            flex: '1'
        }
      },
      '& > div': {
          padding: '16px'
      },
      '& a': {
        padding: '16px',
        borderRadius: '32px',
        textDecoration: 'none',
        color: 'black'
      }
    })
    
    return (
        <div {...rule} >
                {/* <div><NavLink to="/" className={(state) => console.log(state)} >Home</NavLink></div> */}
                { props.menuItems.map( item => ( <div><NavLink to={item.link}  >{ item.label }</NavLink></div> ) ) }
                {/* <div style={{ flex: '1' }}></div> */}
                <div style={{  }}><NavLink to="/logout">Logout</NavLink></div>

        </div>
    )
}