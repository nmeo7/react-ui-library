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
  <div style={{ marginTop: '64px' }} ></div>
  <ListHeader columns={ props.headers } columnsWidths = { props.columnsWidths } />
  <div style={{ marginBottom: '32px' }} ></div>
  
  { props.items.map ( item => <ListItem {...style} columns={ item } columnsWidths = { props.columnsWidths } /> ) }
  <div style={{ marginBottom: '64px' }} ></div>
</div>
)