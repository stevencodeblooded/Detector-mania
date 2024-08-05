import DetailDescr from "../components/ProductDetails/DetailDescr"
import ProductHeader from "../components/ProductDetails/ProductHeader"
import RatingSection from "../components/ProductDetails/RatingSection"

const ProductDetailsScreen = () => {
  return (
    <div className=" max-w-7xl mx-auto px-3">
        <ProductHeader />
        <DetailDescr />
    </div>
  )
}

export default ProductDetailsScreen