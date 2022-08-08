import React from 'react'
import { css } from 'glamor'

import checkMark from 'assets/checkmark.png'

const radioRule = (theme) => css({
    display: 'grid',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '0',
    padding: '32px',
    borderRadius: '16px',
    position: 'relative',
    transitionDuration: '.1s',
    boxShadow: `0px 2px 8px ${theme?.primaryColorLight}`,
    height: '180px',

    '& .checkbox': 
    {
        display: 'block', background: 'transparent', border: `2px solid ${theme?.primaryColorLight}`
    },

    '& img': {
        opacity: '.0'
    },
    
    'input:hover ~ &': {
        border: `2px solid ${theme?.primaryColorLight}`,
        border: `none`,
        borderBottom: `2px solid ${theme?.primaryColor}`,

        '& .checkbox': 
        {
            display: 'block', background: theme?.primaryColorLight
        },

        '& img': {
            opacity: '.5'
        }
    },
    
    'input:checked ~ &': {
        border: `${theme?.primaryColorLight} 2px solid`,
        border: `none`,
        borderBottom: `4px solid ${theme?.primaryColor}`,
        fontWeight: '900', 
        background: '#F9F1DC',
        boxShadow: `0px 4px 8px ${theme?.primaryColor}`,

        '& .checkbox': 
        {
            display: 'block', background: theme?.primaryColor, border: `1px solid ${theme?.primaryColor}`
        },

        '& img': {
            opacity: '1'
        }
    },
    
    'input ~ & p': {
        display: 'none'
    },
    
    'input:hover ~ & .learnMore': {
        display: 'block', fontSize: '12px', color: '#777', position: 'absolute', bottom: '0', padding: '0 16px'
    }
})

export const RadioButton = (props) => {
    const { theme } = {} // useContext ({})
    
    return (
        <div>
            <input disabled={props.disabled} style={{ display: 'none' }} type="radio" name={props.name} id={props.id} checked={props.checked} />
            <label {...radioRule(theme || null)} for={props.id} onClick={props.disabled || props.onClick} style={{ height: props.height || '120px', cursor: props.disabled ? 'not-allowed' : '', background: props.disabled ? '#efefef' : '' }} >
                <div style={{ position: 'absolute', width: '32px', height: '32px', top: '8px', right: '6px', borderRadius: '50%', display: props.disabled ? 'none' : '' }}  >
                    <img src={checkMark} alt='check' width='20px' />
                </div>
                <span> { props.label || 'dummy'} </span>
                { <p className='learnMore' >{ props.learnMore }</p> }
            </label>
        </div>
    )
}