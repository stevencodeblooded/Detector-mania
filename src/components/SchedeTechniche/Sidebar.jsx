import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Sidebar = () => {
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isDisplayOpen, setIsDisplayOpen] = useState(false);
  const [isVoteOpen, setIsVoteOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isFrontCameraOpen, setIsFrontCameraOpen] = useState(false);
  const [isRamOpen, setIsRamOpen] = useState(false);
  const [isMemoryOpen, setIsMemoryOpen] = useState(false);
  const [isOsOpen, setIsOsOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  return (
    <div className="hidden md:block">
      <h1 className="uppercase font-semibold text-lg mb-5">Filtri</h1>
      <div className="border-b pb-4">
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

      <div className="border-b py-4">
        <button
          className="flex justify-between w-full"
          onClick={() => setIsFrontCameraOpen(!isFrontCameraOpen)}
        >
          <span className="uppercase font-semibold text-lg">
            FOTOCAMERA FRONTALE
          </span>
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

      <div className="border-b py-4">
        <button
          className="flex justify-between w-full"
          onClick={() => setIsOsOpen(!isOsOpen)}
        >
          <span className="uppercase font-semibold text-lg">
            SISTEMA OPERATIVO
          </span>
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

      <div className="py-4">
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
  );
};

export default Sidebar;
