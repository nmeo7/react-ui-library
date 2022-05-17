import React, { useContext } from 'react'
import { css } from 'glamor'
import { UserContext } from '../layouts/Context'

export const backgroundTheme = (theme) => css({
  background: theme.backgroundColor || '#fffdf9',
  borderBottom: `${theme.primaryColorLight} 1px solid`
})

const wrapper = css({
    display: 'flex', flexDirection: 'left', position: 'fixed', width: 'calc(100% - 192px)', zIndex: '1', top: '0', padding: '20px 96px',
    '@media(max-width: 720px)': {
        width: 'calc(100% - 80px)',
        padding: '20px 40px',
        position: 'relative',
        '& .hide-on-phone':
        {
            display: 'none'
        }
    }
})

export const Header = (props) => {
    const { theme } =  useContext (UserContext)

    const { stickingHeader, logo, title, quickAction, displayName, breadcrumb, subtitle } = props.headerOptions

    const styles = props.scrolled && stickingHeader ? css({
      '& .hide-on-scroll': {
          visibility: 'hidden'
      }
    }) : css({
        '& .show-on-scroll': {
            visibility: 'hidden'
        }
    })

    const styles2 = props.scrolled ? css({
      boxShadow: '0px 1px 4px #985a0a'
    }) : css({
        // boxShadow: '0px 1px 4px #985a0a'
    })

    const titleStyle = props.scrolled && stickingHeader ? css({
        fontSize: '1.5em !important',
        paddingBottom: '1.67em !important',
        paddingTop: '0.25em'
    }) : css ({

    })

    const sticking = props.scrolled && stickingHeader ? css({
        display: 'block',
        position: 'fixed',
        bottom: 'calc(100vh - 154px)',
        height: '64px',
        left: 'calc(280px + 100px)',
        right: '100px',
        zIndex: '9999999'
    }) : css({})

    const stickingButton = props.scrolled && stickingHeader ? css({ margin: '0' }) : css({ margin: '32px 0' })
    
    return (
        <div  >
            <div { ...styles } { ...styles2 }  { ...wrapper } {...backgroundTheme(theme) } style={{ height: '121px', overflow: 'hidden' }} >
                <div style={{ width: '280px', position: 'relative', left: '-32px' }} >
                    { logo }
                </div>
                <div style={{ flex: '1' }} >
                    <div><a>Home</a> &gt; </div>
                    <h1 {...titleStyle} style={{ transitionDuration: '.1s' }} > { title ? title : `Good ${new Date().getHours() > 12 ? 'Afternoon' : 'Morning' }, ${displayName}!` }</h1>
                    <i className='hide-on-scroll hide-on-phone' >This is your one stop to easily access the funds you need</i>
                </div>
                <div style={{ width: '140px', paddingLeft: '16px', transitionDuration: '.2s' }} {...stickingButton} className='hide-on-phone' >
                    {/* <DropdownButton onSubmit={props.quickAction} label='Apply!' /> */}
                    {/* <Btn tertiary onSubmit={props.quickAction} label='Apply!' /> */}
                    {quickAction}
                </div>
            </div>
            { stickingHeader ? <div {...sticking} > {stickingHeader} </div> : <div></div> }
        </div>
    )
}