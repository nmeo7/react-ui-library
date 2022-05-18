import React, { useState, useEffect } from 'react'
import { css } from 'glamor'
import { AnimatedBackground } from '../components/AnimatedBackground'
import { LeftMenuSmall } from '../components/LeftMenuSmall'
import { Header } from '../components/Header'
import { Dialog } from '../components/Dialog'
import AOS from 'aos'
import "aos/dist/aos.css"
import { PopupHolder } from '../components/Popup'
import { Context } from './Context'
import { route, RouterPage, RoutesWrapper } from './RoutesWrapper'

let [dialogContent, setDialogContent] = [null, null]

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

export let updateHeader = () => { }

export const DashboardPage = (props) => {
    useEffect(() => updateHeader({}), [])
    return <RouterPage> { props.children } </RouterPage>
}

export const DashboardLayout = (props) => {
  [dialogContent, setDialogContent] = useState()
  const [headerOptions, setHeaderOptions] = useState({})

  useEffect(() => AOS.init({ duration : 800 }), [])
  updateHeader = (h) => setHeaderOptions({ ...props.headerOptions, ...h })
    
  return (
    <Context theme={props.theme} >
      <AnimatedBackground/>
      <Header headerOptions={ headerOptions } scrolled={ props.scrolled } />
      <div { ...content } ><RoutesWrapper routes={ props.routes?.map( route ) } /></div>
      <LeftMenuSmall menuItems={ props.menuItems } logout={props.logout} />
      
      {/* <div style={{ position: 'fixed', right: '16px', bottom: '16px', borderRadius: '1.5em', background: '#777', display: 'grid', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '1em' }} onClick = { () => { window.scrollTo(0, 0) } } >
       Search
      </div> */}
      { dialogContent && <Dialog> { dialogContent } </Dialog> }
      <PopupHolder/>
    </Context>
  )
}