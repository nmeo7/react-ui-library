import React, { useContext } from 'react'
import { css } from 'glamor'

import { UserContext } from '../layouts/Context'

import img from 'assets/checkmark.png'

const radioRule = (theme) => css({
    display: 'grid',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '0',
    padding: '32px',
    borderRadius: '16px',
    position: 'relative',
    border: `2px solid ${theme.primaryColorLight}`,
    transitionDuration: '.1s',

    '& .checkbox': 
    {
        display: 'block', background: 'transparent', border: `2px solid ${theme.primaryColorLight}`
    },

    '& img': {
        opacity: '.0'
    },
    
    'input:hover ~ &': {
        boxShadow: `0px 2px 4px ${theme.primaryColor}`,
        border: `none`,
        borderBottom: `4px solid ${theme.primaryColor}`,

        '& .checkbox': 
        {
            display: 'block', background: theme.primaryColorLight
        },

        '& img': {
            opacity: '.5'
        }
    },
    
    'input:checked ~ &': {
        border: `${theme.primaryColorLight} 2px solid`,
        border: `none`,
        borderBottom: `4px solid ${theme.primaryColor}`,
        fontWeight: '900', 
        background: '#F9F1DC',
        boxShadow: `0px 4px 8px ${theme.primaryColor}`,

        '& .checkbox': 
        {
            display: 'block', background: theme.primaryColor, border: `1px solid ${theme.primaryColor}`
        },

        '& img': {
            opacity: '1'
        }
    },
    
    'input ~ & p': {
        display: 'none'
    },
    
    'input:hover ~ & .learnMore': {
        display: 'block'
    }
})

export const RadioInput = (props) => {
    const { theme } =  useContext (UserContext)
    
    return (
        <div>
            <input style={{ display: 'none' }} type="radio" name={props.name} id={props.id} checked={props.checked} />
            <label {...radioRule(theme)} for={props.id} onClick={props.onClick} style={{ height: props.height || '64px' }} >
                <div style={{ position: 'absolute', width: '20px', height: '20px', top: '8px', right: '6px', borderRadius: '50%' }}  >
                    <img src={img} alt='check' width='100%' />
                </div>
                <span> { props.label || 'dummy'} </span>
                { props.learnMore && <p className='learnMore' >{ props.learnMore }</p> }
            </label>
        </div>
    )
}