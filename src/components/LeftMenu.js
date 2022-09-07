import React from 'react'
import { css } from 'glamor'

export const leftMenuLabel = (icon, text, link) => ({ 
  label: <div ><span style={{ display: 'inline-block', lineHeight: '24px', paddingBottom: '26px' }} >{icon || <></>} {text}</span> </div>,
  link 
})

export const leftMenuStyle = css({
    width: '240px',
    position: 'fixed',
    top: '204px',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 240px)',
  '@media(max-width: 720px)': {
    color: 'white',
    bottom: '0',
    left: '0',
    right: '64px',
    height: '96px',
    width: '100%',
    top: 'auto',
    borderRadius: '32px 32px 0 0',
    background: '#F9F1DC',
    flexDirection: 'row',
    margin: '0',
    textAlign: 'center',
    
    ':hover': {
      
    },
    '& > div': {
        flex: '1'
    }
  },
  '& > div': {
      padding: '0px 0'
  },
  '& a': {
    padding: '16px',
    borderRadius: '32px',
    textDecoration: 'none',
    color: 'black'
  },
  '& span': {
    verticalAlign: 'bottom',
    height: '22px',
    display: 'inline-block'
  }
})