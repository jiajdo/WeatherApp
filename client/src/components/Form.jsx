import React from 'react'
import { useState } from "react";



function Form({  }) {
    return (
        <div><h1>What's the weather?</h1>
            <input
                type='text'
                id='city'
                name='city'
                placeholder='Enter a city'
                onChange={(e) => (e.target.value)}
            ></input>
            <button
                onClick={() => {}}
            >
                Get Weather
            </button>
        </div>
    )
}

export default Form