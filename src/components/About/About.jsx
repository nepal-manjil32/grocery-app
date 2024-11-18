import React from 'react';
import './About.css';
import about_1 from '../../assets/about_1.jpg';
import about_2 from '../../assets/about_2.jpg';
import about_3 from '../../assets/about_3.jpg';
import about_4 from '../../assets/about_4.jpg';

function About() {
  return (
    <div className='about-container'>
      <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={about_1} className="d-block w-100" alt="About section slide 1" />
          </div>
          <div className="carousel-item">
            <img src={about_2} className="d-block w-100" alt="About section slide 2" />
          </div>
          <div className="carousel-item">
            <img src={about_3} className="d-block w-100" alt="About section slide 3" />
          </div>
          <div className="carousel-item">
            <img src={about_4} className="d-block w-100" alt="About section slide 4" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default About
