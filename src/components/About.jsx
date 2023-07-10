import React from 'react'
import {saveAs} from 'file-saver'
import '../about.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/secuencia-de-comandos-de-java.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import unity from '../assets/unity.png'
import sql from '../assets/database.png'
import react from '../assets/physics.png'
import youtube from '../assets/yt2.png'
import link from '../assets/in.png'
import reactnative from '../assets/reactnative.png'
import bootstrap from '../assets/bootstraplogo.png'
import figma from '../assets/figma.png'


export const About = () => {

  function handleDownload(){
    const path = '../pdf/DiegoMCV.jpg';
    saveAs(path,'DiegoMCV.jpg')
  }
  return (
    <div id='about'>
    <section className='about-container'>
        <h2 className='title'>About me</h2>
        <p>I am a lover of technology, nature, music and video games.
          I am studying Video Games Engineering.I am an enthusiastic, self-motivated, reliable, responsible and hard working person.</p>
      <button onClick={handleDownload} className='cv'>Download CV</button>
        <p>SOCIAL MEDIA</p>
        <div className="socials">
          <div className="social-item">
            <a href="https://github.com/diegoldeve" target='_blank'><img src={github} alt="Logo de github" /></a>
          </div>
          <div className="social-item">
            <a href="https://www.youtube.com/@diegoldeve366/videos" target='_blank'><img src={youtube} alt="Logo de Youtube" /></a>
          </div>
          <div className="social-item">
            <a href="https://www.linkedin.com/in/diego-mendoza-001887238/" target='_blank'><img src={link} alt="Logo de Linkdn" /></a>
          </div>
        </div>
        <h2 className='title'>Skills</h2>
        <div className="tech">
          <div className="item">
            <img src={react} alt="" />
            <p>REACT</p>
          </div>
          <div className="item">
            <img src={reactnative} alt="" />
            <p>REACT NATIVE</p>
          </div>
          <div className="item">
            <img src={js} alt="" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="item">
            <img src={sql} alt="" />
            <p>MySQL</p>
          </div>
          <div className="item">
            <img src={git} alt="" />
            <p>GIT</p>
          </div>
          <div className="item">
            <img src={github} alt="" />
            <p>GITHUB</p>
          </div>
          <div className="item">
            <img src={html} alt="" />
            <p>HTML 5</p>
          </div>
          <div className="item">
            <img src={css} alt="" />
            <p>CSS 3</p>
          </div>
          <div className="item">
            <img src={bootstrap} alt="" />
            <p>BOOTSTRAP</p>
          </div>
          <div className="item">
            <img src={figma} alt="" />
            <p>FIGMA</p>
          </div>
          <div className="item">
            <img src={unity} alt="" />
            <p>UNITY</p>
          </div>
        </div>
    </section>
    {/* <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div> */}
    {/* <hr /> */}
    </div>
  )
}
