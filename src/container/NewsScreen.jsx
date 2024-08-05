import Introduction from "../components/News/Introduction"
import NewsContent from "../components/News/NewsContent"
import { useTheme } from '../shared/ThemeContext'; // Adjust path as necessary

const NewsScreen = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`} >
        <Introduction />
        <NewsContent />
    </div>
  )
}

export default NewsScreen