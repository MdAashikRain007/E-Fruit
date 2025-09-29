import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/Logo.png'
import profile from '../assets/avtar.png'
import store from '../assets/store.png'
import search from '../assets/loupe.png'
import '.././Styles/NavBar.css'

function NavBar() {
  return (
    <header className='sticky top-0 right-0 left-0'>
        <nav className='bg-green-50 flex items-center justify-around' >
            <Link to='/'><img className='h-24 w-24' src={logo} alt="logo" /></Link>
            <div id='search'><input type="text"  placeholder='Search Freash Fruit....'/><img  className='h-4 w-4' src={search} alt="search" /></div>
        <div className='flex justify-center items-center'>
            <div className='m-4'><Link to='/profil'><img className='h-7 w-7' src={profile} alt="profile" /></Link></div>
            <div><Link to='/cart'><img className='h-7 w-7' src={store} alt="" /></Link></div>
        </div>
        </nav>
    </header>
  )
}

export default NavBar