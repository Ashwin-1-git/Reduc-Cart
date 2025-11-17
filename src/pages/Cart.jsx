import React from 'react'
import Header from '../components/Header'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Cart() {
  return (
    <>
      <Header />
      <div className='container py-5' >
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
                  <tr>
                    <td>1</td>
                    <td>title</td>
                    <td> <img width={'50px'} height={'50px'} src="https://cdnus.globalso.com/topfeelpack/PJ75-50g.jpg" alt="product" /> </td>
                    <td>
                      <div className='d-flex' >
                        <button className='btn fs-3 fw-bold' >-</button>
                        <input style={{ width: "50px" }} value={10} type="text" className='form-control' readOnly />
                        <button className='btn fs-3 fw-bold' >+</button>

                      </div>
                    </td>
                    <td>  $ 200</td>
                    <td> <button className='btn btn-danger' > <FontAwesomeIcon icon={faTrash} /></button> </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              <div className='border rounded p-5' >
                <h3 className='fw-bold' > Total Amount : <span className='text-danger' >$198</span></h3>
                <hr />
                <div className=' d-grid mt-2'>
                  <button className='btn btn-success' >Check out</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Cart