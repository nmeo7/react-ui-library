import React, { useContext, useState } from 'react'
import { css } from 'glamor'
import { Loading, UserContext } from '..'
import { Link, useNavigate } from 'react-router-dom'

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
})
: css({
    padding: '1em', 
    margin: '0', 
    marginBottom: '4px', 
    width: '100%', 
    fontSize: '16px', 
    borderRadius: '1.5em', 
    border: 'none', 
    cursor: 'pointer',
    boxShadow: '0 2px 2px 1px #333',
    transitionDuration: '.2s', 
    '&:hover': {
        boxShadow: 'none',
        marginTop: '4px',
        marginBottom: '0'
    }
})

let history = null

export const navigate = (link) => history && history (link)

export const Btn = (props) => {
    const { theme } =  useContext (UserContext)
    history = useNavigate ()

    const f = () => {}

    let buttonType = 'primary-button'
    if (props.secondary) buttonType = 'secondary-button'
    if (props.tertiary) buttonType = 'tertiary-button'

    const [loading, setLoading] = useState (false)

    const linkStyle = css({
        display: 'inline-block',
        textAlign: 'center',
        textDecoration: 'none'
    })

    const theme1 = props.disabled ? css({}) : btnTheme(theme)
    
    return (
        <div onClick={ props.disabled ? null : () => { setLoading (true) } } style={{ width: props.width || '100%', padding: '0', paddingTop: props.tertiary ? '0' : '1em', display: props.tertiary ? 'inline-block' : 'block' }} >
        {
            props.link ?
            <Link to={props.disabled ? '' : props.link} {...style(props.disabled)} { ...linkStyle } className={buttonType} { ...theme1 } style={{ margin: props.tertiary && '0', padding: props.tertiary && '0' }} >
                {props.label}
            </Link>
            :
            <button onClick={ props.onSubmit || f() } {...style(props.disabled)} className={buttonType} { ...theme1 } >
                { loading ? <Loading/> : props.label || 'Login'}
            </button>
        }
        </div>
    )
}

export const DropdownButton = (props) => {
    const { theme } =  useContext (UserContext)

    const f = () => {}

    let buttonType = 'primary-button'
    if (props.secondary) buttonType = 'secondary-button'

    const [loading, setLoading] = useState (false)

    const style1 = css({
        padding: '1em',
        borderRadius: '1.5em 0 0 1.5em !important',
        border: 'none',
        flex: '1',
        '&:hover': {
            boxShadow: 'none',
            margin: '0', 
            marginBottom: '4px', 
        }
    })

    const style2 = css({
        padding: '1em 0',
        borderRadius: '0 1.5em 1.5em 0 !important',
        border: 'none',
        flex: '1', '&:hover': {
            boxShadow: 'none',
            margin: '0', 
            marginBottom: '4px', 
        }
    })

    const style3 = css({
        borderRadius: '1.5em',
        border: 'none', '&:hover': {
            boxShadow: 'none'
        }
    })

    // buttonType = buttonType
    const theme1 = props.disabled ? css({}) : btnTheme(theme)
    
    return (
        <div onClick={ () => { setLoading (true) } } style={{ width: props.width || '100%', padding: '0', display: 'flex' }} {...style3} >
            <button onClick={ props.onSubmit || f() } {...style(false)} {...style1} className={buttonType} { ...theme1 } >
                { loading ? <Loading/> : props.label || 'Login'}
            </button>
            <button style={{ borderLeft: '3px solid black' }} {...style(false)} {...style2} className={buttonType} { ...theme1 } > v  </button>
        </div>
    )
}