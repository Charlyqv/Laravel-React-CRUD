import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'

export const CreateProduct = () => {

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, {description, price, stock})
    navigate('/')
  }

  return (
    <div>
      <h3>Create Product</h3>
      <form onSubmit={store}>
        <div className='mb-3'>
          <label className="form-label">Description</label>
          <input 
            type="text"
            value={description}
            onChange={ (e) => setDescription(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className="form-label">Price</label>
          <input 
            type="number"
            value={price}
            onChange={ (e) => setPrice(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className="form-label">Stock</label>
          <input 
            type="number"
            value={stock}
            onChange={ (e) => setStock(e.target.value)}
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>Store</button>
      </form>
    </div>
  )
}
