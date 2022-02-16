import React, { useState } from 'react'
import SignUp from './SignUp'
import './SignUp.css'

const Form = () => {
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
        {!isSubmitted ? <SignUp submitForm={submitForm} /> : <SignUp />}
      </div>
    </>
  )
}

export default Form
