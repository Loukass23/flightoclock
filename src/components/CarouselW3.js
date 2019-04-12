import Img from '../images/H&N Travel Pic/Phili.jpg';

import './carousel.css';

import React from 'react'

function CarouselW3() {

    var slideIndex = [1, 1];
    var slideId = ["mySlides1", "mySlides2"]


    const plusSlides = (n, no) => {
        showSlides(slideIndex[no] += n, no);
    }

    const showSlides = (n, no) => {
        console.log({ n, no })
        var i;
        var x = document.getElementsByClassName(slideId[no]);
        console.log({ x })
        if (n > x.length) { slideIndex[no] = 1 }
        if (n < 1) { slideIndex[no] = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex[no] - 1].style.display = "block";
    }

    return (

        <div className="slideshow-container">
            {showSlides(1, 0)}
            {showSlides(1, 1)}
            <div className="mySlides2">
                <img src={Img} style={{ width: "100%" }} />
            </div>

            <div className="mySlides2">
                <img src={Img} style={{ width: "100%" }} />
            </div>

            <div className="mySlides2">
                <img src={Img} style={{ width: "100%" }} />
            </div>

            <a className="prev" onclick={plusSlides(-1, 1)}>&#10094;</a>
            <a className="next" onclick={plusSlides(1, 1)}>&#10095;</a>
        </div>
    )
}

export default CarouselW3

