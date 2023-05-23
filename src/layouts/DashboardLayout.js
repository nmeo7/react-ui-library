import React from 'react'
import { FloatButton } from 'antd'
import { DashboardHeader } from './DashboardHeader'
import styled from 'styled-components'

const LeftMenu1 = styled.div`
  position: fixed;
  top: 196px;
  @media (max-width: 720px) {
    color: white;
    bottom: 0;
    left: 0;
    right: 64px;
    height: 96px;
    width: 100%;
    top: auto;
  }
`

const Content = styled.div`
  position: absolute;
  left: 240px;
  width: calc(100% - 240px);
  min-height: calc(100vh - 254px);
  overflow: scroll;
  @media (max-width: 720px) {
    left: 0;
    width: 100%;
    padding: 32px;
  }
`

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
            position: 'relative',
            width: '100%',
            margin: 'auto',
            maxWidth: '1312px',
            marginTop: '32px',
            marginBottom: '32px'
          }}
        >
          <Content>
            {props.children}
            <div style={{ marginBottom: '32px', marginTop: '32px' }}>
              {Footer}
            </div>
          </Content>
          <LeftMenu1>{LeftMenu}</LeftMenu1>
          <FloatButton.BackTop style={backToTop} />
        </div>
      </div>
    </div>
  )
}
