import './Home.css'
import Product from './Product/Product'
import NewProduct from '../NewProduct/NewProduct'
import React from 'react'
import { Grid } from '@mui/material'

function HomeProducts({ products }) {
  // const addProductHandler = (products) => {
  //   setProducts((prevProducts) => {
  //     return [products, ...prevProducts]
  //   })
  // }
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
          alt=''
        />
        <div className='home__row'>
<<<<<<< Updated upstream
         <Grid container justify="center" spacing = {3}>
           {products.map(product => (
            <Grid item_key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product}/>
           </Grid>
          ))}
=======
          <Grid container justify='center' spacing={2}>
            {products.map((product) => (
              <Grid item_key={product.id}>
                <Product product={product} />
              </Grid>
            ))}
>>>>>>> Stashed changes
          </Grid>
        </div>
      </div>
    </div>
<<<<<<< Updated upstream
=======
    // </div>
>>>>>>> Stashed changes
  )
}

export default HomeProducts
