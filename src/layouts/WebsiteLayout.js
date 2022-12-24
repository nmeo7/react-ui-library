import React from 'react'
import { css } from 'glamor'
// import AOS from 'aos'

const bar1 = css({ 
  position: 'absolute', height: '5px', right: '32px', top: '32px', width: '36px', backgroundColor: 'black', display: 'block', borderRadius: '5px', transition: '0.3s ease', 
  '.change &': { transform: 'translateY(13px) rotateZ(-45deg)' } ,
  '@media(min-width: 720px)': { display: 'none' }
})

const bar2 = css({ 
  position: 'absolute', height: '5px', right: '32px', top: '58px', width: '36px', backgroundColor: 'black', display: 'block', borderRadius: '5px', transition: '0.3s ease', overflow: 'hidden',
  '.change &': { 
    transform: 'translateY(37px)',
    height: 'calc(100vh - 96px)',
    width: '100%',
    right: '0', 
    backgroundColor: 'white', 
    borderRadius: '0'
  },
  '@media(min-width: 720px)': {
    top: '0', height: '96px', right: '0', width: 'auto', borderRadius: '0', background: 'transparent'
  }
})

const bar3 = css({ 
  position: 'absolute', height: '5px', right: '32px', top: '45px', width: '36px', backgroundColor: 'black', display: 'block', borderRadius: '5px', transition: '0.3s ease', 
  '.change &': { transform: 'translateY(0px) rotateZ(45deg)' },
  '@media(min-width: 720px)': { display: 'none' }
})

const listStyle = css({
  listStyle: 'none',
  padding: '12px 0',
  transform: 'translateY(-20px)',
  transition: '.1s ease',
  opacity: '0',
  '@media(min-width: 720px)': {
    opacity: '1', float: 'left', margin: '46px 20px'
  },
  '.change &': {
    transform: 'translateY(0)',
    opacity: '1',
    '&:hover a': {
      background: 'black'
    }
  },
  '& a': {
    padding: '12px 0'
  }
})

const menuBar = css({
  zIndex: '99999', width: '36px', height: '32px', cursor: 'pointer', background: '#fff0', position: 'fixed', top: '32px', right: '32px',
  '@media(min-width: 720px)': { display: 'none' }
})

const transitionDelays = [ '.2s', '.3s', '.4s', '.45s', '.5s', '.54s', '.58s', '.62s', '.65s', '.68s' ]

export const WebsiteLayout = ({menuItems, logo, children, opened, setOpened}) => {
//   const [opened, setOpened] = useState(false)
  
  const menus = menuItems || [
    { label: 'Home', link: 'home' },
    { label: 'About', link: 'about' },
    { label: 'Contact', link: 'contact' },
    { label: 'Blog', link: 'blog' },
  ]
  
//   useEffect(() => {
//     AOS.init({ duration : 800 })
//   }, [])
  
  return (
      <div className={opened ? 'change' : ''} style={{ maxWidth: '1440px', margin: 'auto' }} >

        <div style={{ position: 'relative' }} >
          <div style={{ zIndex: '99999', position: 'fixed', top: '0', left: '0', right: '0', height: '156px', boxShadow: '#ebcf8a 16px 4px 32px', backgroundColor: '#F9F1DCaa' }}></div>
          <div style={{ zIndex: '99999', position: 'fixed', top: '0', maxWidth: '1440px', width: '100%', height: '96px', padding: '16px' }}>
            <a href=''>
              {logo || ''}
            </a>
              <div {...bar1} id="bar1" className="bar" style={{  }} ></div>
              <div {...bar2} id="bar2" className="bar" style={{  }} >
                  <ul style={{ padding: '24px 22px', transition: '0.3s ease' }} >
                    { menus.map((menu, i) => <li key={menu.label} {...listStyle} style={{ transitionDelay: transitionDelays[i] }} ><a href={ menu.link }>{ menu.label }</a></li> )}
                  </ul>
              </div>
              <div {...bar3} id="bar3" className="bar" style={{  }} ></div>
            </div>

            <div id="menu-bar" onClick={ () => setOpened(!opened) } {...menuBar} >
            </div>
        </div>


          <div style={{  }} >
            {children}
          </div>
      </div>
  )
}