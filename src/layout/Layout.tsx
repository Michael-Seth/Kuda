import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Layout({ children }: any) {
    return (
        <><Navbar />{children}<Footer /></>
    )
}

export default Layout