import React from 'react'

import { Table as AntTable } from 'antd'

export const Table = ({dataSource, columns, toStep = true, empty_icon, navigate, prefix = 'application/', suffix = () => ''}) => {
  return (
    (dataSource || []).length ? 
    <AntTable tableLayout="auto" size='large' dataSource={dataSource} columns={columns} scroll={{ y: 300 }} onRow={({id, ...row}, _) => ({onClick: _ => navigate(`/${prefix}${id}${suffix(row)}`) })}/> :
    <div className='fill-height grid'>
        <p style={{ textAlign: 'center' }} ><img src={empty_icon} width='140px' /><br/>No applications to show!</p>
    </div>
  )
}
