import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss"
const Scroll = () => {
    const refAboutUs = useRef(null);
    
    

    useEffect(() => {
      const handleScroll = () => {  
        const aboutUsEl = refAboutUs.current;
        const currentScrollPosition = window.scrollY;
    
        const elScrollPosition = aboutUsEl.offsetTop;
        const currentWindowHeight = window.innerHeight;
        const elCurrentHeight = aboutUsEl.offsetHeight;
    
        const targetScrollPosition =
          elScrollPosition - currentWindowHeight + elCurrentHeight;
    
    
        if (currentScrollPosition >= targetScrollPosition) {
            aboutUsEl.classList.add("active");
        }

      }
        
      document.addEventListener("scroll",handleScroll);
    
      return () => {
        document.removeEventListener("scroll",handleScroll);
      }
    }, [])
    

  return (
    <Container>
      {[...new Array(15)].map((item, i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
          neque illo non laboriosam enim sint nulla fugiat odit temporibus.
        </p>
      ))}


        <p className={"about-us"} ref={refAboutUs}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
          neque illo non laboriosam enim sint nulla fugiat odit temporibus.
        </p>


    {[...new Array(15)].map((item, i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
          neque illo non laboriosam enim sint nulla fugiat odit temporibus.
        </p>
      ))}
      


      
    </Container>
    

  );
};

export default Scroll;
