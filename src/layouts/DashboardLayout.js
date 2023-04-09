import React from 'react'
import { BackTop } from 'antd'
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
  ...props
}) => {
  return (
    <div>
      <DashboardHeader
        headerOptions={headerOptions}
        scrolled={headerOptions.scrolled}
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
            maxWidth: '1440px',
            marginTop: '32px',
            marginBottom: '32px'
          }}
        >
          <div style={{ flex: '1 1 480px', minHeight: 'calc(100vh - 254px)' }}>
            {props.children}
          </div>
          <div style={{ flex: '0 1 208px' }}>{LeftMenu}</div>
          <BackTop style={backToTop} />
        </div>
        <div style={{ marginBottom: '32px', marginTop: '32px' }}>{Footer}</div>
      </div>
    </div>
  )
}
