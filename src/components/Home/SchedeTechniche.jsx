import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SchedeTechniche = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: true, // Enable custom width for mobile screens
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="container mx-auto py-8 mb-20">
      <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-green-700">Schede tecniche</h2>
        <div className="flex items-center self-end">
          <p className="text-green-700 font-bold mr-4 uppercase text-lg">
            Tutte le schede tecniche
          </p>
          <button
            onClick={prev}
            className="mx-2 bg-emerald-600 text-white text-lg py-2 px-4 rounded-md"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={next}
            className="mx-2 bg-emerald-600 text-white text-lg py-2 px-4 rounded-md"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} className="pt-12">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="px-2"
            style={{ width: 'calc(100vw - 180px)' }} // Full width minus a portion for the next slide
          >
            <div className="bg-white rounded-xl shadow-lg cursor-pointer border-4 border-emerald-300 hover:border-emerald-400 transition-all">
              <img
                src={`https://via.placeholder.com/300x400?text=Image+${item}`}
                alt={`Placeholder ${item}`}
                className="w-full h-64 object-cover"
              />
              <div className="flex flex-col items-center gap-3 p-3">
                <h3 className="text-2xl font-bold text-center">Scheda Tecnica Nokta FindX</h3>
                <button className="bg-emerald-500 hover:bg-emerald-600 w-full text-white uppercase font-semibold py-2 px-4 rounded-xl transition-all">
                  Vai alla scheda
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SchedeTechniche;
