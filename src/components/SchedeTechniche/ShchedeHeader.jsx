import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShchedeHeader = () => {
  return (
    <div>
      <section className="mb-0 md:mb-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between">
          <h1 className="text-3xl md:text-5xl font-bold">Schede techniche</h1>
          <div className="flex items-center bg-emerald-100 rounded-full px-4 py-2 shadow-md w-full max-w-md">
            <input
              type="text"
              placeholder="Cerca un modello di device..."
              className="bg-transparent outline-none w-full"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShchedeHeader;
