import React from 'react'
import { createPortal } from 'react-dom'

function PortalModel({ open, children, style }) {
    if(!open) return null;
  return createPortal(
    <div className={style}>
        {children}
    </div>,
    document.getElementById('portal')
  )
}

export default PortalModel