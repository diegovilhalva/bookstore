import BestSellingBook from "../components/BestSellingBook/BestSellingBook"
import Brands from "../components/Brands/Brands"
import FeaturesBooks from "../components/FeatureBooks/FeaturesBooks"
import Header from "../components/Header/Header"


const Home = () => {
  return (
    <div>
      <Header />
      <Brands />
      <FeaturesBooks/>
      <BestSellingBook/>
    </div>
  )
}

export default Home