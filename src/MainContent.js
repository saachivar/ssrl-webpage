import React, { useEffect, useRef } from 'react';
import './MainContent.css';
import SwipeySlider from './SwipeySlider';


const MainContent = ({ setActiveSection, contentWrapperRef }) => {
  const sectionRefs = {
    intro: useRef(null),
    details: useRef(null),
    features: useRef(null),
    contact: useRef(null),
  };

  const handleScroll = () => {
    if (!contentWrapperRef.current) return;

    const scrollPosition = contentWrapperRef.current.scrollTop + contentWrapperRef.current.clientHeight / 2;

    Object.keys(sectionRefs).forEach((section) => {
      const sectionTop = sectionRefs[section].current.offsetTop;
      const sectionBottom = sectionTop + sectionRefs[section].current.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;
    if (contentWrapper) {
      contentWrapper.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (contentWrapper) {
        contentWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, [contentWrapperRef]);

  return (
    <div className="content-wrapper" ref={contentWrapperRef}>
      <section ref={sectionRefs.intro} className="section intro-section">
        <h2>Welcome to LEARNSat</h2>
        <p style={{fontSize:'30px',}}> LEARNSat (Low-Earth Accessible Research Network Satellite) is a new venture developed by the UGA SSRL to give high-school students an opportunity to work with CubeSat technology.</p>
        <p style={{fontSize:'30px',}}>LEARNSat is designed to overcome the hurdles of entry into CubeSat research.</p>
      </section>

      <section ref={sectionRefs.details} className="section details-section">
        <h2>Overview of LEARNSat (Drag the bar!)</h2>
        <SwipeySlider />
        
      </section>

      <section ref={sectionRefs.features} className="section features-section">
        <h2>Key Features</h2>
        <p>LEARNSat-1 will be an internal mission so that we can map out all the
requirements and face logistical problems first before we invite high schools to
participate. This would allow for more STEM students in UGA to be involved in
CubeSat development and raise awareness of satellite technology in schools. </p>
<p>
Additionally, as part of the funding we also have $2000 allocated to hosting a
competition for high schools to compete in with their research proposals, with
the best one being selected and given the funding to start developing their
project. </p>
      </section>

      <section ref={sectionRefs.contact} className="section contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or want to get involved, please contact us at <a href="mailto:ssrluga@uga.edu">ssrluga@uga.edu</a>.</p>
      </section>
    </div>
  );
};

export default MainContent;
