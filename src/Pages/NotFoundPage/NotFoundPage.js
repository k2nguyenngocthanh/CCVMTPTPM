import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NotFound.css"

export default function NotFoundPage() {
  return  <div>
    <section class="page_404">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 ">
        <div class="col-sm-10 col-sm-offset-1  text-center">
          <div class="four_zero_four_bg">
            <h1 class="text-center text-amber-900">404</h1>

          </div>

          <div class="contant_box_404">
            <h3 class="h2 text-amber-900">
              Look like you're lost
            </h3>

            <p className='text-amber-900'>the page you are looking for not avaible!</p>
            <NavLink to="/">
            <a href="" class="link_404">Go to Home</a>
            </NavLink>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
  
}
