import { Cascader, DatePicker, Form, Input } from 'antd'
import moment from 'moment'
import React from 'react'

const { RangePicker } = DatePicker

export const InputRange = props => {
  return (
    <Form.Item label={props.label} labelCol={{ span: '6' }} >
        <RangePicker
            size="large"
            label={props.label}
          onChange={ (_, i) => props.onChange(`${i[0]} - ${i[1]}`) }
          value={ (('' + props.value) || '2023 - 2024' ).split(' - ')?.map(i => moment(i)) } />
    </Form.Item>
  )
}
