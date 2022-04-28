import { css } from 'glamor'
import React from 'react'

export const showDialog = (content) => {
  setDialogContent (content)
}

const close = <div onClick={ () => showDialog(null) } style={{ position: 'absolute', color: 'white', padding: '12px', right: '8px', top: '8px', background: 'black', borderRadius: '50%', height: '16px', width: '16px', cursor: 'pointer', display: 'grid', placeItems: 'center' }} >x</div>

const dialogStyle = css({
    position: 'fixed', top: '0', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,.7)', zIndex: '99',
    '& div': {
        height: 'auto', background: '#fff', padding: '32px', 
    }
})

export const Dialog = (props) => {
    
    return props.bottom ? 
    (
        <div onClick={ () => showDialog(null) } {...dialogStyle}>
            <div onClick={ (e) => e.stopPropagation() } style={{ position: 'fixed', bottom: '0', left: '0', right: '0', borderRadius: '32px 32px 0 0' }} >
                { close }
                { props.children }
            </div>
        </div> 
    ):( 
        <div onClick={ () => showDialog(null) } {...dialogStyle} style={{ display: 'grid', placeItems: 'center' }}>
            <div onClick={ (e) => e.stopPropagation() } style={{ borderRadius: '32px', position: 'relative' }} >
                { close }
                { props.children }
            </div>
        </div>
    )
}