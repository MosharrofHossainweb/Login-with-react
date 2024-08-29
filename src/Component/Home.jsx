import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Slice/CounterSlice'
import { decl } from 'postcss'

const Home = () => {
  const sliceData = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  return ( 
    <>
      <Navbar/>
     
     <div className='mt-60'>
     <button className='bg-gray-500 rounded-lg p-1.5  m-2 active:scale-[1.1]' onClick={()=> dispatch(increment())}> Increament+</button>
                    <h2 className='text-2xl text-yellow-400'>Value = {sliceData} </h2>
      <button className='bg-slate-500 rounded-lg  p-1.5 m-2 active:scale-[1.1]' onClick={()=>{dispatch(decrement())}}>Decreament-</button>
     </div>
    </>
  )
}

export default Home
