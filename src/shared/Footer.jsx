import { Link } from "react-router-dom"
import logo from '../assets/FooterLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div>
      <div className="bg-emerald-700 py-8 px-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 lg:gap-20 sm:grid-cols-2 md:grid-cols-3">
          <div className="lg:w-4/5">
            <img src={logo} alt="Detector Mania" className="mb-3"/>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore expedita aliquid doloremque pariatur in aliquam rerum accusamus nemo aut.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Categorie</h2>
            <ul className="flex flex-col gap-2">
              <li><Link className="hover:underline hover:text-gray-300 transition-all text-white" to={''}>News</Link></li>
              <li><Link className="hover:underline hover:text-gray-300 transition-all text-white" to={''}>Metal Detecting</Link></li>
              <li><Link className="hover:underline hover:text-gray-300 transition-all text-white" to={''}>Metal Detector per Tutti</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Link Utili</h2>
            <ul className="flex flex-col gap-2">
              <li><Link className="hover:underline hover:text-gray-300 transition-all text-white" to={''}>Chi Siamo</Link></li>
              <li><Link className="hover:underline hover:text-gray-300 transition-all text-white" to={''}>Contatti</Link></li>
              <li><Link className="hover:underline hover:text-gray-300 transition-all text-white" to={''}>Ultimi articoli</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4 px-2 text-white">
        <p className="text-xs text-center">Copyrights <FontAwesomeIcon icon={faCopyright} /> {year} <span className="font-semibold">Detector Mania</span> | Lorem ipsum dolor sit. | Privacy e Cookie Policy - Redazione - design by <span className="font-semibold">Cromia</span></p>
      </div>
    </div>
    
  )
}

export default Footer