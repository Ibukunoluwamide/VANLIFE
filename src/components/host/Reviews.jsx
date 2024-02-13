import React from 'react'
import reviewChart from '../../assets/reviewChart.svg'
const Reviews = () => {
  return (
    <>
     <section>
    <div className="container px-4 fle">
       <div className="flex gap-4">
       <h1 className='text-2xl font-semibold py-3'>Your Reviews</h1>
     <p className='py-4'>last <span className='underline semibold'>30 days</span></p>
       </div>
      <img src={reviewChart} alt="" className='py-5'/>

      <div className="flex justify-between py-3">
        <h6 className='font-bold'>Reviews (2)</h6>
        
      </div>
      <p><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></p>

      <div className="border-bottom py-5" style={{borderBottom: '1px solid gray'}}>
      <div className="flex gap-3  my-3">
        <h6 className='font-bold'>Elliot</h6>
        <h5>December 1, 2022</h5>
      </div>
      <p>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
      </div>
      <div className="border-bottom py-5 mb-8" style={{borderBottom: '1px solid gray'}}>
      <div className="flex gap-3  my-3">
        <h6 className='font-bold'>Sandy</h6>
        <h5>November 23, 2022</h5>
      </div>
      <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
      </div>
     
    </div>
    </section>
    </>
  )
}

export default Reviews