import React from 'react'
import logo from '../assets/Logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import { Link } from 'react-router-dom'

function FooterPage() {
  return (
    <footer className="bg-green-50 w-full border-t border-green-200 mt-auto">
      <div className='max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col items-center md:items-start mb-6 md:mb-0'>
          <img className='h-16 w-16 mb-4' src={logo} alt="logo" />
          <div className='flex space-x-4 mb-2'>
            <a href="#"><img className='h-6 w-6' src={facebook} alt="facebook" /></a>
            <a href="#"><img className='h-6 w-6' src={instagram} alt="instagram" /></a>
            <a href="#"><img className='h-6 w-6' src={twitter} alt="twitter" /></a>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            <span>E-Fruit By Md Aashik &copy; 2025</span>
            <br />
            <span>fssai lic no : 1122499900xxxxx</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <ul className="list-none text-sm text-gray-700 space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row">
            <li><Link className="hover:underline" to="/">Home</Link></li>
            <li><a className="hover:underline" href="#">Privacy Policy</a></li>
            <li><a className="hover:underline" href="#">Terms of Use</a></li>
            <li><a className="hover:underline" href="#">Delivery Area</a></li>
          </ul>
          <ul className="list-none text-sm text-gray-700 space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row">
            <li><Link className="hover:underline" to="/">Customer Support</Link></li>
            <li><a className="hover:underline" href="#">Press</a></li>
            <li><a className="hover:underline" href="#">Delivery With E-Fruit</a></li>
            <li><a className="hover:underline" href="#">Career</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FooterPage