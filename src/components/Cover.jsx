import React from 'react'
import '../cover.css'
import diego from '../assets/me.jpg'

export const Cover = () => {
  return (
    <>
        <section className="cover">
            <img src={diego} alt="Picture of Diegol" />
            <section className="description">
              <h2>Hello, my name is <p className='name'>Diego</p></h2>
              <h2>I'm<p className='name'>Frontend</p><p className='name'>Developer</p></h2>
            </section>
        </section>
    </>
  )
}
