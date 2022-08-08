import React from 'react'

import { Table as AntTable } from 'antd'

export const Table = ({dataSource, columns, toStep = true, empty_icon, navigate}) => {
  return (
    (dataSource || []).length ? 
    <AntTable tableLayout="auto" size='large' dataSource={dataSource} columns={columns} scroll={{ y: 300 }} onRow={({id, current_step}, _) => ({onClick: _ => navigate(`/application/${id}/${toStep ? current_step : ''}`) })}/> :
    <div className='fill-height grid'>
        <p style={{ textAlign: 'center' }} ><img src={empty_icon} width='140px' /><br/>No applications to show!</p>
    </div>
  )
}
