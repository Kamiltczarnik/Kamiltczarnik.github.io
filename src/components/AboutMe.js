import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./AboutMe.css";

function AboutMe() {
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
            <div className="text-column">
              <h3>Technical</h3>
              <p>
                Hello! My name is Kamil Czarnik, and I'm a Computer Science
                student at the University of Illinois Urbana-Champaign. I am
                passionate about software development and enjoy working on
                challenging projects! I have experience with full-stack
                development, data analysis, and machine learning and I greatly
                enjoy using my creative side to solve problems and create visually
                appealing applications.
              </p>
            </div>
            <div className="divider"></div>
            <div className="text-column">
              <h3>Non-Technical</h3>
              <p>
                Outside of programming, I prioritize staying active through
                weightlifting, running, playing water polo.
                I currently play for the UIUC club water polo team have experience as an Offical.
                 I'm also a big NFL fan, Bear Down! I enjoy getting to know new people and am always up for
                a good conversation!
              </p>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="about-me-image">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false} // Removes slide numbers
              interval={3300}
              transitionTime={1000}
              showArrows={false} // Hides navigation arrows
            >
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
