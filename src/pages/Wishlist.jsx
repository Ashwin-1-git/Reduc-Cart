import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons'


function Wishlist() {
  return (
    <>
    <Header/>
    <div className='container py-5 ' >
{/* wishlist with content */}
<div className='col-md-3 mb-2 mt-5 ' >
{/* card */}
  <Card >
      <Card.Img  height={'270px'} variant="top" src="https://cdnus.globalso.com/topfeelpack/PJ75-50g.jpg" />
      <Card.Body className='text-center ' >
        <Card.Title className='fw-bold' > Title</Card.Title>
        <div className='d-flex justify-content-evenly my-1' >
          <button className='btn text-danger fs-4' > <FontAwesomeIcon icon={faHeartCirclePlus} /> </button>
          <button className='btn text-success fs-4' > <FontAwesomeIcon icon={faCartPlus} /> </button>
        </div>
      </Card.Body>
    </Card>
</div>
    </div>
    Wishlist
    </>
  )
}

export default Wishlist