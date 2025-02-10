import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight} from "react-icons/hi";


const NotFound = () => {
  return (
    <>
    <section className="notFound">
    <div className="container">
    <img src="notFound.svg" alt="notFound"/>
    <h1>Looks like you are lost</h1>
    <p>we are lost</p>
    <Link to={"/"}>
    Back to Home{""}
    <span>
      <HiOutlineArrowNarrowRight/>
    </span>
    </Link>
    </div>
    </section>
    </>
  )
}

export default NotFound