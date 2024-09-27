/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */

'use client';

import React, { useState } from 'react'

export default function Counter({ defaultValue }) {
    const [counterValue, setCounterValue] = useState(defaultValue);

    const updateCounterValue = (method) => {
      if (method === 'add' ) {
        setCounterValue((prevState) => prevState + 1);
      }
      if (method === 'sub' ) {
        setCounterValue((prevState) => prevState - 1);
      }
    };

    return (
      <div>
        <h2>Counter</h2>
        <h4>{counterValue}</h4>
        <button onClick={() => updateCounterValue('add')}>+</button>
        <button onClick={() => updateCounterValue('sub')}>-</button>
      </div>
    )
}
