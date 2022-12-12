import React from 'react'
import { Breadcrumb as AntBreadcrumb } from "antd"

export const Breadcrumb = ({items, navigate}) => (
	<AntBreadcrumb>
		{items.map(i => 
            <AntBreadcrumb.Item onClick={() => navigate(i[1])} style={{ cursor: i[1] && 'pointer' }} >
                {i[2]}&nbsp;&nbsp;{i[0]}
            </AntBreadcrumb.Item>
        )}
	</AntBreadcrumb>
)