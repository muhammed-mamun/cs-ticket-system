import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { CiFacebook } from 'react-icons/ci'
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular } from 'react-icons/ti'

export default function Footer() {
  return (
    <div className='bg-black'>
      <footer className="py-20 footer sm:footer-horizontal gap-16 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        <nav>
          <h6 className="footer-title text-white">CS Ticket System</h6>
          <p className='text-[#A1A1AA]'>It is a streamlined customer support dashboard designed for managing and tracking service requests in real-time.</p>
        </nav>
        <nav className='text-[#A1A1AA] '>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav className='text-[#A1A1AA]'>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover">Product and Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>

        <nav className='text-[#A1A1AA]'>
          <h6 className="footer-title text-white">Information</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav className='text-[#A1A1AA]'>
          <h6 className="footer-title text-white">Legal</h6>
          <a className="link link-hover flex items-center"><TiSocialLinkedinCircular size={24} />
@CS-Ticket System</a>
          <a className="link link-hover flex items-center"><TiSocialFacebookCircular size={24} />

@CS-Ticket System</a>
          <a className="link link-hover flex items-center"> <TiSocialTwitterCircular size={24} />
@CS-Ticket System</a>
          <a className="link link-hover flex items-center gap-1"><BiLogoGmail size={14}/>
support@cst.com</a>

        </nav>
      </footer>
      <div className='h-px bg-white/30 mb-20'></div>
      <p className='pb-10 text-center text-[#A1A1AA]'>Copyright © {new Date().getFullYear()} CS - Ticket System. All right reserved</p>
    </div>
  )
}
