import DetailDescr from "../components/ProductDetails/DetailDescr"
import ProductHeader from "../components/ProductDetails/ProductHeader"
import RatingSection from "../components/ProductDetails/RatingSection"
import { useTheme } from '../shared/ThemeContext'; // Adjust path as necessary


const ProductDetailsScreen = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <div className=" max-w-7xl mx-auto px-3">
          <ProductHeader />
          <DetailDescr />
      </div>
    </div>
  )
}

export default ProductDetailsScreen