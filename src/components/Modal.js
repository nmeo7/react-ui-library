import { Form, Modal, Input } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { actions } from '../middleware/api'
import { useManageSubmission } from '../services/hooks'
import Form1 from './form/Form1'

const { TextArea } = Input

export const Modal1 = props => {
    const [content, setContent] = useState()
    const navigate = useNavigate()
    const manageSubmission = useManageSubmission(() => navigate('/application'))

  return (
    <Modal
      title={props.title}
      visible={ props.visible || props.modal == props.action }
      setVisible={() => props.setVisible(true)}
      onOk={ props.onOk || (() => manageSubmission.mutate({...props.data, content, action: actions[props.action]})) }
      onCancel={props.hide}
      confirmLoading={props.confirmLoading || manageSubmission.isLoading}
      centered
      {...props}>
      <Form1 vertical>
        {
          props.children || 
          <Form.Item label='Optional Comment:'>
              <TextArea placeholder="Please provide a comment" rows={8} onChange={ e => setContent(e.target.value) } />
          </Form.Item>
        }
      </Form1>
    </Modal>
  )
}
