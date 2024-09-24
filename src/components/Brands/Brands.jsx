import { brandsData } from "../../data/data"
import "./Brands.css"

const Brands = () => {
    
  return (
    <section className="brands">
        <div className="container brands-container">
            {
                brandsData.map(({id,img}) => (
                    <div className="brand" key={id}>
                        <img src={img} alt="" />
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Brands