import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contra from "../../assets/img_article_1.png";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Comparison = () => {
  return (
    <div className=" max-w-7xl mx-auto pt-8 pb-24 px-3 ">
      <div className="flex flex-col items-center justify-center ">
        <div className="w-full flex justify-around items-center space-y-8 md:space-y-0 md:space-x-8 border-4 border-emerald-300 hover:border-emerald-400 transition-all rounded-2xl lg:py-20 lg:px-8 py-6 px-4">
          {/* Nokta Makro FindX */}
          <div className="w-1/2">
            <div className="flex gap-5">
              <h2 className="hidden md:block text-2xl mt-5 font-bold mb-4 text-center">
                Nokta Makro FindX
              </h2>
              <div className="flex justify-center mb-4">
                <img src={contra} alt="Nokta Makro FindX" className="w-52 mx-auto" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mb-12">
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">TIPO DI CONNESSIONI</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-12">
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Vertical line and VS text */}
          <div className="flex flex-col items-center justify-center">
            <div className="border-l-2 border-emerald-300 h-16"></div>{" "}
            {/* Shorter line above VS */}
            <span className="text-2xl font-bold">VS</span>
            <div className="border-l-2 border-emerald-300 h-48"></div>{" "}
            {/* Longer line below VS */}
          </div>

          {/* Nokta The Legend */}
          <div className="w-1/2">
            <div className="flex gap-5">
              <h2 className="hidden md:block text-2xl mt-5 font-bold mb-4 text-center">
                Nokta Makro FindX
              </h2>
              <div className="flex justify-center mb-4">
                <img src={contra} alt="Nokta Makro FindX" className="w-52" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mb-12">
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">TIPO DI CONNESSIONI</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-12">
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-900 bg-gray-200 px-3 py-1 rounded-md">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-base md:text-xl"
                />
                <div>
                  <h3 className="text-sm md:text-lg uppercase font-semibold">
                    LCD
                  </h3>
                  <p className="uppercase text-xs">Disponsible</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
