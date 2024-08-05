import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProductHeader = () => {
  return (
    <div className="flex items-center justify-between mt-12 mb-8">
        <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Nokta FIndX</h1>
            <p className="text-lg font-semibold text-gray-400">Scheda Tecnica</p>
        </div>
        <div className="hidden md:flex items-center bg-emerald-100 rounded-full px-4 py-2 shadow-md w-full max-w-md">
            <input
              type="text"
              placeholder="Cerca un modello di device..."
              className="bg-transparent outline-none w-full"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5 text-gray-500 cursor-pointer" />
        </div>
    </div>
  )
}

export default ProductHeader