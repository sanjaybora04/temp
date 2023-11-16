import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <div className='flex'>
      <div className='w-16 h-screen'></div>
      <div className='h-screen w-full overflow-scroll bg-slate-100 p-3'>
        <div className='h-12'></div>
        <hr />
        <div className='lg:flex'>
          <div className='bg-white m-3 lg:w-[25%] text-sm text-gray-500'>
            <div className='p-2 hover:bg-slate-200 flex justify-between items-center'><div>Traditional Wear</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className='p-2 hover:bg-slate-200 flex justify-between items-center'><div>Western Wear</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className='p-2 hover:bg-slate-200 flex justify-between items-center'><div>Swim & Beachwear</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className='p-2 hover:bg-slate-200 flex justify-between items-center'><div>Winter & Seasonal Wear</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className='p-2 hover:bg-slate-200 flex justify-between items-center'><div>Beauty & Grooming</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className='p-2 hover:bg-slate-200 flex justify-between items-center'><div>Jwellery</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className='p-2 hover:bg-slate-200 flex justify-between items-center'><div>Personal care Appliances</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className='p-2 hover:bg-slate-200 flex justify-between items-center'><div>International Brands</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className='p-2 hover:bg-slate-200 flex justify-between items-center'><div>Foot Wear</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className='p-2 hover:bg-slate-200 flex justify-between items-center'><div>Watches</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className='p-2 hover:bg-slate-200 flex justify-between items-center'><div>Accessories</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
          <div className='m-3 lg:w-[50%]'>
            <div className='aspect-[2/1] lg:aspect-auto lg:h-[70%] pb-2'><div className='w-full h-full bg-blue-200'></div></div>
            <div className='aspect-[4/1] lg:aspect-auto lg:h-[30%] flex'>
              <div className='bg-orange-200 w-full h-full'></div>
              <div className='bg-pink-200 w-full h-full'></div>
              <div className='bg-green-200 w-full h-full'></div>
            </div>
          </div>
          <div className='w-[20%] bg-white m-3'>
            <div className=''></div>
            <div className=''></div>
          </div>
        </div>
        <hr />
        <div className=''></div>
      </div>
    </div>
  )
}

export default App
