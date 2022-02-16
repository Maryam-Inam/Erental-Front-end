import React, { useEffect, useState } from 'react'
import validateInfo from './validateInfo'
import './SignUp.css'

const SignUp = (callback) => {
  const [enteredUserName, setEnteredUserName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredPassword2, setEnteredPassword2] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value)
  }
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
  }
  const password2ChangeHandler = (event) => {
    setEnteredPassword2(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const values = {
      username: enteredUserName,
      email: enteredEmail,
      password: enteredPassword,
      password2: enteredPassword2,
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
        <h1>
          Get Started with us today! Create your account by filling out the
          information below
        </h1>
        <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            id='username'
            className='form-input'
            name='username'
            placeholder='Enter your username'
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='form-input'
            placeholder='Enter your Email'
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='form-input'
            placeholder='Enter your password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password2' className='form-label'>
            Confirm Password
          </label>
          <input
            type='password'
            name='password2'
            id='password2'
            className='form-input'
            placeholder='Enter your password'
            value={enteredPassword2}
            onChange={password2ChangeHandler}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button type='submit' className='form-input-btn'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? login <a href='#'>here</a>
        </span>
      </form>
    </div>
  )
}

export default SignUp
