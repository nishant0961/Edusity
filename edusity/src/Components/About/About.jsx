import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from  '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src = {about_img} alt = "" className='about-img' />
        <img src = {play_icon} alt = "" className='play-icon' />
      </div>


      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today!</h2>
        <p>A university website serves as the digital gateway to academic excellence, providing a virtual space that encapsulates the institution's values, diversity, and commitment to education .<br/> Through an intuitive interface, it navigates students, faculty, and visitors on a journey of discovery, offering insights into programs, research initiatives, and campus life. With engaging multimedia content, timely updates, and a user-friendly design, the university website strives to foster connectivity, inspire learning, and showcase the vibrant tapestry of knowledge and innovation that defines the academic community.</p>
        <p>Offer a dedicated section for prospective students, featuring admission procedures, application forms, deadlines, and admission criteria.</p>
      </div>
    </div>
  )
}

export default About
