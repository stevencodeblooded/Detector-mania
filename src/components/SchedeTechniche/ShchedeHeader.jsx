import { useState, useEffect, useRef } from "react";
import { faMagnifyingGlass, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShchedeHeader = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isVoteOpen, setIsVoteOpen] = useState(false);
  const [isDisplayOpen, setIsDisplayOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isFrontCameraOpen, setIsFrontCameraOpen] = useState(false);
  const [isRamOpen, setIsRamOpen] = useState(false);
  const [isMemoryOpen, setIsMemoryOpen] = useState(false);
  const [isOsOpen, setIsOsOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  const overlayRef = useRef(null);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setShowOverlay(false);
      }
    };

    if (showOverlay) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOverlay]);

  return (
    <div>
      <section className="mb-0 md:mb-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between">
          <h1 className="text-3xl md:text-5xl font-bold">Schede tecniche</h1>
          <div className="flex items-center gap-8 md:hidden">
            <p
              className="uppercase text-sm font-semibold cursor-pointer"
              onClick={toggleOverlay}
            >
              Filtra
            </p>
            <div className="flex items-center bg-emerald-100 rounded-full px-4 py-2 shadow-md w-full max-w-md">
              <input
                type="text"
                placeholder="Cerca un modello di device..."
                className="bg-transparent outline-none w-full text-black"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="h-5 w-5 text-gray-500 cursor-pointer"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center bg-emerald-100 rounded-full px-4 py-2 shadow-md w-full max-w-md">
            <input
              type="text"
              placeholder="Cerca un modello di device..."
              className="bg-transparent outline-none w-full text-black"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="h-5 w-5 text-gray-500 cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Overlay for filter */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-500 ease-in-out">
          <div
            ref={overlayRef}
            className="bg-white text-black p-6 rounded-lg shadow-lg w-11/12 max-w-md relative max-h-[90vh] overflow-y-auto"
          >
            <button
              className="absolute top-2 text-4xl right-2 text-gray-600 hover:text-gray-900"
              onClick={toggleOverlay}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Filtri</h2>
            <div className="space-y-4">
              {/* Brand */}
              <div className="border-b py-4">
                <button
                  className="flex justify-between w-full"
                  onClick={() => setIsBrandOpen(!isBrandOpen)}
                >
                  <span className="uppercase font-semibold text-lg">MARCA</span>
                  <span>
                    {isBrandOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronRight} />
                    )}
                  </span>
                </button>
                {isBrandOpen && (
                  <div className="mt-2 transition-all duration-500">
                    <label className="block">
                      <input type="checkbox" className="mr-2" />
                      Samsung
                    </label>
                    <label className="block">
                      <input type="checkbox" className="mr-2" />
                      Huawei
                    </label>
                    <button className="text-blue-500 mt-2">VEDI ALTRI</button>
                  </div>
                )}
              </div>

              {/* Vote */}
              <div className="border-b py-4">
                <button
                  className="flex justify-between w-full"
                  onClick={() => setIsVoteOpen(!isVoteOpen)}
                >
                  <span className="uppercase font-semibold text-lg">VOTO</span>
                  <span>
                    {isVoteOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronRight} />
                    )}
                  </span>
                </button>
                {isVoteOpen && (
                  <div className="mt-2 transition-all duration-500">
                    <span>MAGGIORE O UGUALE A 0</span>
                    <input type="range" min="1" max="18" className="w-full" />
                  </div>
                )}
              </div>

              {/* Display */}
              <div className="border-b py-4">
                <button
                  className="flex justify-between w-full"
                  onClick={() => setIsDisplayOpen(!isDisplayOpen)}
                >
                  <span className="uppercase font-semibold text-lg">DISPLAY</span>
                  <span>
                    {isDisplayOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronRight} />
                    )}
                  </span>
                </button>
                {isDisplayOpen && (
                  <div className="mt-2 transition-all duration-500">
                    <input type="range" min="1" max="18" className="w-full" />
                    <span>1 - 18 POLLICI</span>
                  </div>
                )}
              </div>

              {/* Camera */}
              <div className="border-b py-4">
                <button
                  className="flex justify-between w-full"
                  onClick={() => setIsCameraOpen(!isCameraOpen)}
                >
                  <span className="uppercase font-semibold text-lg">FOTOCAMERA</span>
                  <span>
                    {isCameraOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronRight} />
                    )}
                  </span>
                </button>
                {isCameraOpen && (
                  <div className="mt-2 transition-all duration-500">
                    {/* Add specific filter options for Fotocamera */}
                  </div>
                )}
              </div>

              {/* Front Camera */}
              <div className="border-b py-4">
                <button
                  className="flex justify-between w-full"
                  onClick={() => setIsFrontCameraOpen(!isFrontCameraOpen)}
                >
                  <span className="uppercase font-semibold text-lg">FOTOCAMERA FRONTALE</span>
                  <span>
                    {isFrontCameraOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronRight} />
                    )}
                  </span>
                </button>
                {isFrontCameraOpen && (
                  <div className="mt-2 transition-all duration-500">
                    {/* Add specific filter options for Fotocamera Frontale */}
                  </div>
                )}
              </div>

              {/* RAM */}
              <div className="border-b py-4">
                <button
                  className="flex justify-between w-full"
                  onClick={() => setIsRamOpen(!isRamOpen)}
                >
                  <span className="uppercase font-semibold text-lg">RAM</span>
                  <span>
                    {isRamOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronRight} />
                    )}
                  </span>
                </button>
                {isRamOpen && (
                  <div className="mt-2 transition-all duration-500">
                    {/* Add specific filter options for RAM */}
                  </div>
                )}
              </div>

              {/* Memory */}
              <div className="border-b py-4">
                <button
                  className="flex justify-between w-full"
                  onClick={() => setIsMemoryOpen(!isMemoryOpen)}
                >
                  <span className="uppercase font-semibold text-lg">MEMORIA</span>
                  <span>
                    {isMemoryOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronRight} />
                    )}
                  </span>
                </button>
                {isMemoryOpen && (
                  <div className="mt-2 transition-all duration-500">
                    {/* Add specific filter options for Memoria */}
                  </div>
                )}
              </div>

              {/* OS */}
              <div className="border-b py-4">
                <button
                  className="flex justify-between w-full"
                  onClick={() => setIsOsOpen(!isOsOpen)}
                >
                  <span className="uppercase font-semibold text-lg">SISTEMA OPERATIVO</span>
                  <span>
                    {isOsOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronRight} />
                    )}
                  </span>
                </button>
                {isOsOpen && (
                  <div className="mt-2 transition-all duration-500">
                    {/* Add specific filter options for Sistema Operativo */}
                  </div>
                )}
              </div>

              {/* Type */}
              <div className="border-b py-4">
                <button
                  className="flex justify-between w-full"
                  onClick={() => setIsTypeOpen(!isTypeOpen)}
                >
                  <span className="uppercase font-semibold text-lg">TIPO</span>
                  <span>
                    {isTypeOpen ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronRight} />
                    )}
                  </span>
                </button>
                {isTypeOpen && (
                  <div className="mt-2 transition-all duration-500">
                    {/* Add specific filter options for Tipo */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShchedeHeader;
