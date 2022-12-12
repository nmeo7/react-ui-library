import React from 'react'
import { css } from 'glamor'
import { BackTop } from 'antd'
// import { TbArrowBarToUp } from 'react-icons/tb'
import { DashboardHeader } from './DashboardHeader'

export const DashboardLayout = ({headerOptions, LeftMenu, Footer, theme, ...props}) => {

    const backToTop = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: '50%',
        backgroundColor: 'white',
        color: '#000',
        textAlign: 'center',
        fontSize: 14,
        boxShadow: '2px 4px 16px #F9F1DC'
      }
    
    const wrapperStyles = css({
        margin: 'auto', maxWidth: '1440px', padding: '0 64px',
        '@media(max-width: 720px)': {
          padding: '0px'
        }
      })
    
    const rightSection = css({
        margin: `0 0 32px ${theme?.leftMenuWidth || '240px'}`,
        '@media(max-width: 720px)': {
          margin: '32px 32px 32px 32px',
      }
      })

    const leftMenuStyle = css({ 
      width: `${theme?.leftMenuWidth || '240px'}`, position: 'fixed', top: '200px', height: 'calc(100vh - 240px)',
      '@media(max-width: 720px)': {
        width: '100%',
        top: 'calc(100vh - 48px)',
        height: 'auto'
    }
     })
  
  return (
    <div>
        <DashboardHeader headerOptions={headerOptions} scrolled={headerOptions.scrolled} />
        <div {...wrapperStyles} >
        <div { ...rightSection } >
            { props.children }
            { Footer }
        </div>
        <div {...leftMenuStyle} >
          { LeftMenu }
        </div>
        <BackTop style={backToTop} >
            {/* <TbArrowBarToUp/> */}
        </BackTop>
        </div>
    </div>
  )
}