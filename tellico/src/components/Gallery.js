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

const Gallery = () => {
  return (
    <GalleryContainer>
      <h2 id="boarding">Gallery</h2>
      <Carousel>
        <div>
          <img src={dogwash} alt="dog wash" />
          {/* <p className="legend">Caption option</p> */}
        </div>
        <div>
          <img src={greatDane} alt="great dane" />
        </div>
        <div>
          <img src={sign} alt="Tellico sign" />
        </div>
        <div>
          <img src={norman} alt="bull dog" />
        </div>
        <div>
          <img src={group} alt="owner with horse and dog" />
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
        border: .5px solid black;
        box-shadow: none;
        width: 9px;
        height: 9px;
    }
    .control-arrow:hover {
        background: none;
    }
    .control-next.control-arrow:before {
      border-left: 10px solid #212529;
    }
    .control-prev.control-arrow:before {
      border-right: 10px solid #212529;
    }

    .slide {
      .legend {
        background: none;
      }
      img {
        margin: 0 0 2.5rem;
        width: 80%;
        border-radius: .2rem;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
      }
    }
    .carousel-status {
      display: none;
    }

    .thumb {
      /* border: none; */
      .selected {
        border: none;
      }
      &:hover {
        border: none;
      }
    }
  }

  @media (min-width: 600px) {
    .carousel {
        .control-prev.control-arrow:before, .control-next.control-arrow:before  {
        margin: 0 4rem;
        }
        .slide {
            img {
                width: 33vw;
                height: 73vh;
            }
        }
        .thumbs{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
  }
   @media (min-width: 1024px) {
    .carousel {
        .control-prev.control-arrow:before, .control-next.control-arrow:before  {
        margin: 0 8rem;
        }
        .slide {
            img {
                width: 50%;
            }
        }
  }
  }
  @media (min-width: 1440px) {
    .carousel {
        .control-prev.control-arrow:before, .control-next.control-arrow:before  {
        margin: 0 16rem;
        }
        .slide {
            img {
                width: 35%;
            }
        }
  }
  } */
`;
export default Gallery;
