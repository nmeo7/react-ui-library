import React from 'react'
import { useResponsiveStyles2 } from '../components/styles'

export const backgroundTheme = (theme) => ({
  background: theme?.backgroundColor || '#fffdf9',
  borderBottom: `${theme?.primaryColorLight} 1px solid`,
  borderBottom: '1px solid #f0fbff'
})

export const DashboardHeader = (props) => {
  const { theme } = {} // useContext (UserContext)
  const {
    stickingHeader,
    title,
    quickAction,
    displayName,
    breadcrumb,
    subtitle,
    logo
  } = props.headerOptions

  // const [styles2, setStyles2] = useState()
  // const styles2 = {}

  const wrapper = {
    position: 'fixed',
    width: 'calc(100% - 192px)',
    width: '100%',
    zIndex: '1',
    top: '0',
    padding: '20px 0',
    left: '0',
    small: {
      width: 'calc(100% - 80px)',
      width: '100%',
      padding: '20px 40px',
      position: 'relative'
    }
  }

  // useEffect(() => {
  //   setStyles2(props.scrolled ? { boxShadow: '0px 1px 4px #985a0a' } : null)
  // }, [props.scrolled])

  const scrolledStyle = props.scrolled && { boxShadow: '0px 1px 4px #985a0a' }

  const titleStyle =
    props.scrolled && stickingHeader ? { paddingTop: '0em' } : {}

  const sticking =
    props.scrolled && stickingHeader
      ? {
          display: 'block',
          bottom: 'calc(100vh - 154px)',
          height: '64px',
          zIndex: '1000',
          width: '100%'
        }
      : { display: 'none' }

  const headerStyles2 = useResponsiveStyles2({
    maxWidth: '1312px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'left',
    padding: '0 64px',
    small: { padding: '0' }
  })

  const headerStyles2Div = useResponsiveStyles2({
    width: '240px',
    position: 'relative',
    small: { width: 'auto', position: 'relative' }
  })

  const headerStyles2H1 = useResponsiveStyles2({ small: { fontSize: '2em' } })

  const stickingButton =
    props.scrolled && stickingHeader
      ? { margin: '0', marginBottom: '64px' }
      : { margin: '32px 0' }

  const hours = new Date().getHours()

  return (
    <div>
      <div
        style={{
          ...wrapper,
          ...scrolledStyle,
          ...backgroundTheme(theme || null),
          height: '164px',
          height: '120px',
          overflow: 'hidden',
          zIndex: '1000',
          opacity: '.989'
        }}
      >
        <div style={{ ...headerStyles2 }}>
          <div style={headerStyles2Div}>
            {logo || (
              <div>
                <img alt='logo' />
              </div>
            )}
          </div>
          <div style={{ ...headerStyles2Div, flex: '1' }}>
            <div>{breadcrumb || <div>Home</div>}</div>
            <h1
              style={{
                transitionDuration: '.1s',
                margin: '4px 0 12px 0',
                ...titleStyle
              }}
            >
              {title
                ? title
                : `Good ${
                    (hours > 18 && 'Evening') ||
                    (hours > 12 && 'Afternoon') ||
                    'Morning'
                  }, ${displayName}!`}
            </h1>
            <i
              className='hide-on-scroll hide-on-phone'
              style={{
                ...headerStyles2H1,
                ...(props.scrolled && stickingHeader
                  ? { visibility: 'hidden' }
                  : {})
              }}
            >
              {subtitle}
            </i>
          </div>
          <div
            style={{
              ...headerStyles2Div,
              paddingLeft: '16px',
              transitionDuration: '.2s',
              width: 'fit-content',
              ...stickingButton
            }}
            className='hide-on-phone'
          >
            {quickAction}
          </div>
        </div>
      </div>
      {stickingHeader ? (
        <div style={{ position: 'fixed', ...sticking }}>
          <div
            style={{
              display: 'flex',
              maxWidth: '1312px',
              width: '100%',
              margin: 'auto',
              padding: '8px 64px'
            }}
          >
            <div style={{ width: '240px' }}></div>{' '}
            <div style={{ flexGrow: '1' }}>{stickingHeader}</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div style={{ height: '164px' }}></div>
    </div>
  )
}
