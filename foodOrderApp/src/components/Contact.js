import React from 'react'

const Contact = () => {
  return (
    <div className='text-center'>
        <h1 className='font-bold text-3xl p-4 m-4'>Contact</h1>
        <form className="flex flex-col justify-center items-center">
          <input type="text" name="name" placeholder="Name" id="name" className="border border-black p-2 m-2 rounded" />
          <input type="text" name="message" placeholder="Message" id="message" className="border border-black p-2 m-2 rounded" />
          <button className='border border-black p-2 m-2 bg-gray-50 rounded'>Submit</button>
        </form>
    </div>
  )
}

export default Contact