import React, { useState } from 'react'
import '../styles/Home.css'
import Product from './Product'
import NewProduct from './NewProduct/NewProduct'
const dummy_Products = [
  {
    id: 'p1',
    title: 'First Product',
    image:
      'https://kwipped-images.s3.amazonaws.com/MacbookPro_1531250487_resized.jpeg',
    price: 30,
    rating: 3,
    date: new Date(202, 7, 14),
  },
  {
    id: 'p2',
    title: 'Second Product',
    image:
      'https://kwipped-images.s3.amazonaws.com/MacbookPro_1531250487_resized.jpeg',
    price: 30,
    rating: 5,
    date: new Date(202, 7, 14),
  },
  {
    id: 'p3',
    title: 'Third Product',
    image:
      'https://kwipped-images.s3.amazonaws.com/MacbookPro_1531250487_resized.jpeg',
    price: 30,
    rating: 5,
    date: new Date(202, 7, 14),
  },
  {
    id: 'p4',
    title: 'Fourth Product',
    image:
      'https://kwipped-images.s3.amazonaws.com/MacbookPro_1531250487_resized.jpeg',
    price: 30,
    rating: 5,
    date: new Date(202, 7, 14),
  },
  {
    id: 'p5',
    title: 'Fifth Product',
    image:
      'https://kwipped-images.s3.amazonaws.com/MacbookPro_1531250487_resized.jpeg',
    price: 30,
    rating: 5,
    date: new Date(202, 7, 14),
  },
  {
    id: 'p6',
    title: 'Sixth Product',
    image:
      'https://kwipped-images.s3.amazonaws.com/MacbookPro_1531250487_resized.jpeg',
    price: 30,
    rating: 5,
    date: new Date(202, 7, 14),
  },
  {
    id: 'p7',
    title: 'Seventh Product',
    image:
      'https://kwipped-images.s3.amazonaws.com/MacbookPro_1531250487_resized.jpeg',
    price: 30,
    rating: 5,
    date: new Date(202, 7, 14),
  },
  {
    id: 'p8',
    title: 'eight Product',
    image:
      'https://kwipped-images.s3.amazonaws.com/MacbookPro_1531250487_resized.jpeg',
    price: 30,
    rating: 5,
    date: new Date(202, 7, 14),
  },
  {
    id: 'p9',
    title: 'ninth Product',
    image:
      'https://kwipped-images.s3.amazonaws.com/MacbookPro_1531250487_resized.jpeg',
    price: 30,
    rating: 5,
    date: new Date(202, 7, 14),
  },
]
function Home() {
  const [products, setProducts] = useState(dummy_Products)
  const addProductHandler = (products) => {
    setProducts((prevProducts) => {
      return [products, ...prevProducts]
    })
  }
  return (
    <div className='home'>
      {/* <NewProduct onAddProduct={addProductHandler} /> */}
      <div className='home__container'>
        <img
          className='home__image'
          src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
          alt=''
        />
        <div className='home__row'>
          {/* {products.map((products) => (
            <Product
              title={products.title}
              price={products.price}
              image={products.image}
              rating={products.rating}
            />
          ))} */}
          <Product
            title={products[0].title}
            price={products[0].price}
            image={products[0].image}
            rating={products[0].rating}
          />
          <Product
            title={products[1].title}
            price={products[1].price}
            image={products[1].image}
            rating={products[1].rating}
          />
          <Product
            title={products[2].title}
            price={products[2].price}
            image={products[2].image}
            rating={products[2].rating}
          />
        </div>
        <div className='home__row'>
          <Product
            title={products[3].title}
            price={products[3].price}
            image={products[3].image}
            rating={products[3].rating}
          />
          <Product
            title={products[4].title}
            price={products[4].price}
            image={products[4].image}
            rating={products[4].rating}
          />
          <Product
            title={products[5].title}
            price={products[5].price}
            image={products[5].image}
            rating={products[5].rating}
          />
        </div>
        <div className='home__row'>
          <Product
            title={products[6].title}
            price={products[6].price}
            image={products[6].image}
            rating={products[6].rating}
          />
          <Product
            title={products[7].title}
            price={products[7].price}
            image={products[7].image}
            rating={products[7].rating}
          />
          <Product
            title={products[8].title}
            price={products[8].price}
            image={products[8].image}
            rating={products[8].rating}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
