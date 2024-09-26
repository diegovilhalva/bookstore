import BestSellingBook from "../components/BestSellingBook/BestSellingBook"
import Brands from "../components/Brands/Brands"
import FeaturesBooks from "../components/FeatureBooks/FeaturesBooks"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import LatestArticle from "../components/LatestArticle/LatestArticle"
import PopularBooks from "../components/PopularBooks/PopularBooks"
import Quote from "../components/Quote/Quote"


const Home = () => {
  return (
    <div>
      <Header />
      <Brands />
      <FeaturesBooks/>
      <BestSellingBook/>
      <PopularBooks/>
      <Quote />
      <LatestArticle />
    </div>
  )
}

export default Home