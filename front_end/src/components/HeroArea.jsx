

import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';
function HeroArea() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      backgroundImage: 'url("http://127.0.0.1:5500/Recipe_World/delicious-master/img/bg-img/bg1.jpg")',
      title: 'Delicious Homemade Burger',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.',
    },
    {
      backgroundImage: 'url("http://127.0.0.1:5500/Recipe_World/delicious-master/img/bg-img/bg7.jpg")',
      title: 'Delicious Homemade Burger',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.',
    },
    {
      backgroundImage: 'url("http://127.0.0.1:5500/Recipe_World/delicious-master/img/bg-img/bg6.jpg")',
      title: 'Delicious Homemade Burger',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.',
    },
    {
      backgroundImage: 'url("http://127.0.0.1:5500/Recipe_World/delicious-master/img/bg-img/bg7.jpg")',
      title: 'Delicious Homemade Burger',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.',
    },
  ]; // slides array

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="hero-area">
        <div className="hero-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`single-hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: slide.backgroundImage }}
            >
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className={`hero-slides-content ${index === currentSlide ? 'active' : ''}`}>
                      <h2>{slide.title}</h2>
                      <p>{slide.description}</p>
                      <a href="#" className="btn delicious-btn">See Recipe</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HeroArea;

