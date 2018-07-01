import React from 'react'

// Example of a sizeable single global CSS stylesheet:
import 'tachyons'

const Layout = ({ children, data }) => (
  <div className="ml-auto mr-auto bg-washed-green ph3 mw8 sans-serif">
    {children}
  </div>
)

export default Layout
