import React from 'react'
import { Link } from 'react-router-dom'
Link
function Pnf() {
  return (
    <>
   <div style={{height:"80vh"}} className='d-flex justify-content-center align-items-center flex-column' >  
    <h1 className='dw-bolder'>  404</h1>
    <img width={'30%'} src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif" alt="page not found" />
    <h4>oops.. wrong page</h4>
    <p> looks like you are lost</p>
    <Link to={'/'} className='btn btn-primary' >Back to Home</Link>
   </div>
    </>
  )
}

export default Pnf