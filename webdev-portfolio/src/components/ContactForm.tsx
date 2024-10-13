import React from 'react'

export default function ContactForm() {
  return (
    <div className='relative z-10 max-w-7xl mx-auto bg-[#F1EEDB] text-gray-800 border-2 border-gray-700'>
      <form className='relative z-20 bg-[#F1EEDB] grid grid-cols-2 gap-9 p-9'>
        <input required name='name' placeholder='Imię *' type='name' className='p-3 bg-transparent border border-gray-700'></input>
        <input required name='mail' placeholder='Email *' type='email' className='p-3 bg-transparent border border-gray-700'></input>
        <textarea placeholder='Wiadomość' className='col-span-2 p-3 bg-transparent border border-gray-700'></textarea>
        <div className='relative bg-[#596ae8] text-white border border-black z-20 w-32'>
            <button className='bg-[#596ae8] py-2 w-full'>Wyślij</button>
            <div className='absolute bg-gray-700 w-full h-full left-[0.35rem] top-[0.35rem] -z-20'></div>
        </div>
      </form>
      <div
          className={`absolute w-full h-full top-3 left-3 bg-gray-700 z-0 transition-transform duration-300 ease-in-out`}>
      </div>
    </div>
  )
}
