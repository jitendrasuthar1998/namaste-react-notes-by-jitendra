import React from 'react'
import { useParams } from 'react-router-dom'

const Bill = () => {

  const {billId} = useParams();
  return (
    <div>Bill id is {billId}</div>
  )
}

export default Bill