import "./TitleTypeTwo.css"

import victor from "../../assets/victor.png"



const TitleTypeTwo = ({className,title,titleTop}) => {
    return (
        <div className={`titleTypeTwo ${className}`}>
            <small>{titleTop}</small>
            <div className="heading-h">
                <div className="line"></div>
                <h2>{title}</h2>
                <div className="line"></div>
            </div>
            <img src={victor} alt="victor" className="victor" />
        </div>
    )
}

export default TitleTypeTwo