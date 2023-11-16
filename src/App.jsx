import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <div className='flex'>
      <div className='w-16 h-screen text-gray-500'>
        <div className='hover:bg-slate-200 p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </div>

        <div className='hover:bg-slate-200 p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>

        <div className='hover:bg-slate-200 p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <hr />
        <div className='hover:bg-slate-200 p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <div className='hover:bg-slate-200 p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
          </svg>
        </div>
      </div>
      <div className='h-screen overflow-y-scroll w-full bg-slate-100 px-3 pb-3'>
        <div className='sticky top-0 bg-slate-100 h-12 flex items-center justify-between'>
          <div className='flex items-center'>
            <img src='/vite.svg' className='m-2'></img>
            <div className='text-xs font-bold tracking-[5px]'>PIXORUS</div>
          </div>
          <div className='flex m-2'>
            <input type="text" className='p-2 text-sm rounded-l-full' placeholder='Search' />
            <button className='rounded-r-full text-gray-500 bg-white p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
          <div className='flex items-center'>
            <img className='w-8 h-8 rounded-full '></img>
            <div className='ml-4 text-xs hover:text-orange-600'>Sanjay Bora</div>
            <div className='ml-4 text-xs hover:text-orange-600'>Chart</div>
            <div className='ml-4 text-xs hover:text-orange-600'>Orders</div>
          </div>
        </div>
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
            <div className='aspect-[2/1] lg:aspect-auto lg:h-[70%] pb-2'>
              <div className='w-full h-full bg-teal-200 p-3 flex'>
                <div className='flex flex-col justify-center'>
                <div>Biggest Offer Revealed</div>
                <div className='text-2xl font-bold'>MORE DEALS INSIDE UP TO 50% OFF</div>
                </div>
                <img src='/chair.png' className='w-full lg:w-64 object-contain'></img>
              </div>
            </div>
            <div className='aspect-auto md:aspect-[4/1] lg:aspect-auto lg:h-[30%] md:flex'>
              <div className='bg-orange-200 w-full h-full aspect-[2/1] md:aspect-auto'></div>
              <div className='bg-pink-200 w-full h-full aspect-[2/1] md:aspect-auto my-2 md:my-0 md:ml-2'></div>
              <div className='bg-lime-200 w-full h-full aspect-[2/1] md:aspect-auto my-2 md:my-0 md:ml-2'></div>
            </div>
          </div>
          <div className='lg:w-[20%] m-3'>
            <div className='h-44 lg:h-1/2 flex flex-col'>
              <div>Recently Viewed</div>
              <div className='bg-white flex-1'></div>
            </div>
            <div className='h-44 lg:h-1/2 flex flex-col'>
              <div>Suggestions for You</div>
              <div className='bg-white flex-1'></div>
            </div>
          </div>
        </div>
        <hr />
        <div className='m-3'>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <div className='text-lg font-bold'>Deals of the Day</div>
              <div className='ml-5 text-red-500'>20:45:12 Left</div>
            </div>
            <div className='text-xs hover:underline cursor-pointer'>View all deals</div>
          </div>
          <div className='flex overflow-x-auto scrollbar-hide'>
            {Array.from({ length: 7 }, (_, index) => (
              <div key={index} className='flex-shrink-0 bg-[url(/OIP.jpeg)] bg-contain w-40 h-40 bg-white mx-2'>Element {index + 1}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
