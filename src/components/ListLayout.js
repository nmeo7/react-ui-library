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

              <ListHeader columns={ [ 'Application Number', 'Application Date', 'Loan Type', 'Status' ] } columnsWidths = { [ '140px', null, null, null ] } />
              <ListItem {...rule} columns={ [ '#342', '05-Feb-2022', 'Car Loan', 'Submitted' ] } columnsWidths = { [ '140px', null, null, null ] } />
              <ListItem {...rule} columns={ [ '#342', '05-Feb-2022', 'Car Loan', 'Submitted' ] } columnsWidths = { [ '140px', null, null, null ] } />
              <ListItem {...rule} columns={ [ '#342', '05-Feb-2022', 'Car Loan', 'Submitted' ] } columnsWidths = { [ '140px', null, null, null ] } />
              <ListItem {...rule} columns={ [ '#342', '05-Feb-2022', 'Car Loan', 'Submitted' ] } columnsWidths = { [ '140px', null, null, null ] } />
            </div>
    )
}