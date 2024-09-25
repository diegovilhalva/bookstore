import "./TitleTypeOne.css"


import victor from "../../assets/victor.png"
const TitleTypeOne = ({className,title,titleTop}) => {
  return (
    <div className={`titleTypeOne ${className}`}>
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

export default TitleTypeOne