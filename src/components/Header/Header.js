import React from 'react'

const headerStyles = {
  height: '64px',
  backgroundColor: '#fbfbfb',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
  padding: '8px 16px'
}

const navStyles = {
  height: '100%',
  display: 'flex',
  maxWidth: '1140px',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  justifyContent: 'space-between',
  alignItems: 'center'
}


export default function Header() {
  
  return (
    <header style={headerStyles}>
      <nav style={navStyles}>
        <div style={{ width: '150px', height: '30px' }}>asdasdasdasd</div>
        <div style={{ width: '150px', height: '30px', textAlign: 'right' }}>asdasdasdasd</div>
      </nav>
    </header>
  )
}
