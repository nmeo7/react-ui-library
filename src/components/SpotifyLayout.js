import React from 'react'
import { css } from 'glamor'
import { glass } from './styles'
import { AnimatedBackground } from './AnimatedBackground'
import { BottomDialog } from './BottomDialog'

export const SpotifyLayout = (props) => {

    // make css rules
    let rule = css({
        padding: '16px',
        width: '240px',
        position: 'fixed',
        color: 'red',
        top: '220px',
      '@media(max-width: 720px)': {
        color: 'green',
        display: 'flex',
        bottom: '0',
        left: '0',
        right: '64px',
        height: '64px',
        width: 'calc(100% - 32px)',
        top: 'auto',
        background: '#333',
        flexDirection: 'row',
        
        ':hover': {
          color: 'yellow'
        }
      },
      '& > div': {
          padding: '16px',
          flex: '1'
      }
    })
    
    return (
        <div>
          <AnimatedBackground/>
          <BottomDialog/>
            <div style={{ background: '#aaa', height: '200vh', width: 'calc(100% - 272px)', marginLeft: '272px', marginTop: '120px', position: 'relative' }} >content</div>
            <div {...rule} >
                <div { ...glass } className='example' >Home</div>
                <div>Search</div>
                <div>Library</div>
            </div>
        </div>
    )
}