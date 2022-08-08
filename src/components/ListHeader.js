import React from 'react'
import { css } from 'glamor'

export const listTheme = css({
    borderRadius: '32px 32px 0 0',
    padding: '24px',
    width: 'calc(100% - 48px)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    cursor: 'default',
    margin: '16px 0',
    borderBottom: `1px solid black`,
    color: 'black',
    background: 'white'
})

const w = (principal, small) => css({
    display: small && !principal && 'none',
    '@media(max-width: 720px)': {
        display: principal ? '' : 'none'
    }
})

export const ListHeader = (props) => {
    const columnsFlex = props.columnsFlex || (new Array(props.columns.length || 1)).fill(1)
    const columnsWidths = props.columnsWidths || (new Array(props.columns.length || 1)).fill(null)
    
    return (
        <div { ...listTheme } >
            { props.columns.map (
                (x, index) => <div {...w(index == (props.principal || 1), props.small)} style={ columnsWidths[index] ? { width: columnsWidths[index] } : { flex: columnsFlex[index] }} key={index} >{x}</div>
            )}
        </div>
    )
}