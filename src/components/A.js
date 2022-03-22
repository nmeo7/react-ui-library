import React, { useContext, useState } from 'react'
import { css } from 'glamor'
import { Loading, UserContext } from '..'
import { Link } from 'react-router-dom'

export const aTheme = (theme) => css({
    textDecoration: 'underline',
    fontWeight: '700',
    color: theme.primaryColor, 
    '&:hover': {
        color: theme.primaryColorVariant, 
    }
})

export const A = (props) => {
    const { theme } =  useContext (UserContext)

    return<Link to={props.href} {...aTheme(theme) } style={{ display: 'inline-block' }} >{props.children}</Link>
}