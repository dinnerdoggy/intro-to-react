/* eslint-disable react/require-default-props */

'use-client';

import React from 'react'
import PropTypes from 'prop-types'

export default function SayHello({ name, greeting="Suh dude" }) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
    <div>
      Hello {name}, {greeting}!
    </div>
    </>
  )
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string,
}