import React from 'react'
import { BackTop, FloatButton } from 'antd'
import { DashboardHeader } from './DashboardHeader'

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
export const DashboardLayout = ({
  headerOptions,
  LeftMenu,
  Footer,
  theme,
  background,
  ...props
}) => {
  return (
    <div>
      {background}
      <DashboardHeader
        headerOptions={headerOptions}
        scrolled={props.scrolled}
      />
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            gap: '32px',
            width: '100%',
            margin: 'auto',
            maxWidth: '1312px',
            marginTop: '32px',
            marginBottom: '32px'
          }}
        >
          <div
            style={{
              flex: '1 1 480px',
              maxWidth: 'calc(1312px - 208px - 48px)',
              minHeight: 'calc(100vh - 254px)'
            }}
          >
            {props.children}
          </div>
          <div style={{ flex: '0 1 208px' }}>{LeftMenu}</div>
          <FloatButton.BackTop style={backToTop} />
        </div>
        <div style={{ marginBottom: '32px', marginTop: '32px' }}>{Footer}</div>
      </div>
    </div>
  )
}
