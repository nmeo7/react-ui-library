import React from 'react'

import { Breadcrumb as AntBreadcrumb } from "antd"
import { Link } from "react-router-dom"
import { HomeOutlined, UserOutlined } from '@ant-design/icons'

export const home = <AntBreadcrumb.Item>
    <Link to='/'><HomeOutlined /></Link>
</AntBreadcrumb.Item>

export const item = (title, link, icon) => <AntBreadcrumb.Item>
        {icon}
    { link ? <Link to={link}>
        <span>{title}</span>
    </Link> : title }
</AntBreadcrumb.Item>

export const application = item('Applications List', 'application', <UserOutlined />)

export const Breadcrumb = ({items}) => <AntBreadcrumb>{ items.map(i => <>{i}</>) }</AntBreadcrumb>