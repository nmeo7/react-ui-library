import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { css } from 'glamor'

import { UserContext } from '../layouts/Context'

export const aTheme = (theme) => css({
    textDecoration: 'underline',
    fontWeight: '700',
    color: theme.primaryColor, 
    display: 'inline-block',
    '&:hover': {
        color: theme.primaryColorVariant, 
    }
})

export const A = (props) => {
    const { theme } =  useContext (UserContext)
    return <Link to={props.href} {...aTheme(theme)}> {props.children} </Link>
}