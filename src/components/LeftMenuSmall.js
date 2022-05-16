import React, { useState } from 'react'
import { css } from 'glamor'
import { NavLink } from "react-router-dom"

import logout_img from 'assets/logout.png'
import user from 'assets/user.png'

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
        height: '72px',
        width: '100%',
        top: 'auto',
        borderRadius: '32px 32px 0 0',
        background: '#F9F1DC',
        flexDirection: 'row',
        margin: '0',
        textAlign: 'center',
        
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

    const [showOptions, setShowOptions] = useState(false)
    
    return (
      <div {...rule} >
        { props.menuItems.map(item => <div><NavLink to={item.link} style={{ display: 'inline-block' }}> {item.label} </NavLink></div>) }

        <div style={{ flex: '1' }}></div>

        <div style={{ position: 'relative', paddingLeft: '16px' }} onMouseEnter={ () => setShowOptions(true) } onMouseLeave={ () => setShowOptions(false) } >
          { showOptions && <div style={{ position: 'relative', boxShadow: '0 2px 2px 1px #333', borderRadius: '16px', padding: '16px', marginBottom: '48px', left: '-32px' }} >
            <div ><NavLink to="/profile" style={{ display: 'inline-block' }}> <img src={user} height='24px' width='24px' style={{ paddingRight: '16px' }} /> <span>Account</span> </NavLink></div>
            <div><NavLink onClick={props.logout} to="/logout" style={{ display: 'inline-block' }}> <img src={logout_img} height='24px' width='24px' style={{ paddingRight: '16px' }} /> <span>Logout</span> </NavLink></div>
          </div> }
          <div style={{ cursor: 'pointer' }} >
            <img src={user} height='24px' width='24px' style={{ paddingRight: '16px' }} /> <span>Account</span>
          </div>
        </div>
      </div>
    )
}