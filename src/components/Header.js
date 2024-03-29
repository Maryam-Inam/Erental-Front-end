import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='https://www.kwipped.com/images/logo-blue-trans-notag.png'
          alt=''
        />
      </Link>

      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guests</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        <Link to='/requestquote'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className='header__optionLineTwo header__basketCount'>0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
