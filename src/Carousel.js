import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'; // Custom CSS for styling
import CarouselSlide from "./CarouselSlide";
import { useState, useEffect } from "react";


const Carousel = () => {

    const [slidesToShow, setSlidesToShow] = useState(4.5); // Default to 4.5 slides

    useEffect(() => {
        const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 600) {
            setSlidesToShow(2); 
        } else if (screenWidth > 600 && screenWidth <=800) {
            setSlidesToShow(3); 
        } else {
            setSlidesToShow(4.5);
        }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial call to set number of slides on page load
        handleResize();

        // Cleanup function to remove event listener
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        className: 'jss1497',
        prevArrow: <img src="../assets/leftArrow.svg" alt="Previous"/>,
        nextArrow: <img src="../assets/rightArrow.svg" alt="Next"/>,
      };
      

    return (
        <>
            <div className="MuiContainer-root jss1361 MuiContainer-maxWidthLg">
                <div className="MuiGrid-root MuiGrid-Container">
                    <div className="MuiGrid-root jss1491 MuiGrid-container MuiGrid-justify-content-xs-space-between">
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6">
                            <p className="MuiTypography-root jss1492 MuiTypography-body1">Stock Insights</p>
                        </div>
                    </div>
                    <p className="MuiTypography-root jss9999 MuiTypography-body1">Top Gainers</p>

                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                   
                        <Slider {...settings}>
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                            <CarouselSlide />
                        </Slider>
                                           
                    </div>

                </div>
            </div>
        </>
    );

}

export default Carousel;




