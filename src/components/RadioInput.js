/*
must be cool with an illustration, preferably a gif all the way.
*/

import React, { useContext } from 'react'
import { css } from 'glamor'
import { UserContext } from '..'

export const RadioInput = (props) => {

    const { theme } =  useContext (UserContext)

    const radioRule = css({
        // border: '2px solid transparent',
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
            display: 'none'
        },
        
        'input:hover ~ &': {
            boxShadow: `0px 2px 4px ${theme.primaryColor}`,

            '& .checkbox': 
            {
                display: 'block', background: theme.primaryColorLight
            }
        },
        
        'input:checked ~ &': {
            border: `${theme.primaryColor} 2px solid`,
            fontWeight: '900', 
            background: '#F9F1DC',
            boxShadow: `0px 4px 8px ${theme.primaryColor}`,

            '& .checkbox': 
            {
                display: 'block', background: theme.primaryColor
            }
        },
        
        'input ~ & p': {
            display: 'none'
        },
        
        'input:hover ~ & p': {
            display: 'block'
        }
    })
    
    return (
        
		<div>
        <input style={{ display: 'none' }} type="radio" name={props.name} id={props.id} />
        <label {...radioRule} for={props.id} onClick={props.onClick} style={{ height: props.height || '64px' }} >
            <div style={{ position: 'absolute', width: '20px', height: '20px', top: '8px', right: '8px', borderRadius: '50%' }} className="checkbox" > </div>
            <span>
                { props.label || 'dummy'}
            </span>
            <p style={{ paddingTop: '40px', fontSize: '12px' }} >This category can give you options for xx. learn more</p>
        </label>
    </div>
    )
}