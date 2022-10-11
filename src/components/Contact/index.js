import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const contactArray = 'Contact Me'.split('')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            I am interested in opportunities - especially ambitious or large
            projects. However, if you have other request or question, don't
            hesitate to contact me using my email, phone or linkedIn.
          </p>
          <p>
            Email: <span className='highlight'>Richard.David.Jorgensen@gmail.com</span>
          </p>
          <p>
            Phone: <span className='highlight'>+1 661 - 444 - 6989</span>
          </p>
          <p>
            Linked In: <a className='highlight' href='https://www.linkedin.com/in/rdavid-jorgensen3/'>rdavid-jorgensen3</a>
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
