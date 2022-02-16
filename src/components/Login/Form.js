import React, { useState } from 'react'
import Login from './Login'
import './Login.css'

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  return (
    <>
      <div className='form-container'>
        {/* <span className='close-btn'>×</span>
    <div className='form-content-left'>
      <img className='form-img' src='img/img-2.svg' alt='spaceship' />
    </div> */}
        {!isSubmitted ? <Login submitForm={submitForm} /> : <Login />}
      </div>
    </>
  )
}

export default Form
