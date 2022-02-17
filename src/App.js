import Header from './components/Header'
import HomeProducts from './components/Products/HomeProducts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GetQuote from './components/GetQuote'
import Form from './components/GetQuote/Form'
import NewProduct from './components/NewProduct/NewProduct'
import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'

function App() {

  //setting products
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState({});

  const fetchProducts = async() => {
    const { data } =( await commerce.products.list());
    setProducts(data);
  }
  // const fetchCart = async() => {
  //   setCart( await commerce.cart.retrieve() );
  // }
  
  useEffect(() => {
      fetchProducts();
      // fetchCart();
  },[]);

  console.log("my products: ", products);
  // console.log("my cart: ",cart);
  
  return (
    //NewProduct />
    //<Form />
    <Router>
      <div className='app'>
        <Header></Header>
        <Switch>
          <Route path='/requestquote'>
            <GetQuote />
          </Route>
          <Route path='/'>
            <HomeProducts products={products}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
