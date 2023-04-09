import { Cascader, DatePicker, Form, Input } from 'antd'
import moment from 'moment'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'

import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
const dateFormat = 'DD/MM/YYYY'

const { RangePicker } = DatePicker

export const InputRange = (props) => {
  return (
    <Form.Item label={props.label} labelCol={{ span: '6' }}>
      <RangePicker
        size='large'
        label={props.label}
        onChange={(_, i) => props.onChange(`${i[0]} - ${i[1]}`)}
        value={(props.value || '2024 - 2027')
          .split(' - ')
          ?.map((i) => dayjs(i))}
      />
    </Form.Item>
  )
}
