import Comparison from "../components/Confronto/Comparison"
import HeaderConfronto from "../components/Confronto/HeaderConfronto"
import { useTheme } from '../shared/ThemeContext'; // Adjust path as necessary

const ConfrontoScreen = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        <HeaderConfronto />
        <Comparison />
    </div>
  )
}

export default ConfrontoScreen