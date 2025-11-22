import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decrementCartItem, emptyCart, incrementCartItem, removeCartItem } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'



function Cart() {
  const userCart = useSelector(state => state.cartReducer)
  const [sum,SetSum]= useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(()=>{
    SetSum(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
  },[userCart])

const handleDecrementCart = (product)=>{
  if (product.quantity>1) {
    // decrement
    dispatch(decrementCartItem(product))
  }else{
    // remove
    dispatch(removeCartItem(product.id))
  }
}

const checkout = ()=>{
  dispatch(emptyCart())
  Swal.fire({
    title:"Order Placed",
    text:"Thank You for Purchasing with us",
    icon:"success",
    confirmButtonText:'ok'
  })
} 

  return (
    <>
      <Header />
      <div className='container py-5' >
        {
          userCart?.length > 0 ?
            <div className='my-5' >
              <h1 className='text-danger fw-bold' >cart summary</h1>
              <div className="row mt-5">
                <div className="col-md-8 border rounded p-5">
                  <table className='table' >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>product</th>
                        <th>image</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>...</th>

                      </tr>
                    </thead>
                    <tbody>
                     {
                       userCart?.map((product,index)=>(
                         <tr>
                        <td>{index+1}</td>
                        <td>{product?.title}</td>
                        <td> <img width={'50px'} height={'50px'} src={product?.thumbnail} alt="product" /> </td>
                        <td>
                          <div className='d-flex' >
                            <button onClick={()=>handleDecrementCart(product)} className='btn fs-3 fw-bold' >-</button>
                            <input style={{ width: "50px" }} value={product?.quantity} type="text" className='form-control' readOnly />
                            <button onClick={()=>dispatch(incrementCartItem(product))} className='btn fs-3 fw-bold' >+</button>

                          </div>
                        </td>
                        <td>  $ {product?.totalPrice}</td>
                        <td> <button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn btn-danger' > <FontAwesomeIcon icon={faTrash} /></button> </td>
                      </tr>
                       ))
                     }
                    </tbody>
                  </table>
                  <div className="float-end my-3">
                    <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-2'>EMPTY CART</button>
                    <Link to={'/'} className='btn btn-primary'>SHOP MORE</Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className='border rounded p-5' >
                    <h3 className='fw-bold' > Total Amount : <span className='text-danger' >${sum}</span></h3>
                    <hr />
                    <div className=' d-grid mt-2'>
                      <button onClick={checkout} className='btn btn-success' >Check out</button>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            :
            <div style={{ height: '80vh' }} className='d-flex justify-content-center align-items-center flex-column'>
              <img className='w-25' src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="empty cart" />
              <h3>Cart is Empty</h3>
              <Link to={'/'} className='btn btn-warning'>Add More</Link>
            </div>
        }
      </div>
    </>
  )
}

export default Cart