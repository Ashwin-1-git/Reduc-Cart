import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'

function View() {
  const userWishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  // get product id from url
  const { id } = useParams()
  // console.log(id);
  // state for storeing product to be viewed
  const [product, setproduct] = useState({})
  console.log(product);

  useEffect(() => {
    if (sessionStorage.getItem("products")) {
      const allProducts = JSON.parse(sessionStorage.getItem("products"))
      setproduct(allProducts.find(item => item.id == id))
    }
  }, [])

  const handleWishlist = () => {
    const existingProduct = userWishlist?.find(item => item.id == id)
    if (existingProduct) {
      Swal.fire({
        title: 'Sorry!',
        text: 'product already in your wishlist...',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else {
      // add product to wishlist in redux store - dispatch action 
      dispatch(addToWishlist(product))
    }

  }

  const handleCart = ()=>{
      const existingProduct = userCart?.find(item=>item.id==id)
      dispatch(addToCart(product))
      Swal.fire({
        title: 'Completed',
        text: existingProduct?`Quantity of ${product.title}, is updated successfully`:'product added to your cart ...',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
  }

  return (

    <>
      <Header />
      <div className='container py-5' >
        <div className='row my-5' >
          <div className='col-md-6' >
            <img style={{ width: "70%", marginLeft: "15%" }} className='img-fluid ' src={product?.thumbnail} alt="no img" />
            <div className='d-flex justify-content-evenly mt-5' >
              <button onClick={handleWishlist} className='btn btn-primary' >ADD to wishlist</button>
              <button onClick={handleCart} className='btn btn-success' >ADD to cart</button>

            </div>
          </div>
          <div className='col-md-6 mt-5 mt-md-0' >
            <h1 className='fw-bold' >{product?.title}</h1>
            <h3 className='text-danger fw-bolder' >{product?.price}</h3>
            <h5>Brand: {product?.brand}</h5>
            <h5 className='fw-bold' >Category: {product?.category}</h5>
            <h5>Description:</h5>
            <h5 className='my-1 mt-3 fw-bold' > {product?.description}
            </h5>

            <h5 className='my-3'>Client Reviews</h5>
            {/* duplicate div */}
            {
              product?.reviews?.length > 0 ?
                product?.reviews?.map((item, index) => (
                  <div key={index} className='mb-3 p-2 border rounded shadow' >
                    <p><span className='fw-bolder' >{item?.reviewerName}:
                    </span>
                      {item?.comment}
                    </p>
                    <p>Rating:{item?.rating}

                    </p>
                  </div>

                ))
                :
                <div>No Client Reviews are available</div>
            }

          </div>

        </div>
      </div>




    </>
  )
}

export default View