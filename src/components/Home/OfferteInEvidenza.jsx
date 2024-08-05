import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
import amazon from "../../assets/amazon.png";
import article from "../../assets/img_article_1.png";
import article2 from "../../assets/img_article_2.jpg";
import { Link } from "react-router-dom";

const SliderComponent = () => {
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
                centerMode: false,  // Disable centering
                centerPadding: '0px', // Disable padding on both sides
                variableWidth: true, // Enable custom width
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
    <div className="container mx-auto py-8">
      <div className='flex flex-col lg:flex-row items-start justify-between lg:items-center'>
        <h2 className="text-3xl md:text-5xl font-bold text-green-700">
          Offerte in evidenza
        </h2>
        <div  className='flex items-center self-end'>
          <p className="text-green-700 font-bold mr-4 uppercase text-xl">
            Tutte le Offerte
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
          <div key={item} className="px-2" style={{ width: 'calc(100vw - 180px)' }}>
            <div className="bg-white rounded-xl cursor-pointer shadow-lg border-4 border-emerald-300 hover:border-emerald-400 transition-all">
              <img
                src={`https://via.placeholder.com/300x400?text=Image+${item}`}
                alt={`Placeholder ${item}`}
                className="w-full h-64 object-cover"
              />
              <div className="flex flex-col items-center gap-3">
                <h3 className=" font-bold text-3xl mb-2">
                  Nokta FindX
                </h3>
                <p className=" text-3xl font-extralight">
                  <FontAwesomeIcon icon={faEuroSign} /> 179,90
                </p>
                <div className="p-3 w-full">
                  <div className="flex items-center justify-between bg-yellow-400 hover:bg-yellow-500 transition-all py-2 px-4 rounded-xl w-full">
                    <h3 className="font-semibold">Offerta su</h3>
                    <div className="flex items-center gap-3 ">
                      <img src={amazon} alt="" className="w-16" />
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex flex-col gap-8 my-12">
        <Link>
            <div className="flex items-center gap-5 cursor-pointer hover:opacity-70">
              <img
                src={article}
                alt=""
                className="rounded-md w-24 lg:w-44 h-24 lg:h-44 object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs">Emilio G</p>
                <p className=" text-lg leading-none lg:text-3xl font-bold ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quam, praesentium.
                </p>
                <p className="bg-green-300 px-4 md:px-8 py-1 text-emerald-600 rounded-xl w-fit text-xs md:text-sm font-extralight">
                  Curiosita
                </p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="flex items-center gap-5 cursor-pointer hover:opacity-70">
              <img
                src={article2}
                alt=""
                className="rounded-md w-24 lg:w-44 h-24 lg:h-44 object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs">Emilio G</p>
                <p className=" text-lg leading-none lg:text-3xl font-bold ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quam, praesentium.
                </p>
                <p className="bg-green-300 px-4 md:px-8 py-1 text-emerald-600 rounded-xl w-fit text-xs md:text-sm font-extralight">
                  Curiosita
                </p>
              </div>
            </div>
          </Link>
      </div>
    </div>
  );
};

export default SliderComponent;
