import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagramSquare, FaEnvelope } from 'react-icons/fa'
import Toast from './Toast'

function Home() {
  const [shouldRender, setShouldRender] = useState(false)
  const copyToClipBoard = (e) => {
    try {
      window.navigator.clipboard.writeText('neeleshroy.2020@gmail.com')
      setShouldRender(true)
    } catch (error) {
      console.error(error, e)
      setShouldRender(false)
    }
  }

  useEffect(() => {
    if (shouldRender) {
      setTimeout(() => setShouldRender(false), 5000)
    }
  }, [shouldRender])


  return (
    <div className="home">
      { shouldRender && <Toast inProp={shouldRender} /> }
      <div className="two-column">
        <div className="column">
          <div
            className='hero-header'>
              Hello 👋🏼. My name is
              <p className='header-highlight'>Neelesh Roy</p>
              A Web engineer
              <Link to='/work' className='hero-cta'>View my work</Link>
              <div className="social">
                <ul>
                  <li>
<<<<<<< HEAD
                    <a href="https://www.linkedin.com/in/neeleshroy/" target='_blank' rel='noreferrer noopener' ><FaLinkedin /></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/neel.bongo/" target='_blank' rel='noreferrer noopener' ><FaInstagramSquare /></a>
                  </li>
                  <li>
                    <a href="https://github.com/NeeleshRoy" target='_blank' rel='noreferrer noopener' ><FaGithub /></a>
=======
                    <a href="https://www.linkedin.com/in/neeleshroy/" target='_blank' ><FaLinkedin /></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/neel.bongo/" target='_blank' ><FaInstagramSquare /></a>
                  </li>
                  <li>
                    <a href="https://github.com/NeeleshRoy" target='_blank' ><FaGithub /></a>
>>>>>>> f69ac8f3ed53d236e9916316409fc70bf95f19d1
                  </li>
                  <li><button onClick={() => copyToClipBoard()}><FaEnvelope /></button></li>
                </ul>
              </div>
          </div>
        </div>
        <div className="column">
          <div className='circle'>
            <div className="hero-lottie">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_kkflmtur.json"
                background="transparent"
                speed="1"
                style={{width: "400px", height: "400px"}}
                loop
                autoplay>
              </lottie-player>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home