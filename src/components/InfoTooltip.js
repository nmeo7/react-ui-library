import { Tooltip } from 'antd'
import React from 'react'

export const InfoTooltip = props => {
  return (
    <Tooltip placement="topLeft" title={props.children} arrowPointAtCenter color={props.color} >
      { props.icon }
    </Tooltip>
  )
}
