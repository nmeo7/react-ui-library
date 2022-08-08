import React from 'react'
import { Link } from 'react-router-dom'

export const InputFile = ({v, application, files, uploadDocument, setApplication}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '32px' }} >
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eee' }} >

        </div>
        <div style={{ flex: '1', padding: '8px 32px' }} >
            <p style={{ fontWeight: 'bold' }} >{v}</p>
            <p style={{ fontSize: '.8em' }}>what is this file</p>
        </div>
        <div style={{ width: 'auto', height: '48px', padding: '0 16px' }} className='hideOnHover' >
            { files[v] ? <p style={{ color: 'rgb(17, 166, 4)' }} >present</p> : <p style={{ color: '#ccc' }} >missing</p> }
            {/* { files[v] ? <p style={{ color: '#eed202' }} >auto-detected</p> : <p style={{ color: '#ccc' }} >missing</p> } */}
        </div>
        { files[v] && 
            <div style={{ width: 'auto', height: '48px', padding: '0 16px' }} className='showOnHover' >
                <Link to={`/preview-document/${application}/${v}`} >open</Link>
            </div>
        }
        <div style={{ width: 'auto', height: '48px', padding: '0 16px', cursor: 'pointer' }} className='showOnHover'  >
            <label for={v} style={{ cursor: 'pointer' }} >Upload</label>
            <input type='file' id={v} style={{ display: 'none' }} onChange={ event => uploadDocument({application: application, event: event.target.files[0], v}).then ( resp => setApplication(resp.data) ) } />
        </div>
    </div>
  )
}
