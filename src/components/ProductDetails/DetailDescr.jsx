import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import item from "../../assets/metal_3.png";
import { faChevronRight, faEuroSign, faEye } from "@fortawesome/free-solid-svg-icons";
import StickyRightSide from "../Home/StickyRightSide";
import RatingSection from "./RatingSection";
import { Link } from "react-router-dom";
import article from "../../assets/img_article_1.png";
import article2 from "../../assets/img_article_2.jpg";
import Specifiche from "./Specifiche";

const DetailDescr = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-1/2 lg:w-2/3">
          <div className="">
            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="flex items-center justify-center md:flex-col py-6 px-3 md:pb-10 rounded-xl shadow-lg  border-4 border-emerald-300 h-fit hover:border-emerald-400 transition-all">
                  <img
                    src={item}
                    alt={"item"}
                    className=" w-20 md:w-32 mx-auto object-cover"
                  />
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="font-bold text-xl md:text-2xl">Miglior prezzo</h3>
                    <p className=" text-2xl font-bold text-red-600">
                      179,90 <FontAwesomeIcon icon={faEuroSign} />
                    </p>
                    <div className=" w-full">
                      <div className="flex cursor-pointer items-center justify-between bg-yellow-400 hover:bg-yellow-500 transition-all py-2 px-4 rounded-xl w-full">
                        <h3 className="font-semibold">Scopri l'offerta</h3>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">da Amazon</p>
                  </div>
                </div>
                <div className=" lg:col-span-2">
                  <div className="grid grid-cols-3 gap-2 md:gap-5 mb-12">
                    <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                      <FontAwesomeIcon icon={faEye} className="text-base md:text-xl" />
                      <div>
                        <h3 className="text-sm md:text-lg uppercase font-semibold">LCD</h3>
                        <p className="uppercase text-xs">Disponsible</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                      <FontAwesomeIcon icon={faEye} className="text-base md:text-xl" />
                      <div>
                        <h3 className="text-sm md:text-lg uppercase font-semibold">LCD</h3>
                        <p className="uppercase text-xs">Disponsible</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                      <FontAwesomeIcon icon={faEye} className="text-base md:text-xl" />
                      <div>
                        <h3 className="text-sm md:text-lg uppercase font-semibold">LCD</h3>
                        <p className="uppercase text-xs">Disponsible</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                      <FontAwesomeIcon icon={faEye} className="text-base md:text-xl" />
                      <div>
                        <h3 className="text-sm md:text-lg uppercase font-semibold">LCD</h3>
                        <p className="uppercase text-xs">Disponsible</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                      <FontAwesomeIcon icon={faEye} className="text-base md:text-xl" />
                      <div>
                        <h3 className="text-sm md:text-lg uppercase font-semibold">LCD</h3>
                        <p className="uppercase text-xs">Disponsible</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                      <FontAwesomeIcon icon={faEye} className="text-base md:text-xl" />
                      <div>
                        <h3 className="text-sm md:text-lg uppercase font-semibold">LCD</h3>
                        <p className="uppercase text-xs">Disponsible</p>
                      </div>
                    </div>
                  </div>
                  <div className=" space-y-3">
                    <p className="text-sm sm:text-base md:text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse ratione inventore optio commodi similique consequatur
                      labore necessitatibus, maxime porro delectus iusto. Odit
                      explicabo numquam iste unde sed enim eos non, quis est
                      nostrum consectetur quam sapiente, voluptatibus, magni
                      ducimus reiciendis?
                    </p>
                    <p className="text-sm sm:text-base md:text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse ratione inventore optio commodi similique consequatur
                      labore necessitatibus, maxime porro delectus iusto. Odit
                      explicabo numquam iste unde sed enim eos non, quis est
                      nostrum consectetur quam sapiente, voluptatibus, magni
                      ducimus reiciendis?
                    </p>
                    <p className="text-sm sm:text-base md:text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse ratione inventore optio commodi similique consequatur
                      labore necessitatibus, maxime porro delectus iusto. Odit
                      explicabo numquam iste unde sed enim eos non, quis est
                      nostrum consectetur quam sapiente, voluptatibus, magni
                      ducimus reiciendis?
                    </p>
                    <p className="text-sm sm:text-base md:text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse ratione inventore optio commodi similique consequatur
                      labore necessitatibus, maxime porro delectus iusto. Odit
                      explicabo numquam iste unde sed enim eos non, quis est
                      nostrum consectetur quam sapiente, voluptatibus, magni
                      ducimus reiciendis?
                    </p>
                  </div>
                  <div className="w-full my-12">
                    <RatingSection />
                  </div>
                  <Specifiche />
                  <div className="flex flex-col gap-5 my-12">
                    <Link>
                      <div className="flex items-center gap-4 cursor-pointer hover:opacity-70">
                        <img
                          src={article}
                          alt=""
                          className="rounded-md w-28 h-28 object-cover"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-xs">Emilio G</p>
                          <p className="font-bold leading-5 hover:underline">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quam, praesentium.
                          </p>
                          <p className="bg-green-300 px-2 py- rounded-md w-fit text-xs font-extralight">
                            Curiosta
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link>
                      <div className="flex items-center gap-4 cursor-pointer hover:opacity-70">
                        <img
                          src={article2}
                          alt=""
                          className="rounded-md w-28 h-28 object-cover"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-xs">Emilio G</p>
                          <p className="font-bold leading-5 hover:underline">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quam, praesentium.
                          </p>
                          <p className="bg-green-300 px-2 py- rounded-md w-fit text-xs font-extralight">
                            Curiosta
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link>
                      <div className="flex items-center gap-4 cursor-pointer hover:opacity-70">
                        <img
                          src={article}
                          alt=""
                          className="rounded-md w-28 h-28 object-cover"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-xs">Emilio G</p>
                          <p className="font-bold leading-5 hover:underline">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quam, praesentium.
                          </p>
                          <p className="bg-green-300 px-2 py- rounded-md w-fit text-xs font-extralight">
                            Curiosta
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link>
                      <div className="flex items-center gap-4 cursor-pointer hover:opacity-70">
                        <img
                          src={article2}
                          alt=""
                          className="rounded-md w-28 h-28 object-cover"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-xs">Emilio G</p>
                          <p className="font-bold leading-5 hover:underline">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quam, praesentium.
                          </p>
                          <p className="bg-green-300 px-2 py- rounded-md w-fit text-xs font-extralight">
                            Curiosta
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky component on the right */}
        <div className="relative w-full md:w-1/2 lg:w-1/3">
          <StickyRightSide />
        </div>
      </div>
    </div>
  );
};

export default DetailDescr;
