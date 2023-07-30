import React from "react";
import './hero.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CountUp from 'react-countup';
const Hero=()=>{
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                 {/* left side */}
                <div className=" flexColStart hero-left">
                   <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>Discover
                        <br /> Most Suitable 
                        <br/>Property
                        </h1>
                   </div>
                   <div className= "flexColStart hero-des">
                    <span className="secondaryText"> find a Variety of Properties that suits you very easily </span>
                    <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
                   </div>
                   <div className="flexCenter search-bar">
                   <LocationOnIcon style={{color:"blue"}}/>
                   <input type="text"/>
                   <button className="button">Search</button>
                   </div>
                   <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration ={4} />
                            <span>+</span>
                            </span>
                            <span className="secondaryText"> Premium products</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration ={4} />
                            <span>+</span>
                            </span><span className="secondaryText">
                               Happy Customer
                            </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp  end={28} />
                            <span>+</span>
                            </span><span className="secondaryText">
                              Awards Winning
                            </span>
                    </div>
                   </div>
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;