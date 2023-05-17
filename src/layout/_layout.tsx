import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Suspense fallback={'...로딩 중'}>
      <Outlet />
    </Suspense>
  )
}

export default Layout
