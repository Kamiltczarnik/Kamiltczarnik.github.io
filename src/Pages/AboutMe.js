import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/AboutMe.css";

function AboutMe() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const images = [
    "/assets/images/Headshot.jpg",
    "/assets/images/Image_1.JPG",
    "/assets/images/Image_2.jpeg",
    "/assets/images/Image_3.JPG",
    "/assets/images/Image_5.jpeg",
  ];

  return (
    <section id="about-me" className="wrapper style2 spotlights">
      <div className="inner">
        <div className="about-me-container">
          {/* About Me Text Section */}
          <div className="about-me-text">
            {/* Technical Section */}
            <div className="text-column">
              <h3>Technical</h3>
              <p>
                Hello! My name is Kamil Czarnik, and I'm a Computer Science
                student at the University of Illinois Urbana-Champaign. I am
                passionate about software and enjoy working on challenging
                projects! I have experience with full-stack development, data
                analysis, and machine learning and I greatly enjoy using my
                creative side to solve problems and create visually appealing
                applications.
              </p>
            </div>
            <div className="divider"></div>

            {/* Non-Technical Section */}
            <div
              className={`text-column flip-card ${isFlipped ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Non-Technical</h3>
                  <p>
                    Outside of programming, I prioritize staying active through
                    weightlifting, running, and playing water polo. I currently
                    play for the UIUC club water polo team and have played for a
                    little over 6 years. I'm also a big NFL fan. Bear Down!
                  </p>
                  <ul className="actions">
                    <li>
                    <button type="button" className="button scrolly" onClick={handleFlip}>
                      Non Technical Work Experience
                    </button>
                    </li>
                  </ul>
                </div>
                <div className="flip-card-back">
                  <h4>IHSA Water Polo Official</h4>
                  <p>
                    - From May 2022 - Present
                    <br />- Maintained player safety and communicated clearly.
                  </p>
                  <h4>Driver for North Branch Pizza & Burger Co.</h4>
                  <p>
                    - From Aug 2021 - Nov 2023 <br />- Ensured timely deliveries
                    with excellent service.
                  </p>
                  <ul className="actions">
                    <li>
                    <button type="button" className="button scrolly" onClick={handleFlip}>
                      Flip me back
                    </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="about-me-image">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={3300}
              transitionTime={1000}
              showArrows={false}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
