import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
// import { Button } from '../components/Button'
// import { useResponsiveStyles2 } from '../components/styles'

const Container = styled.div`
  height: 100vh;
  margin: auto;

  background-color: #f9f1dc;
  color: black;
  padding: 32px;
  display: flex;
  max-width: 1600px;
  gap: 32px;
  min-height: 540px;
  margin: auto;

  @media (min-width: 1664px) {
    height: calc(100vh - 128px);
    margin: auto;
    box-shadow: #393d3a 2px 2px 16px;
    border-radius: 8px;
    margin-top: 32px;
  }
`

const AppOverlay = styled.div`
  height: 100vh;
  padding: 0;
  background: rgb(12, 13, 13);
  width: 100%;
  position: fixed;
  top: 0;
`

export const AppLayout = (props) => {
  return (
    <AppOverlay>
      <Container>
        {!props.dialog && (
          <div
            style={{
              flex: '0 0 320px',
              borderRight: '1px solid #333',
              paddingRight: '32px',
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100% - 72px)'
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
        )}
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
                {props.dialog && (
                  <Button text onClick={() => props.dialog.navigate(-1)}>
                    Back
                  </Button>
                )}
                <h1
                  style={{
                    margin: '0',
                    padding: '0',
                    color: '#652c0e',
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
      </Container>
    </AppOverlay>
  )
}
