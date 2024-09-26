import { useState } from "react"
import { galleryData } from "../../data/data"
import TitleTypeOne from "../../ui/TitleTypeOne/TitleTypeOne"
import "./PopularBooks.css"

const PopularBooks = () => {
    
    const [activeButton,setActiveButton] = useState('all')
    const handleFilterChange = (category) => {
        setActiveButton(category)
    }
    const filterItems  = activeButton === 'all' ? galleryData : galleryData.filter((item) => item.category === activeButton)
  return (
    <section className="popularBooks">
        <div className="container popularbooks-container">
            <TitleTypeOne titleTop={"Some quality items"} title={"Popular books"} className={"popularbooks-title"} />
            <div className="filter-buttons">
                <button className={activeButton === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>
                    All
                </button>
                <button className={activeButton === 'Business' ? 'active' : ''} onClick={() => handleFilterChange('Business')} >
                    Business
                </button>
                <button className={activeButton === 'Technology' ? 'active' : ''} onClick={() => handleFilterChange('Technology')}>
                    Technology
                </button>
                <button className={activeButton === 'Adventure' ? 'active' : ''} onClick={() => handleFilterChange('Adventure')}>
                    Adventure
                </button>
                <button className={activeButton === 'Romantic' ? 'active' : ''} onClick={() => handleFilterChange('Romantic')}>
                    Romantic
                </button>
                <button className={activeButton === 'Fictional' ? 'active' : ''} onClick={() => handleFilterChange('Fictional')}>
                    Fictional
                </button>
            </div>
            <div className="gallery">
                {
                    filterItems.map(({name,writer,category,id,image,price}) => (
                        <div className="gallery-items" key={id}>
                            <div className="popularbook-image">
                                <img src={image} alt={name} />
                            </div>

                            <div className="popularbook-info">
                                <h4>{name}</h4>
                                <div><small>{writer}</small></div>
                                <h5><span>{price}</span></h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default PopularBooks 