import React from 'react'

export default function({ brand = 'Yamaha' }) {
  return <h2 className="piano__brand">{brand}</h2>
}
