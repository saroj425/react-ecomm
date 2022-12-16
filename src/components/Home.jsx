import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
        <div class="card bg-dark text-white">
            <img src="/assets/bg.jpg" class="card-img" alt="..." height="550px"/>
            <div class="card-img-overlay d-flex flex-column justify-content-center">
                <div className='container'>
                    <h5 class="card-title  display-3 fw-bolder mb-0">New Arivals</h5>
                    <p class="card-text lead fs-2">Checkout All the Trends</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
        <Products/>
    </div>
  )
}

export default Home