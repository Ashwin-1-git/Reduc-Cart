import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav,Container,Navbar,Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
faTruckFast


function Header() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  console.log(userWishlist);
  

  return (
     <Navbar expand="lg" style={{zIndex:"1"}} className="bg-success position-fixed w-100  z-1">
      <Container>
        <Navbar.Brand > <Link to={'/'} className='text-decoration-none fw-bold text-light'  >  <FontAwesomeIcon icon={faTruckFast}/> Daily Cart </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-md-center gap-4 ">
            <Nav >
               <Link to={'/wishlist'} className='text-decoration-none text-light fw-bold d-flex align-items-center'> <FontAwesomeIcon icon={faHeart} className='text-danger me-1' />   WISHLIST <Badge pill bg="dark" className='ms-1' >{userWishlist?.length}</Badge> </Link> 

               </Nav>
            <Link to={'/cart'} className='text-decoration-none text-light fw-bold d-flex align-items-center'> <FontAwesomeIcon icon={faCartShopping} className='text-primary me-1' /> CART<Badge pill bg="dark" className='ms-1' >20</Badge> </Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header