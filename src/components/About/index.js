import React from 'react'
import './about.css'
import PageTitle from '../PageTitle'

function About () {
  return (
    <div className='aboutWrapper uk-width-expand uk-margin-large-bottom'>
      <div className='black-box'></div>
      <div className='gray-box'></div>
      <div
        className='white-box uk-flex uk-flex-center'
        uk-scrollspy='cls:uk-animation-slide-bottom; delay:300'
      >
        <div className='about-box'>
          <PageTitle text='About' color='dark' />
          <p className='aboutMeText uk-text-justify uk-padding'>
            Currently I am a web developer at Ibotta, responsible for email communications, in-app messages,
            and web/landing pages. I enjoy the challenges of developing custom projects(...expand on this. What type of challenges?). I also have an eye 
            for design as I transitioned from a graphic designer role working with user interfaces and prints.
            I made the change when I decided to move out of Orange County, CA where I grow up and spent most 
            of my time in. Wanting to experience life elsewhere, I chose Austin, TX as my next home for the next
            2 years, where I enrolled myself at a coding bootcamp...right when the COVID-19 lockdown started.
          </p>
          <p className='aboutMeText uk-text-justify uk-padding'>
            Notes:
            <ul>
              <li>Frontend web developer</li>
              <li>Former graphic designer</li>
              <li>Growing up in Orange County and spending most of my time there</li>
              <li>Moving to another state, and then another</li>
              <li>Getting into coding - bootcamp</li>
              <li>Favorite framework</li>
              <li>Future goals?</li>
              <li>Hobbies</li>
            </ul>

            I'm a Frontend Web Developer from SoCal (Southern California). I
            wasn't always a web developer. I was a Graphic Designer first with
            focus on print and User Interface designs. I was 2-3 years deep when
            I picked up an interest in the coding world. I realized, not only
            did I enjoy designing UIs, but I also had a lot of fun with the
            development process and building all the moving blocks to create
            something functional. So at the beginning of the pandemic in 2020, I
            decided to switch career and completed a coding bootcamp from the
            University of Texas at Austin. I knew I made the right choice when
            problem solving just clicks.
          </p>
          <p className='aboutMeText uk-text-justify uk-padding uk-padding-remove-top'>
            When I'm not coding, I enjoy drawing, working out, going on hikes,
            or simply watching movies and eating sweets, lots of it.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
