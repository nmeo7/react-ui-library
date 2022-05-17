import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { css } from 'glamor'

export let addPopupMessage

export const PopupHolder = (props) => {
    const [messages, setMessages] = useState([])

    addPopupMessage = (m) => {
        setMessages([...messages, m])
    }

    useEffect(() => {
        setTimeout(() => typeof (messages.shift() != 'undefined') && setMessages(messages), 4000)
    }, [messages])

    return messages?.length ? <div style={{ position: 'fixed', right: '72px', bottom: '32px' }}>
        {
            (messages || []).map (m => <div data-aos="fade-down" style={{ background: '#efe', color: '#282', margin: '16px', padding: '16px', borderRadius: '8px', width: '240px', minHeight: '48px' }}>
                { m }
            </div>)
        }
    </div> : <div></div>
}