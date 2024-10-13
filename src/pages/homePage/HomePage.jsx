import Searchbar from "../../components/searchbar/Searchbar"
import "./HomePage.scss"

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate & Get Your Dream Place.</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto modi beatae aspernatur praesentium magni a qui quia labore. Corporis non ipsam tenetur similique reprehenderit doloremque labore mollitia in, eum amet?
                    </p>
                    <Searchbar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="imgContainer">
                <img src="/bg.png"/>
            </div>
        </div>
    )
}

export default HomePage