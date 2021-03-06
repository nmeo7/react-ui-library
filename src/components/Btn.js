import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { css } from 'glamor'

import { Loading } from './Loading'
import { UserContext } from '../layouts/Context'

export const btnTheme = (theme) => css({
    '&.primary-button': {
      background: theme.primaryColor, 
      color: theme.primaryTextColor, 
      border: `2px solid ${theme.primaryColor}`
    },
    '&.primary-button:hover': {
        border: `2px solid ${theme.primaryColorDark}`,
        background: theme.primaryColorVariant,
        color: theme.primaryTextColorInverse
    },
    '&.secondary-button': {
      background: 'transparent', 
      color: theme.primaryTextColorInverse, 
      border: `2px solid transparent`
    },
    '&.secondary-button:hover': {
        border: `2px solid ${theme.primaryColorDark}`,
        background: 'transparent',
        color: theme.primaryTextColorInverse
    },
    '&.tertiary-button': {
      background: 'transparent',
      textDecoration: 'none',
      border: `none`,
      boxShadow: 'none',
      display: 'inline-block',
      padding: '0', 
    },
    '&.tertiary-button:hover': {
        background: 'transparent',
        color: theme.primaryColor
    }
})

const style = (disabled) => disabled ? css ({
    '& .button': {
        fontSize: '16px', 
        borderRadius: '1.5em', 
        border: 'none', 
        cursor: 'not-allowed', 
        padding: '1em', 
        margin: '0', 
        width: '100%', 
        background: '#eee',
        border: '2px solid #aaa',
        color: '#777'
    }
})
: css({
    '& .button': {
        padding: '1em', 
        margin: '0', 
        marginBottom: '4px',
        fontSize: '16px', 
        borderRadius: '1.5em', 
        border: 'none', 
        cursor: 'pointer',
        boxShadow: '0 2px 2px 1px #333',
        transitionDuration: '.1s'
    }, 
    '&:hover .button': {
        boxShadow: 'none',
        marginTop: '4px',
        marginBottom: '0'
    }
})

let history = null

// export const navigate = (link) => history && history (link)

export const Btn = (props) => {
    const { theme } =  useContext (UserContext)
    // history = useNavigate ()

    const f = () => {}

    let buttonType = 'primary-button'
    if (props.secondary) buttonType = 'secondary-button'
    if (props.tertiary) buttonType = 'tertiary-button'

    const [loading, setLoading] = useState (false)
    const [error, setError] = useState ()

    const linkStyle = css({
        display: 'inline-block',
        textAlign: 'center',
        textDecoration: 'none'
    })

    const theme1 = props.disabled ? css({}) : btnTheme(theme)
    
    return (
        <div style={{ position: 'relative' }} >
        { error && <div style={{ color: 'red', padding: '1em', position: 'absolute', bottom: '4em', background: '#eaa', width: 'calc(100% - 32px)', borderRadius: '8px' }} > <span>&#8226;</span> { error }</div> }
            <div onClick={ !props.disabled && !loading && (() => { setLoading (true); setError(null) }) } {...style(props.disabled)} style={{ width: props.width || '100%', padding: '0', display: props.tertiary ? 'inline-block' : 'block' }} >
            {
                props.link ?
                <Link to={props.disabled ? '' : props.link} { ...linkStyle } className={`${buttonType} button`} { ...theme1 } style={{ margin: props.tertiary && '0', padding: props.tertiary && '0', width: 'calc(100% - 2em)' }} >
                    {props.label}
                </Link>
                :
                <button onClick={ async () => { !props.disabled && await props.onSubmit().catch(e => {setError(e?.response?.data?.message || e?.message || 'Uncaught Error'); console.log (e) }); setLoading(false) } } className={`${buttonType} button`} { ...theme1 } style={{ width: '100%' }} >
                    { loading ? <Loading/> : props.label || 'Submit'}
                </button>
            }
            </div>
        </div>
    )
}