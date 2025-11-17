import React from 'react'
import Header from "../components/Header"
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Home() {
  return (

    <>
      <Header/>
     <div className='container py-5' > 
      <div className='row my-5' >
        {/* dulipcate */}
        <div className='col-md-3 mb-2' >
{/* card */}
    <Card >
      <Card.Img height={'250px'} variant="top" src="https://cdnus.globalso.com/topfeelpack/PJ75-50g.jpg" />
      <Card.Body className='text-center' >
        <Card.Title className='fw-bold' > Title</Card.Title>
      <Link to={'/products/:id/view'} className='btn btn-success' >View more..</Link>
      </Card.Body>
    </Card>

        </div>

      </div>
     </div>
      </>
  )
}

export default Home