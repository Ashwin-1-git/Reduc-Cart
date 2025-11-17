import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleDown, faArrowRight, faPhone, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'310px'}} className='bg-success d-flex align-items-center justify-content-center flex-column text-white' >
<div className='d-flex justify-content-between w-75' >
  <div style={{width:'400px'}} className='intro' >
    <h3>
    <FontAwesomeIcon icon={faTruck} /> Daily cart  </h3>
    <p>Designed the build with all the love in the world by the luminar team with the help of our contributor</p>
    <p> code licensed luminar,docs CC BY 3.0 </p>
    <p> currently v5 5.3.2</p>
  </div>
  <div className='links d-flex flex-column ' >
    <h3>Links</h3>
    <Link to={'/'} className='text-decoration-none text-white' >Landing page</Link>
        <Link to={'/wishlist'} className='text-decoration-none text-white' >home page</Link>
    <Link to={'/cart'} className='text-decoration-none text-white' >cart</Link>

     


  </div>
    <div   className='links d-flex flex-column ' >
    <h3>Guides</h3>
    <a href={'/'}  className='text-decoration-none text-white' >React</a>
        <a href={'/wishlist'}  className='text-decoration-none text-white' >React boostrap</a>
    <a href={'/cart'}  className='text-decoration-none text-white' >React router</a>

    


  </div>
     <div   className=' d-flex flex-column text-decoration-none text-light' >
    <h3>Contact us</h3>
<div className='d-flex gap-2' >
     <input type="text  " className='form-control' placeholder='enter your email here' />
    < FontAwesomeIcon icon={faArrowRight} className='fs-4 mt-2 me-2' />

</div><div>
  < FontAwesomeIcon icon={faTwitter} className='fs-4 mt-2 me-2' />
    <  FontAwesomeIcon icon={faInstagram} className='fs-4 mt-2 me-2' />
        <  FontAwesomeIcon icon={faFacebook} className='fs-4 mt-2 me-2' />
    <  FontAwesomeIcon icon={faLinkedin} className='fs-4 mt-2 me-2' />
    <  FontAwesomeIcon icon={faGithub} className='fs-4 mt-2 me-2' />
    <  FontAwesomeIcon icon={faPhone} className='fs-4 mt-2 me-2' />


  
</div>
  </div>

</div>
<div className='fw-bold mt-2 flex-column' >
  <p>copyright july 2025 batch ,Daily Cart.Built with react redux</p>
  
</div>  
  </div>
  )
}

export default Footer