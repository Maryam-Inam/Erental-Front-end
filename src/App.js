import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GetQuote from './components/GetQuote'
import Form from './components/GetQuote/Form'
import NewProduct from './components/NewProduct/NewProduct'
function App() {
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
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
