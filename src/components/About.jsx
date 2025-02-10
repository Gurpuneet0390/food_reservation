import { Link } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>OUR FOOD IS FINGER LICKING GOOD</p>

                </div>
                <p>Welcome to Raun, where exceptional flavors and unforgettable experiences come together. 
                    Nestled in the heart of Delhi, we pride ourselves on serving fresh, locally sourced ingredients to create mouthwatering dishes that celebrate both classic favorites and inventive new flavors.
                    At Raun, every meal is prepared with love and passion, aiming to bring people together over delicious food and good times.
                    Our menu is carefully crafted by our talented chefs, using only the finest ingredients and time-honored recipes. 
                    Whether you’re enjoying a casual lunch, a romantic dinner, or celebrating with friends and family, we strive to make each moment at our restaurant special.
                    Our commitment to quality extends beyond food—we believe in providing a warm, welcoming atmosphere where guests feel like part of the family. 
                    From our attentive service to the cozy ambiance, we want you to feel right at home from the moment you walk through our doors.
                    Join us for a memorable dining experience, and let us make every meal an occasion to savor!
                </p>
                <Link to={"/"}>Explore Menu<span>
                    <HiOutlineArrowNarrowRight/></span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about"/>
            </div>
        </div>

    </section>
  )
}

export default About