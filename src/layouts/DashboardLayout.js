import React, { useState } from 'react'
import { css } from 'glamor'
import { AnimatedBackground } from '../components/AnimatedBackground'
import { LeftMenuSmall } from '../components/LeftMenuSmall'
import { Header } from '../components/Header'
import { useLocation } from "react-router-dom"
import { Dialog } from '../components/Dialog'

let [dialogContent, setDialogContent] = [null, null]
let location = null

const content = css({
  width: 'calc(100% - 480px)', 
  marginLeft: '380px', 
  marginTop: '204px', 
  marginBottom: '96px', 
  marginRight: '96px',
  position: 'relative',
  '@media(max-width: 720px)': {
    width: '100%', 
    margin: '0', 
    marginBottom: '96px', 
  }
})

export const getLocation = () => location

export const DashboardLayout = (props) => {
  [dialogContent, setDialogContent] = useState()
  location = useLocation()
    
    return (
        <div >
            <AnimatedBackground/>
            <Header scrolled={ props.scrolled } stickingHeader={ props.stickingHeader } quickAction={props.quickAction} displayName={props.displayName} header={props.header} logo={props.logo} />

            <div { ...content } >
              {props.children}
            </div>
            <LeftMenuSmall menuItems={ props.menuItems } logout={props.logout} />
            {/* <div style={{ position: 'fixed', right: '16px', bottom: '16px', borderRadius: '1.5em', background: '#777', display: 'grid', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '1em' }} onClick = { () => { window.scrollTo(0, 0) } } >
             Search
            </div> */}
            { dialogContent && <Dialog> { dialogContent } </Dialog> }
        </div>
    )
}