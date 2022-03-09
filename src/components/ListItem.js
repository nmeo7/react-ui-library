import React, { useContext } from 'react'
import { css } from 'glamor'
import { UserContext } from '..'

/*
    Only show options when hovered
*/
export const ListItem = (props) => {

    const { theme } =  useContext (UserContext)

    let rule = css({
        borderRadius: '32px',
        padding: '1.6em',
        width: 'calc(100% - 48px)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        color: 'black',
        fontSize: '1em',
        transitionDuration: '.1s',
      ':hover': {
          boxShadow: `0px 2px 4px ${theme.primaryColor}`,
          padding: '1.25em 1em',
          fontSize: '1.2em',
          fontWeight: '900',
          color: theme.primaryColorDark
      }
    })

    const columnsFlex = props.columnsFlex || (new Array(props.columns.length || 1)).fill(1)
    const columnsWidths = props.columnsWidths || (new Array(props.columns.length || 1)).fill(null)
    
    return (
        <div {...rule}>
            {
                props.columns.map ((x, index) => {
                    return (<div style={ columnsWidths[index] ? { width: columnsWidths[index] } : { flex: columnsFlex[index] }} key={index} >{x}</div>)
                })
            }
        </div>
    )
}