import "./TitleTypeTwo.css"

import victor from "../../assets/victor.png"



const TitleTypeTwo = ({className,title}) => {
    return (
        <div className={`titleTypeTwo ${className}`}>
                <h2>{title}</h2>
            <img src={victor} alt="victor" className="victor" />
        </div>
    )
}

export default TitleTypeTwo