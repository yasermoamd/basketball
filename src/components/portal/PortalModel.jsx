import React from 'react'
import ReactDOM from 'react-dom'

function PortalModel({ open, children, style }) {
    if(!open) return null;
  return ReactDOM.createPortal(
    <div className={style}>
        {children}
    </div>,
    document.getElementById('portal')
  )
}

export default PortalModel