import { Link } from "react-router-dom"
import { lettestArticleData } from "../../data/data"
import TitleTypeOne from "../../ui/TitleTypeOne/TitleTypeOne"
import "./LatestArticle.css"

import { ImFacebook } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
import { RiTwitterXLine } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'


const LatestArticle = () => {
    return (
        <section className="latestArticle">
            <div className="container latest-article-container">
                <TitleTypeOne title={'Latest Articles'} titleTop={'Read our articles'} />
                <div className="latest-article-content">
                    {
                        lettestArticleData.map(({  date, fbLink, id, image, inspiration, instLink, title, twitaLink, titLink }) => (
                            <article className="latest-article" key={id}>
                                <div className="article-image">
                                    <img src={image} alt="" />
                                </div>
                                <div className="article-info">
                                    <h5>{date}</h5>
                                    <Link to={titLink}>
                                        <h3>{title}</h3>
                                    </Link>
                                </div>
                                <div className="latest-article-socials">
                                    <p>{inspiration}</p>
                                    <div className="article-social">
                                        <a href={fbLink}>
                                            <ImFacebook />
                                        </a>
                                        <a href={instLink}>
                                            <FiInstagram />
                                        </a>
                                        <a href={twitaLink}>
                                            <RiTwitterXLine />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </div>
                <Link to={'*'} className="btn btn-border">
                    Read all Articles
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default LatestArticle