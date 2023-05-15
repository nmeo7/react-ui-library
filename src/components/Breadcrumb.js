import React from 'react'
import { Breadcrumb as AntBreadcrumb } from 'antd'

export const Breadcrumb = ({ items, last, navigate }) => {
  return (
    <AntBreadcrumb>
      {items.map((i) => (
        <AntBreadcrumb.Item
          onClick={() => i[2] && navigate(i[2])}
          style={{ cursor: i[2] && 'pointer' }}
        >
          {i[0]}&nbsp;&nbsp;{i[1]}
        </AntBreadcrumb.Item>
      ))}
    </AntBreadcrumb>
  )
}
