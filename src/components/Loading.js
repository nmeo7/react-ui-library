import React from 'react'
import { css } from 'glamor'
    
const lds = css.keyframes({
  '0%': {
    top: '-28px',
    height: '48px'
  },
  '50%, 100%': {
    top: '-16px',
    height: '24px'
  }
})
  
const style = css({
  display: 'inline-block',
  position: 'relative',
  width: '56px',
  height: '0',
  '& div': {
    display: 'inline-block',
    position: 'absolute',
    left: '8px',
    width: '8px',
    background: '#333',
    animation: `${lds} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite`
  },
  '& div:nth-child(1)': {
    left: '8px',
    animationDelay: '-0.24s'
  },
  '& div:nth-child(2)': {
    left: '24px',
    animationDelay: '-0.12s'
  },
  '& div:nth-child(3)': {
    left: '40px',
    animationDelay: '0'
  }
})

export const Loading = () => <div {...style}><div></div><div></div><div></div></div>