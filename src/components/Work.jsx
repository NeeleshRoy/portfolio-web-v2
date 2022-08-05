import React from 'react'
import { useNavigate } from 'react-router-dom'
import works from '../data/work.json'

function Work() {
    const navigate = useNavigate()
  return (
    <section className='work'>
        <button onClick={() => navigate(-1)} className="back">Back</button>
        <div className='timeline-area'>
            {
                works.map(work => (
                    <div className='timeline-card'>
                        <h1>{work.client}</h1>
                        <h2>{work.company}</h2>
                        <h3>{work.date}</h3>
                        <i>{work.position}</i>
                        <ul className='timeline-card__details'>
                            {
                                work.details.map(details => (
                                    <li>{details}</li>
                                ))
                            }
                        </ul>
                        <ul className='timeline-card__visitLinks'>
                            <b>Visit client sites:</b>
                            {
                                work.links.map(link => (
                                    <li>
<<<<<<< HEAD
                                        <a href={link.url} target='_blank' rel="noreferrer">{link.name}</a>
=======
                                        <a href={link.url} target='_blank' >{link.name}</a>
>>>>>>> f69ac8f3ed53d236e9916316409fc70bf95f19d1
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Work