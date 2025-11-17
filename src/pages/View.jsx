import React from 'react'
import Header from '../components/Header'

function View() {
  return (

    <>
 <Header/>
 <div className='container py-5' >
<div className='row my-5' >
  <div className='col-md-6' >
<img style={{width:"70%",marginLeft:"15%"}} className='img-fluid ' src="https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2,q-40/static/img/product/335142/maybelline-new-york-color-sensational-loaded-bold-lipstick-09-midnight-date-3-9-g-11-47-15_1_display_1754367408_a376dee0.jpg" alt="no img" />
<div className='d-flex justify-content-evenly mt-5' >
  <button className='btn btn-primary' >ADD to wishlist</button>
    <button className='btn btn-success' >ADD to cart</button>

</div>
  </div>
  <div className='col-md-6' >
<h1 className='fw-bold' >Title</h1>
<h3 className='text-danger fw-bolder' >$price</h3>
<h5>Brand:</h5>
<h5 className='fw-bold' >Category:</h5>
<h5>Description:</h5>
<h5 className='my-1 mt-3 fw-bold' > Client review </h5>
{/* duplicate div */}
<div className='mb-3 p-2 border rounded shadow' >
<p><span className='fw-bolder' >Username:
</span>
message
</p>
<p><span className='fw-bolder' >Rating:
</span>
number
</p>
</div>
<div className='mb-3 p-2 border rounded shadow' >
<p><span className='fw-bolder' >Username:
</span>
message
</p>
<p><span className='fw-bolder' >Rating:
</span>
number
</p>
</div>
<div className='mb-3 p-2 border rounded shadow' >
<p><span className='fw-bolder' >Username:
</span>
message
</p>
<p><span className='fw-bolder' >Rating:
</span>
number
</p>
</div>
  </div>


</div>
 </div>
    </>
  )
}

export default View