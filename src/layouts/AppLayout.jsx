import React from 'react'
// import { QueryClient } from 'react-query'
import { css } from 'glamor'
import { Button } from '../components/Button'

// export const queryClient = new QueryClient()

const style = css({
  height: '100vh',
  margin: 'auto',
  '@media only screen and (min-width: 1600px)': {
    height: 'calc(100vh - 32px)',
    margin: 'auto',
    boxShadow: '#393d3a 2px 2px 16px',
    borderRadius: '8px'
  }
})

const style1 = css({
  height: '100vh',
  padding: '0',
  '@media only screen and (min-width: 1600px)': {
    paddingTop: '16px',
    paddingBottom: '16px'
  }
})

export const AppLayout = (props) => {
  return (
    <div style={{ background: 'rgb(12, 13, 13)' }} {...style1}>
      <div
        style={{
          backgroundColor: '#191d1a',
          color: 'rgb(251, 249, 242)',
          padding: '32px',
          display: 'flex',
          maxWidth: '1600px',
          gap: '32px',
          minHeight: '540px'
          // paddingRight: '0',
        }}
        {...style}
      >
        <div
          style={{
            maxWidth: '320px',
            flex: '2',
            borderRight: '1px solid #333',
            paddingRight: '32px',
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 64px)'
          }}
        >
          <div style={{ flex: 1 /* overflowY: 'scroll' */ }}>
            {/* <Input placeholder='Search Applications' /> */}
            {/* <Steps
              direction='vertical'
              size='small'
              current={1}
              items={[
                { title: 'Finished', description: 'This is a description.' }, // , onClick: () => navigate('/next-gen') },
                { title: 'In Progress', description: 'This is a description.' },
                { title: 'Waiting', description: 'This is a description.' }
              ]}
            /> */}
            {props.left}
          </div>
          <div
            style={{ padding: '32px 0', borderTop: '1px solid #333' }}
            onClick={props.logout}
          >
            Logout
          </div>
        </div>
        <div style={{ flex: '7', overflow: 'hidden' }}>
          <div>
            <div
              style={
                {
                  // flex: '7',
                  // display: 'grid',
                  // placeContent: 'center',
                  // overflow: 'scroll',
                  // maxHeight: '100vh',
                }
              }
            >
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

                {props.quickAction && (
                  <Button
                    ghost
                    style={{ margin: '4px 0' }}
                    onClick={props.onQuickAction}
                  >
                    {props.quickAction}
                  </Button>
                )}
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
