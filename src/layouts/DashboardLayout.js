import React from 'react'
import { BackTop } from 'antd'
import { DashboardHeader } from './DashboardHeader'
import { useResponsiveStyles2 } from '../components/styles'

export const DashboardLayout = ({
  headerOptions,
  LeftMenu,
  Footer,
  theme,
  ...props
}) => {
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

  const wrapperStyles = useResponsiveStyles2({
    margin: 'auto',
    maxWidth: '1440px',
    padding: '0 64px',
    small: { padding: '0px' }
  })

  const rightSection = useResponsiveStyles2({
    margin: `0 0 32px ${theme?.leftMenuWidth || '240px'}`,
    small: { margin: '32px 32px 32px 32px' }
  })

  const leftMenuStyle = useResponsiveStyles2({
    width: `${theme?.leftMenuWidth || '240px'}`,
    position: 'fixed',
    top: '200px',
    height: 'calc(100vh - 240px)',
    small: { width: '100%', top: 'calc(100vh - 48px)', height: 'auto' }
  })

  return (
    <div>
      <DashboardHeader
        headerOptions={headerOptions}
        scrolled={headerOptions.scrolled}
      />
      <div style={wrapperStyles}>
        <div style={rightSection}>
          {props.children}
          {Footer}
        </div>
        <div style={leftMenuStyle}>{LeftMenu}</div>
        <BackTop style={backToTop}>{/* <TbArrowBarToUp/> */}</BackTop>
      </div>
    </div>
  )
}
