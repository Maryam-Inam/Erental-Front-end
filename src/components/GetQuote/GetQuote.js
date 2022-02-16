import React, { useState } from 'react'
import './GetQuote.css'
function GetQuote() {
  const [enteredStartDate, setEnteredStartDate] = useState('')
  const [enteredEndDate, setEnteredEndDate] = useState('')
  const [enteredLocation, setEnteredLocation] = useState('')
  const [enteredQuantity, setEnteredQuantity] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const startDateChangeHandler = (event) => {
    setEnteredStartDate(event.target.value)
  }
  const endDateChangeHandler = (event) => {
    setEnteredEndDate(event.target.value)
  }
  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value)
  }
  const quantityChangeHandler = (event) => {
    setEnteredQuantity(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const getQuoteData = {
      startDate: new Date(enteredStartDate),
      endDate: new Date(enteredEndDate),
      location: enteredLocation,
      quantity: enteredQuantity,
    }
    setIsSubmitting(true)
    console.log(getQuoteData)
  }

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={submitHandler}>
        <h1>One Request, Multiple Quotes</h1>
        <div className='form-inputs'>
          <label htmlFor='startdate' className='form-label'>
            Start Date
          </label>
          <input
            type='date'
            id='startdate'
            className='form-input'
            name='startdate'
            placeholder='Start'
            //value={enteredUserName}
            onChange={startDateChangeHandler}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className='form-inputs'>
          <label htmlFor='enddate' className='form-label'>
            End Date
          </label>
          <input
            type='date'
            id='enddate'
            className='form-input'
            name='enddate'
            placeholder='End'
            //value={enteredUserName}
            onChange={endDateChangeHandler}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className='form-inputs'>
          <label htmlFor='location' className='form-label'>
            Where
          </label>
          <input
            type='text'
            id='location'
            className='form-input'
            name='location'
            placeholder='City'
            //value={enteredUserName}
            onChange={locationChangeHandler}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className='form-inputs'>
          <label htmlFor='quantity' className='form-label'>
            Quantity
          </label>
          <input
            type='number'
            id='quantity'
            className='form-input'
            name='quantity'
            placeholder='Quantity'
            //value={enteredUserName}
            onChange={quantityChangeHandler}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>

        <button type='submit' className='form-input-btn'>
          Request Quotes
        </button>
      </form>
    </div>
  )
}

export default GetQuote
