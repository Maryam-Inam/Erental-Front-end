import React, { useState } from 'react'
import './GetQuote.css'
import GetQuote from './GetQuote'
function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? <GetQuote submitForm={submitForm} /> : <GetQuote />}
      </div>
    </>
  )
}

export default Form
