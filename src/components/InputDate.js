import { Cascader, DatePicker, Form, Input } from 'antd'
import moment from 'moment'
import React from 'react'

const { RangePicker } = DatePicker

export const InputDate = (props) => {
  return (
    <Form.Item label={props.label} labelCol={{ span: '6' }}>
      <DatePicker
        size='large'
        label={props.label}
        onChange={(_, value) =>
          props.name
            ? props.handleChange({ name: props.name, value })
            : props.onChange(value)
        }
        value={moment(props.value || '')}
      />
    </Form.Item>
  )
}
