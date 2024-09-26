import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {
  return (
    <section className="Not-Found">
      <div className="container not-found-container">
        <h1>404</h1>
        <h3>Oops! This Page Is Not Found</h3>
        <Link to={'/'} className='btn btn-border'>Go To Home</Link>
      </div>
    </section>
  )
}

export default NotFound