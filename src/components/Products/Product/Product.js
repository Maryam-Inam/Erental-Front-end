import React from 'react'
import './Product.css'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
// function Product({ title, image, price, rating }) {
function Product({ product , onAddToCart}) {
  return (
    <div className='product'>
      <div className='prouct__info'>
        <p>{product.name}</p>
        <p className='product__price'>
          <small>Rs</small>
          <strong>{product.price.formatted_with_symbol  }</strong>
        </p>
        <div className='product__rating'>
          {Array('4')
            .fill()
            .map((_, i) => (
              <span>&#9733;</span>
            ))}
        </div>
      </div>
      <img src={product.image.url} alt='' />
      <p dangerouslySetInnerHTML={{__html: product.description}}/>
      <button>Get Quote</button>
      <IconButton aria-label="Add to Cart" onClick = {() => { onAddToCart(product.id,1) }}>
        Add to Cart
      </IconButton>
    </div>
  )
}

export default Product
