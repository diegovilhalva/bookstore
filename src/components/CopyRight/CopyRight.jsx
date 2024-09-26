import "./CopyRight.css"

import { FootersLinksData } from '../../data/data'

const CopyRight = () => {
  return (
    <div className="footer-copyright">
        <div className="container copyright-container">
            <p>&copy; 2024 Diego Vilhalva</p>
            <div className="footer-socials">
                {
                    FootersLinksData.socials.map((item,index) => (
                        <a href={item.link} key={index} target="_blank">
                            <item.icon/>
                        </a>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CopyRight