import React from 'react'
import { css } from 'glamor'
import { AnimatedBackground } from '../components/AnimatedBackground'
import { LeftMenuSmall } from '../components/LeftMenuSmall'
import { Header } from '../components/Header'
import { NavLink } from "react-router-dom"

export const DashboardLayout = (props) => {

    const content = css({
      height: '200vh', 
      width: 'calc(100% - 480px)', 
      marginLeft: '380px', 
      marginTop: '204px', 
      marginRight: '96px',
      position: 'relative',
      // borderTop: '3px solid',
      // borderRadius: '16px',
      '@media(max-width: 720px)': {
        width: '100%', 
        marginLeft: '0', 
      }
    })
    
    return (
        <div>
            <AnimatedBackground/>
            <Header scrolled={ props.scrolled } stickingHeader={ props.stickingHeader } logout={props.logout} displayName={props.displayName} />

            <div { ...content } >
              {props.children}
            </div>
            <LeftMenuSmall menuItems={ props.menuItems } />
            {/* <div style={{ position: 'fixed', right: '16px', bottom: '16px', borderRadius: '1.5em', background: '#777', display: 'grid', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '1em' }} onClick = { () => { window.scrollTo(0, 0) } } >
             Search
            </div> */}
        </div>
    )
}