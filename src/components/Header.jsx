import React, { useState, useRef } from 'react'
import '../header.css'
import {About} from './About'
import logo from '../assets/logo_transparent.png'
import cerrar from '../assets/x.png';
import menu from '../assets/menu.png'
import { Burguer } from './Burguer'
import { Projects } from './Projects';
const Header = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);

  

  const toggleClass = () => {
    menuRef.current.classList.toggle('active');
    if(!isMenuActive){
      setIsMenuActive(true);
      // console.log('abriendo')
    }else{
       setIsMenuActive(false);
      // console.log('cerrando')
    }

  }


  return (
    <>
    <header>
        <div className="logo">
            <img src={logo} alt="Logo de DiegolDeve" />
        </div>
        <nav>
            <ul>
                <li><a href='#about'>About me</a></li>
                <li><a href="#projects">Projects</a></li>
                {/* <li><a href="#">Lectures</a></li> */}
                <li><a href="#contact" ><button>Contact me</button></a></li>
            </ul>
        </nav>
        <section className="menu">
          <img src={!isMenuActive?menu:cerrar} onClick={toggleClass}/>
        </section>
        <section className='menu-responsive active' ref={menuRef} >
        <ul>
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* <li><a href="#">Lectures</a></li> */}
          <li><a href="#contact"><button>Contact me</button></a></li>
        </ul>
        </section>
    </header>
         {
         /* isMenuActive&&(
            <div className='menu-burguer'>
              <Burguer
                isMenuActive = {isMenuActive}
              />
            </div>
          )*/
        } 
    {/* <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div> */}
    </>
  )
}
export {Header}

