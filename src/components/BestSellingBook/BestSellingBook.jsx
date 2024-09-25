import TitleTypeTwo from "../../ui/TitleTypeTwo/TitleTypeTwo"
import "./BestSellingBook.css"

import TreeShape from "../../assets/treeShape.png"
import { sellingBooksData } from "../../data/data"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
const BestSellingBook = () => {

    return (
        <section className="bestSellingBook">
            <div className="treeShape">
                <img src={TreeShape} alt="" />
            </div>

            {
                sellingBooksData.map(({ id, desc, img, infoTitle, infoTitleTop, price, shopbtnLink }) => (
                    <div className="container bestselling-container" key={id}>
                        <div className="selling-book-left">
                            <img src={img} alt="" />
                        </div>
                        <div className="selling-book-right">

                            <TitleTypeTwo title={"Best selling book"} className={"sellingBookTitle"} />
                            <div><small>{infoTitleTop}</small></div>
                            <h3>{infoTitle}</h3>
                            <p>{desc}</p>
                            <h5><span>{price}</span></h5>
                            <Link to={shopbtnLink} className="btn">
                                <small>Shop it now</small>
                                <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                ))
            }

        </section>
    )
}

export default BestSellingBook