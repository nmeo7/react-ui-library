import React, { useContext } from 'react'
import { css } from 'glamor'
import { UserContext } from '../layouts/Context'
import { Link } from 'react-router-dom'

const rule = (theme) => css({
    borderRadius: '32px',
    padding: '1.6em',
    width: 'calc(100% - 3.2em)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    color: 'black',
    fontSize: '1em',
    transitionDuration: '.1s',
  ':hover': {
      boxShadow: `0px 8px 24px ${theme.primaryColorLight}`,
      // padding: '1.25em 1em',
      // width: 'calc(100% - 2em)',
      // fontSize: '1.2em',
      fontWeight: '900',
      color: theme.primaryColorDark,
      background: 'white'
  }
})

const cellStyle = (principal, small) => css({
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    display: small && !principal && 'none',
    '@media(max-width: 720px)': {
        display: principal ? '' : 'none'
    }
})

export const ListItem = (props) => {
    const { theme } =  useContext (UserContext)

    const columns = [...props.columns]
    const link = columns.pop()

    const columnsFlex = props.columnsFlex || (new Array(columns.length || 1)).fill(1)
    const columnsWidths = props.columnsWidths || (new Array(columns.length || 1)).fill(null)
    
    return (
        <Link to={link} style={{ textDecoration: 'none' }} >
            <div {...rule(theme)}  >
                { columns.map ((x, index) => <div {...cellStyle(index == (props.principal || 1), props.small)} style={ columnsWidths[index] ? { width: columnsWidths[index] } : { flex: columnsFlex[index] }} key={index} >{x}</div>) }
                {/* <div className='showOnHover' style={{ position: 'absolute', right: '32px' }} >
                    <Btn tertiary label='delete' />
                </div> */}
            </div>
        </Link>
    )
}