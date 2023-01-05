import React from 'react'
import { css } from 'glamor'


export const backgroundTheme = (theme) => css({
  background: theme?.backgroundColor || '#fffdf9',
  borderBottom: `${theme?.primaryColorLight} 1px solid`,
  borderBottom: '1px solid #f0fbff'
})

const wrapper = css({
    position: 'fixed', width: 'calc(100% - 192px)', width: '100%', zIndex: '1', top: '0', padding: '20px 0', left: '0',
    '@media(max-width: 720px)': {
        width: 'calc(100% - 80px)',
        width: '100%',
        padding: '20px 40px',
        position: 'relative',
        '& .hide-on-phone':
        {
            display: 'none'
        }
    }
})

export const DashboardHeader = (props) => {
    const { theme } = {} // useContext (UserContext)
    const { stickingHeader, title, quickAction, displayName, breadcrumb, subtitle, logo } = props.headerOptions

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
        fontSize: '2em !important',
        paddingBottom: '1em !important',
        paddingTop: '0.4em !important'
    }) : css ({

    })

    const sticking = props.scrolled && stickingHeader ? css({
        display: 'block',
        bottom: 'calc(100vh - 121px)',
        height: '64px',
        zIndex: '1000',
        width: '100%'
    }) : css({ display: 'none' })


    const headerStyles2 = css({
        maxWidth: '1440px', margin: 'auto', display: 'flex', flexDirection: 'left', padding: '0 64px',
        '& > div': {
            width: '240px', position: 'relative'
        },
        '@media(max-width: 720px)': {
            padding: '0',
            '& h1': {
                fontSize: '2em'
            },
            '& > div': {
                width: 'auto', position: 'relative'
            }
        },
    })

    const stickingButton = props.scrolled && stickingHeader ? css({ margin: '0', marginBottom: '64px' }) : css({ margin: '32px 0' })

    const hours = new Date().getHours()
    
    return (
        <div  >
            <div { ...styles } { ...styles2 } { ...wrapper } {...backgroundTheme(theme || null) } style={{ height: '164px', overflow: 'hidden',zIndex: '1000', opacity: '.989' }} >
                <div {...headerStyles2} >
                    <div>
                        { logo || <div>
                            <img alt='logo' />
                        </div> }
                    </div>
                    <div style={{ flex: '1' }} >
                        <div>
                            { breadcrumb || <div>Home</div>  }
                        </div>
                        <h1 {...titleStyle} style={{ transitionDuration: '.1s' }} > { title ? title : `Good ${(hours > 18 && 'Evening') || (hours > 12 && 'Afternoon') || 'Morning' }, ${displayName}!` }</h1>
                        <i className='hide-on-scroll hide-on-phone' >{ subtitle }</i>
                    </div>
                    <div style={{ paddingLeft: '16px', transitionDuration: '.2s', width: 'fit-content' }} {...stickingButton} className='hide-on-phone' >
                        
                    {quickAction}
                    </div>
                </div>
            </div>
            { stickingHeader ? <div {...sticking} style={{ position: 'fixed' }}  >
                <div style={{ display: 'flex', maxWidth: '1440px', width: '100%', margin: 'auto', padding: '8px 64px' }} > 
                <div style={{ width: '240px' }} ></div> <div style={{ flexGrow: '1' }} >{stickingHeader}</div> 
                </div>
            </div> : <div></div> }
            <div style={{ height: '210px' }} ></div>
        </div>
    )
}