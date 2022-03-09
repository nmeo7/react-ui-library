import React from 'react'
import { css } from 'glamor'

export const PseudoCard = (props) => {
    let rule = css({
        margin: '16px',
        aspectRatio: '1/2',
        width: props.width || '400px',
        position: 'relative',
        marginTop: '64px',
        marginLeft: '64px',
        textAlign: 'left'
    })

    const content = css({
        padding: '16px',
        width: 'calc(100% - 32px)',
        height: 'calc(100% - 140px)',
        background: '#444',
        borderRadius: '8px'
    })

    const xxx = css({
        float: 'left',
        width: '50%'
    })
    
    return (
        <div {...rule}>
            <div {...content} >
                the content
            </div>
            <h3 style={{ padding: '0 16px' }} >title</h3>
            <div style={{ padding: '0 16px' }} >
                <div {...xxx} >icon text</div>
                <div {...xxx} >icon text</div>
            </div>
        </div>
    )
}