import Products from "../components/SchedeTechniche/Products"
import ShchedeHeader from "../components/SchedeTechniche/ShchedeHeader"
import Sidebar from "../components/SchedeTechniche/Sidebar"
import { useTheme } from '../shared/ThemeContext'; // Adjust path as necessary

const SchedeScreen = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        <section className="max-w-7xl mx-auto">
            <ShchedeHeader />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 my-20">
                <div className=" md:col-span-1">
                    <Sidebar />
                </div>
                <div className="md:col-span-3">
                    <Products />
                </div>
            </div>
        </section>
    </div>
  )
}

export default SchedeScreen