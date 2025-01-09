import React from 'react'
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (<>
    <MainNavbar/>
    <main className='bg-secondary'>
        <section className='container py-5'>
        <Outlet/>
        </section>
     </main>

    <MainFooter/>
    </>
  )
}

