import React, { useState, useEffect } from 'react'
import validateInfo from './validateInfo'

function Login(callback) {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const usernameChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const values = {
      email: enteredEmail,
      password: enteredPassword,
    }
    setErrors(validateInfo(values))
    setIsSubmitting(true)
  }
  useEffect(() => {
    if (Object.keys(errors) === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={submitHandler}>
        <h1>Sign-in</h1>
        <div className='form-inputs'>
          <label className='form-label'>E-mail</label>
          <input
            type='text'
            name='email'
            id='email'
            className='form-input'
            placeholder='Enter your Email'
            onChange={usernameChangeHandler}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='form-input'
            placeholder='Enter your Password'
            onChange={passwordChangeHandler}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type='submit' className='form-input-btn'>
          Login
        </button>
        <span className='form-input-login'>
          New to Rentoday? Sign-up <a href='#'>here</a>
        </span>
      </form>
    </div>
  )
}

export default Login
