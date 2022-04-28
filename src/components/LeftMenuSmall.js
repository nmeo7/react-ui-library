import React from 'react'
import { css } from 'glamor'
import { NavLink } from "react-router-dom"

import logout_img from 'assets/logout.png'

export const LeftMenuSmall = (props) => {

    let rule = css({
        marginLeft: '64px',
        width: '240px',
        position: 'fixed',
        top: '204px',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 240px)',
      '@media(max-width: 720px)': {
        color: 'white',
        bottom: '0',
        left: '0',
        right: '64px',
        height: '48px',
        width: '100%',
        top: 'auto',
        borderRadius: '32px 32px 0 0',
        background: '#F9F1DC',
        flexDirection: 'row',
        margin: '0',
        
        ':hover': {
          
        },
        '& > div': {
            flex: '1'
        }
      },
      '& > div': {
          padding: '0px 0'
      },
      '& a': {
        padding: '16px',
        borderRadius: '32px',
        textDecoration: 'none',
        color: 'black'
      },
      '& span': {
        verticalAlign: 'bottom',
        height: '22px',
        display: 'inline-block'
      }
    })
    
    return (
      <div {...rule} >
        { props.menuItems.map(item => <div><NavLink to={item.link} style={{ display: 'inline-block' }}> {item.label} </NavLink></div>) }

        <div style={{ flex: '1' }}></div>

        <div onClick={props.logout} >
          <NavLink to="/logout">
            <img src={logout_img} height='24px' width='24px' style={{ paddingRight: '16px' }} /> Logout
          </NavLink>
        </div>
      </div>
    )
}