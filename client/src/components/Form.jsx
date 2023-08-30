import React from 'react'
import { useState } from "react";



function Form() {
    const [city, setCity] = useState('');
    const [data, setData] = useState();

    
  return (
    <div><p>Form</p>
    <input
    type='text'
    id='city'
    name='city'
    placeholder='Enter a city'
    onChange={(e) => setCity(e.target.value)}
    ></input>
    <button>
    Get Weather
    </button>
    </div>
  )
}

export default Form