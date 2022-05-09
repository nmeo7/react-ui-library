import { css } from "glamor"
import React, { useContext } from 'react'
import { UserContext } from '../layouts/Context'

const style = (theme) => css({
    padding: '16px 0',
    cursor: 'pointer',
    display: 'flex',
    borderRadius: '32px',
    transitionDuration: '.1s',
    marginBottom: '32px',
  ':hover': {
      boxShadow: `0px 8px 24px ${theme.primaryColorLight}`,
      background: 'white',
      paddingLeft: '8px'
  }
})

export const Notification = (props) => {
    
    const { theme } =  useContext (UserContext)
    return <div {...style(theme)} onClick={ props.onClick } style={{ background: !props.read && theme.primaryColorVariant }} >
                { props.children }
            </div>
}