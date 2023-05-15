import React from 'react'
// import { Button } from '../components/Button'
// import { useResponsiveStyles2 } from '../components/styles'

export const AppLayout = (props) => {
  const containerStyles = {
    height: '100vh',
    margin: 'auto'
    // large: {
    //   height: 'calc(100vh - 32px)',
    //   margin: 'auto',
    //   boxShadow: '#393d3a 2px 2px 16px',
    //   borderRadius: '8px'
    // }
  }

  const appOverlayStyles = {
    height: '100vh',
    padding: '0'
    // large: { paddingTop: '16px', paddingBottom: '16px' }
  }

  return (
    <div style={{ ...appOverlayStyles, background: 'rgb(12, 13, 13)' }}>
      <div
        style={{
          ...containerStyles,
          backgroundColor: '#191d1a',
          color: 'rgb(251, 249, 242)',
          padding: '32px',
          display: 'flex',
          maxWidth: '1600px',
          gap: '32px',
          minHeight: '540px'
        }}
      >
        <div
          style={{
            maxWidth: '320px',
            flex: '0',
            borderRight: '1px solid #333',
            paddingRight: '32px',
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 64px)'
          }}
        >
          <div style={{ flex: 1 }}>{props.left}</div>
          <div
            style={{ padding: '32px 0', borderTop: '1px solid #333' }}
            onClick={props.logout}
          >
            Logout
          </div>
        </div>
        <div style={{ flex: '7', overflow: 'hidden' }}>
          <div>
            <div>
              <div
                style={{
                  marginBottom: '16px',
                  display: 'flex',
                  flexDirection: 'row'
                }}
              >
                <h1
                  style={{
                    margin: '0',
                    padding: '0',
                    color: '#ebcf8a',
                    flex: '1'
                  }}
                >
                  {props.title}
                </h1>
                {props.quickAction}

                {/* {props.quickAction && (
                  <Button
                    ghost
                    style={{ margin: '4px 0' }}
                    onClick={props.onQuickAction}
                  >
                    {props.quickAction}
                  </Button>
                )} */}
              </div>
              <div
                style={{
                  width: '640px',
                  width: 'auto',
                  margin: 'auto',
                  height: '80vh',
                  overflowY: 'auto',
                  paddingRight: '32px'
                }}
              >
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
