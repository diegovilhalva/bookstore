
import "./Quote.css"

import { quoteData } from "../../data/data"

import TitleTypeTwo from "../../ui/TitleTypeTwo/TitleTypeTwo"


const Quote = () => {
  return (
    <section className="quote">
        <div className="container quote-container">
            <TitleTypeTwo title={"Quote of the day"}  className={'quote-title'} />
            
                {
                    quoteData.map(({quote,speaker,id}) => (
                        <article key={id}>
                            <p>{quote}</p>
                            <h5>{speaker}</h5>
                        </article>
                    ))
                }
           
        </div>
    </section>
  )
}

export default Quote