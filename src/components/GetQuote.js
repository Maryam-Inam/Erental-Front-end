import React from 'react'
import '../styles/GetQuote.css'
function GetQuote() {
  return (
    <div className='getquote'>
      <div className='getquote__left'>
        <div>
          <h2 className='getquote__title'>Recieved Quotes </h2>
        </div>
        {/* <img
          className='getquote__ad'
          src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
          alt=''
        />
        <div>
          <h2 className='getquote__title'>Request Quote</h2>
        </div> */}
      </div>
      <div className='getquote__right'>
        <h2>one request multiple quotes</h2>
      </div>
    </div>
  )
}

export default GetQuote
