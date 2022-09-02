import React from 'react'

const Home = () => {
  return (
    <div className='introduction flex-with-center'>
      <div className='centered'>
        <h1>Amit</h1>
        <div className='intro-content d-flex justify-content-between'>
          <p> MERN, Java and Python <br/>Full Stack Developer</p>
          <button className='primary-button w-50'>Know more</button>
        </div>
      </div>
    </div>
  )
}
export default Home