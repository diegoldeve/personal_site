import React from 'react'
import '../projects.css'
import login from '../assets/login.jpeg';
import spotify from '../assets/spot.jpeg'
import weather from '../assets/clima.jpeg'
import piedra from '../assets/piedra.jpeg'
import pelis from '../assets/pelis.jpeg'
import proam from '../assets/native-proam.jpeg'
import gifs from '../assets/native-gif.jpeg'
import kiino from '../assets/kiino.jpeg'
import reactnative from '../assets/reactnative.png'


const Projects = () => {
    /*movies, weather (), spotify (), e-commerce, landing page, capital(info countries) 
    conversor criptos, login, rock papper scissors, RAK, cotizador préstamos
    safelock*/
  return (
    <div id='projects'>
    {/* <h2 className="title">Projects</h2> */}
    <div className='projects'>
    <h3>Projects</h3>
      <div className="projects-items">

      <div className="project">
      <h2>APP MOBILE</h2>
        <h2 style={{lineHeight:1.5}}>Procuraduría del Medio Ambiente Michoacan</h2>
        {/* <p>A website where you can play your favorites songs</p> */}
        {/* <a href='https://diegoldeve.github.io/spotify_app/' target='_blank'><button>See proyect</button></a>
        <a href='https://github.com/diegoldeve/spotify_app' target='_blank'><button>See repository</button></a> */}
        <img src={reactnative} alt="" className='reactnative'/>
        <img src={proam} alt="" className='spotify'/>
      </div>
      <div className="project">
        <h2>Gif APP</h2>
        {/* <p>A website where you can play your favorites songs</p> */}
        {/* <a href='https://diegoldeve.github.io/spotify_app/' target='_blank'><button>See proyect</button></a>
        <a href='https://github.com/diegoldeve/spotify_app' target='_blank'><button>See repository</button></a> */}
        <img src={reactnative} alt="" className='reactnative'/>
        <img src={gifs} alt="" className='spotify'/>
      </div>

      <div className="project">
        <h2>Kiino Website</h2>
        {/* <p>A website where you can play your favorites songs</p> */}
        <a href='https://kiino-cozumel.com/' target='_blank'><button>See proyect</button></a>
        {/* <a href='https://github.com/diegoldeve/spotify_app' target='_blank'><button>See repository</button></a> */}
        <img src={kiino} alt="" className='spotify'/>
      </div>
      <div className="project">
        <h2>Spotify API</h2>
        {/* <p>A website where you can play your favorites songs</p> */}
        <a href='https://diegoldeve.github.io/spotify_app/' target='_blank'><button>See proyect</button></a>
        <a href='https://github.com/diegoldeve/spotify_app' target='_blank'><button>See repository</button></a>
        <img src={spotify} alt="" className='spotify'/>
      </div>

      <div className="project">
        <h2>Weather APP</h2>
        <a href='https://diegoldeve.github.io/weather_app/' target='_blank'><button>See proyect</button></a>
        <a href='https://github.com/diegoldeve/weather_app' target='_blank'><button>See repository</button></a>
        <img src={weather} alt="" className='weather'/>

      </div>
      <div className="project">
        <h2>Rock Paper & Scissors</h2>
        <a href='https://diegoldeve.github.io/Rock_Paper_Scissors_REACT/' target='_blank'><button>See proyect</button></a>
        <a href='https://github.com/diegoldeve/Rock_Paper_Scissors_REACT' target='_blank'><button>See repository</button></a>
        <img src={piedra} alt="" className='weather'/>

      </div>
      <div className="project">
        <h2>Movies API</h2>
        <a href='https://diegoldeve.github.io/popular_movies_api/' target='_blank'><button>See proyect</button></a>
        <a href='https://github.com/diegoldeve/popular_movies_api' target='_blank'><button>See repository</button></a>
        <img src={pelis} alt="" className='weather'/>

      </div>
      <div className="project">
        <h2>E-commerce</h2>
        
        <a href='#'><button>See proyect</button></a>
        <a href='#'><button>See repository</button></a>
      </div>
      <div className="project">
        <h2>Landing page</h2>
        <a href='#'><button>See proyect</button></a>
        <a href='#'><button>See repository</button></a>
      </div>
      <div className="project">
        <h2>Login</h2>
        {/* <img src={login} alt="" /> */}
        <a href='#'><button>See proyect</button></a>
        <a href='#'><button>See repository</button></a>
      </div>
      <div className="project">
        <h2>Cotizador de préstamos</h2>
        <a href='#'><button>See proyect</button></a>
        <a href='#'><button>See repository</button></a>
      </div>
      </div>
      </div>
      </div>
      
  )
}
export {Projects}