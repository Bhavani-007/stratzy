import React from "react";
import './Layout.css';

const Layout = () => {

    return(
        <div className="App">

        <div className="navbar">
            <div className="logo nav-item"> Logo </div>
            <div className="discover nav-item"> Discover</div>
            <div className="login-button nav-item"> Login </div>
        </div>

        <div className="hero">
            <div className="hero-section-1">
                
                <div className="hero-11">
                    left-part
                </div>
                <div className="hero-12">
                    right-part
                </div>
            </div>
            <div className="hero-section-2">
                
                <div className="hero-21">
                    left-part
                </div>
                <div className="hero-22">
                    right-part
                </div>
            </div>
        </div>

        <div className="strategies" style={{padding:'20px',textAlign:'center'}}>
            <div style={{margin:'3rem 0', fontSize:'1.6rem'}}> Emerging Strategies </div>
            <div className="cards-div">
                <div className="card">
                    <div className="card-content">
                        Card 1
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-content">
                        Card 2
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        Card 3
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        Card 4
                    </div>
                </div>
            </div>
            <button className="view-all-button">View All</button>
        </div>
            
        <div className="carousel">
            Carousel
        </div>
        </div>
    )
    
}

export default Layout;