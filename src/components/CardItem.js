import React from 'react'
import { css } from 'glamor'


export const CardItem = (props) => {

    // make css rules
    let rule = css({
        borderRadius: '32px',
        background: '#eee',
        margin: '16px',
        aspectRatio: '7/8',
        width: props.width || '400px',
        position: 'relative',
        marginTop: '64px',
        marginLeft: '64px',
        boxShadow: '1px 2px 8px #ccc',
      color: 'red',
      ':hover': {
        color: 'pink'
      },
      '@media(min-width: 300px)': {
        color: 'green',
        ':hover': {
          color: 'yellow'
        }
      }
    })

    const titleContainer = css({
        position: 'absolute',
        top: '-24px',
        width: '100%',
    })
    
    let titleRule = css({
        padding: '8px 32px',
        borderRadius: '32px',
        fontSize: '1.6em',
        margin: 'auto',
        width: 'fit-content',
        background: '#333',
        boxShadow: '1px 1px 6px #333',
    })
    
    let number = css ({
        position: 'absolute',
        top: '-32px',
        left: '-32px',
        background: '#aaa',
        fontSize: '2em',
        padding: '16px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        boxShadow: '1px 2px 6px #333',
    })

    let optionsContainer = css ({
        position: 'absolute',
        top: '64px',
    })

    let options = css({
        margin: '16px',
        background: '#777',
        borderRadius: '50%',
        width: '24px',
        height: '24px'
    })

    const content = css({
        padding: '16px',
        paddingTop: '48px',
        width: 'calc(100% - 32px)',
        height: 'calc(100% - 64px)'
    })
    
    return (
        <div {...rule}>
            <div { ...titleContainer } >
                <div { ...titleRule } >title</div>
            </div>
            <div {...number} >
                0
            </div>
            <div {... optionsContainer} >
                <div {...options} ></div>
                <div {...options} ></div>
                <div {...options} ></div>
            </div>

            <div {...content} >
                the content
            </div>
        </div>
    )
}