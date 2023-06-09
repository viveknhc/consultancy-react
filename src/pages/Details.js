import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
  const page=useParams();
  console.log(page)
  return (
    <div>
      details
    </div>
  )
}
