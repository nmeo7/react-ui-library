import React from 'react'
import { css } from 'glamor'
import { ListItem } from './ListItem'
import { ListHeader } from './ListHeader'

export const ListLayout = (props) => {

    // make css rules
    let rule = css({
        borderRadius: '32px',
        cursor: 'pointer',
        color: 'red',
        ':hover': {
          boxShadow: '0px 1px 4px #ccc'
        }
      })
    
    return (
    <div>

              <div  style={{ marginTop: '64px' }} ></div>

              <ListHeader columns={ props.headers } columnsWidths = { props.columnsWidths } />
              <div  style={{ marginBottom: '32px' }} ></div>
              { props.items.map ( item => <ListItem {...rule} columns={ item } columnsWidths = { props.columnsWidths } /> ) }
              

              <div  style={{ marginBottom: '64px' }} ></div>

            </div>
    )
}