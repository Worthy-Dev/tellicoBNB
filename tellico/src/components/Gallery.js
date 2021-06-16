import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";
// Images
import dogwash from '../images/dogWash.JPG';
import greatDane from '../images/greatDane.JPG';
import group from '../images/groupPhoto.JPEG';
import sign from '../images/mainSign.JPG';
import norman from '../images/normanTheBully.JPG';

const Gallery = () => {

    return (
        <GalleryContainer>
            <Carousel>
                <div>
                    <img src={dogwash} alt="dog wash" />
                    {/* <p className="legend">Caption option</p> */}
                </div>
                <div>
                    <img src={greatDane} alt="great dane" />
                </div>
                <div>
                    <img src={sign} alt="Tellico sign"/>
                </div>
                <div>
                    <img src={norman} alt="bull dog" />
                </div>
                <div>
                    <img src={group} alt="owner with horse and dog" />
                </div>
                </Carousel>
        </GalleryContainer>
    )
}

const GalleryContainer = styled.div`
    .carousel{
        .slide{
            .legend{
                background: none;
            }
        }
        .thumb{
            border: none;
            .selected{
                border: none;
            } 
            &:hover{
                border: none;
            }
        }
    }
    
`
export default Gallery;
