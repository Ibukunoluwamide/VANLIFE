import React from 'react'
import incomeChart from '../../assets/incomeChart.svg'
const Income = () => {
  return (
    <>
    <section>
    <div className="container px-4 fle">
    <h1 className='text-2xl font-semibold py-3'>Income</h1>
     <p className='py-4'>last <span className='underline semibold'>30 days</span></p>
      <p className='text-4xl font-bold py-5'>$2,260</p>
      <img src={incomeChart} alt="" className='w-ful'/>

     <div className="">
     <div className="flex justify-between  py-3">
        <h6 className='font-bold'>Your transactions (3)</h6>
        <h5>Last 30 day</h5>
      </div>
      <div className="flex justify-between bg-white rounded p-5 border my-3">
        <h6 className='font-bold'>$720</h6>
        <h5>1/12/22</h5>
      </div>
      <div className="flex justify-between bg-white rounded p-5 border my-3">
        <h6 className='font-bold'>$560</h6>
        <h5>10/11/22</h5>
      </div>
      <div className="flex justify-between bg-white rounded p-5 border my-3">
        <h6 className='font-bold'>$980</h6>
        <h5>23/11/22</h5>
      </div>
     </div>
    </div>
    </section>
    </>
  )
}

export default Income