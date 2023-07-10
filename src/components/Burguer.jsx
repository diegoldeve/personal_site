import React from 'react'
import '../burguer.css'
export const Burguer = ({isMenuActive}) => {



  return (
    <div>
			<section className="menu-responsive">
			<ul>
          <li><a href="#">About me</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Lectures</a></li>
          <li><a href="#" target='_blank'><button>Contact me</button></a></li>
      </ul>
			</section> 
    </div>
  )
}
