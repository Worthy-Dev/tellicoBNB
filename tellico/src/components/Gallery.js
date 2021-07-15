import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
// Images
import dogwash from "../images/dogWash.JPG";
import greatDane from "../images/greatDane.JPG";
import group from "../images/groupPhoto.JPEG";
import sign from "../images/mainSign.JPG";
import norman from "../images/normanTheBully.JPG";
import grooming1 from "../images/grooming1.png";
import grooming3 from "../images/grooming3.JPG";
import grooming4 from "../images/grooming4.png";
import grooming5 from "../images/grooming5.jpg";



const Gallery = () => {
  return (
    <GalleryContainer>
      <h2 id="boarding">Gallery</h2>
      <Carousel>
        <div>
          <img src={sign} alt="Tellico sign" />
        </div>
        <div>
          <img src={group} alt="owner with horse and dog" />
        </div>
        <div>
          <img src={norman} alt="bull dog" />
        </div>
        <div>
          <img src={dogwash} alt="dog wash" />
        </div>
        <div>
          <img src={grooming3} alt="groomed dog" />
        </div>
        <div>
          <img src={greatDane} alt="great dane" />
        </div>
        <div>
          <img src={grooming5} alt="groomed dog" />
        </div>
        <div>
          <img src={grooming1} alt="groomed dog" />
        </div>
        <div>
          <img src={grooming4} alt="groomed dog" />
        </div>
      </Carousel>
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`

h2{
    padding: 1rem;
    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
}  
.carousel {
    .control-dots .dot {
        border: .5px solid #595b57;
        box-shadow: none;
        width: 9px;
        height: 9px;
    }
    .control-arrow {
        &:hover {
        background: none;
        }
    }

    
   button.control-arrow.control-next,  button.control-arrow.control-prev{
            padding: .5rem;
    }

    .control-next.control-arrow:before {
        border-left: 10px solid #595b57;
        
    }
    .control-prev.control-arrow:before {
        border-right: 10px solid #595b57;
    }

    .thumbs-wrapper {
        button{
            padding: 0 .2rem; 
        }
    }

    .slide {
      .legend {
        background: none;
      }
      img {
        margin: 0 0 2.5rem;
        width: 60%;
        border-radius: .2rem;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
      }
    }
    .carousel-status {
      display: none;
    }

    .thumb.selected, .thumb:hover {
        border: 1.8px solid #595b57;
    }

    .thumbs {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
  }

  @media (min-width: 600px) {
      
    .carousel {
        /* height: 60vh; */
        .control-prev.control-arrow:before, .control-next.control-arrow:before  {
        margin: 0 4rem;
        }
        .slide {
            img {
                width: 40%;
            }
        }
        button.control-arrow.control-next,  button.control-arrow.control-prev{
            padding: 3rem;
        }
    }
  }
`;
export default Gallery;
