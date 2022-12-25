//Components
import Header from "../Header/Header"
import Carousel from "./Carousel"

//Styles
import "./HomePage.css"


export function HomePage() {
  return (
    <div className="page_container">
        <Carousel></Carousel>
    </div>
  )
}

export default HomePage
