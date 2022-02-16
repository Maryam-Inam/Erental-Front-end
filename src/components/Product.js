import React from 'react'
import '../styles/Product.css'
function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
      <div className='prouct__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>&#9733;</span>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button>Get Quote</button>
    </div>
  )
}

export default Product
