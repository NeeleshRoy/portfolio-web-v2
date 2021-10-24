import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <section className="home">
            <h1 className="hero">Hi, My Name is <span className="highlight-2">Neelesh</span>. I&#39;m a <span className="highlight-1"> UX/UI </span> designer with coding superpowers. I <span className="highlight-3">love</span> to design digital experiences.</h1>
            <ul>
                <li>Skills:</li>
                <li>Contextual Inquiry,</li>
                <li>Journey Mapping,</li>
                <li>User Tasks and flows,</li>
                <li>Affinity Diagram,</li>
                <li>Information Architecture,</li>
                <li>Rapid Prototyping,</li>
                <li>Wireframing,</li>
                <li>Visual Design,</li>
                <li>A/B Testing,</li>
                <li>HTML 5,</li>
                <li>CSS 3, SASS,</li>
                <li>ReactJS,</li>
                <li>Redux,</li>
                <li>Accessibility,</li>
                <li>Performance,</li>
                <li>Build systems</li>
            </ul>
            <NavLink to="/" aria-role="button" className="button-cta"> See Portfolio </NavLink>
        </section>
    )
}

export default Home
