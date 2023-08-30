import React from 'react'
import { useState } from "react";



function Form({setCity, setCityToFetch, city}) {
  return (
    <div><p>Form</p>
    <input
    type='text'
    id='city'
    name='city'
    placeholder='Enter a city'
    onChange={(e) => setCity(e.target.value)}
    ></input>
    <button
    onClick={() => setCityToFetch(city)}
    >
    Get Weather
    </button>
    </div>
  )
}

export default Form