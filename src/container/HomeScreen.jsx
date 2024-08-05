import Hero from "../components/Home/Hero"
import Recensioni from "../components/Home/Recensioni"
import { useTheme } from '../shared/ThemeContext'; // Adjust path as necessary

const HomeScreen = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        <Hero />
        <Recensioni />
    </div>
  )
}

export default HomeScreen