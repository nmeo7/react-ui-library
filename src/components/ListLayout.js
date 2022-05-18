import React from 'react'
import { css } from 'glamor'

import { ListItem } from './ListItem'
import { ListHeader } from './ListHeader'

const style = css({
  borderRadius: '32px',
  cursor: 'pointer',
  color: 'red',
  ':hover': {
    boxShadow: '0px 1px 4px #ccc'
  }
})

export const ListLayout = (props) => (
<div>
  { !props.no_header && (<div style={{ marginTop: '64px', marginBottom: '32px' }} >
  <ListHeader columns={ props.headers } columnsWidths = { props.columnsWidths } principal={props.principal} small={props.small} />
  </div>)}
  
  { props.items.map ( (item, index) => <ListItem order={ index } {...style} columns={ item } columnsWidths = { props.columnsWidths } principal={props.principal} small={props.small} /> ) }
  <div style={{ marginBottom: '64px' }} ></div>
</div>
)