import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SceltiSlider = () => {
    const sliderRef = useRef(null);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
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
        <div className='container mx-auto py-8'>
            <div className='flex flex-col lg:flex-row items-start justify-between lg:items-center'>
                <h2 className="text-3xl md:text-5xl font-bold text-green-700">Scelti per te...</h2>
                <div className='flex items-center self-end'>
                    <button
                        onClick={prev}
                        className='mx-2 bg-emerald-600 text-white text-lg py-2 px-4 rounded-md'
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        onClick={next}
                        className='mx-2 bg-emerald-600 text-white text-lg py-2 px-4 rounded-md'
                    >
                       <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
            <Slider ref={sliderRef} {...settings} className='pt-12'>
                {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className='px-2'>
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
                            <img
                                src={`https://via.placeholder.com/300x400?text=Image+${item}`}
                                alt={`Placeholder ${item}`}
                                className='w-full h-64 object-cover'
                            />
                            <div className='p-4 bg-gray-900 bg-opacity-50'>
                                <h3 className='text-white font-bold text-2xl mb-2'>Nokta Makro The Legend</h3>
                                <p className='text-white font-extralight'>Recensioni</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SceltiSlider;
