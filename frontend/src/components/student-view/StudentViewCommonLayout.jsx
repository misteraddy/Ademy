import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

function StudentViewCommonLayout() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default StudentViewCommonLayout