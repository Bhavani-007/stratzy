import React from "react";
import './App.css';

const Navbar = () => {
    return (
        <>
            <div className="MuiContainer-root MuiContainer-maxWidthLg" style={{maxWidth: '1120px'}}>
                <div className="MuiGrid-root header-1 mob-hide MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-space-between">
                    
                    <div className="MuiGrid-root MuiGrid-item">
                        <a className="header-logo" href='/' style={{cursor:'pointer'}}>
                            <img src="../assets/logo.png" alt="Logo" style={{height:'65px', width:'180px'}}/>
                        </a>
                    </div>

                    <div className="MuiGrid-root mob-hide">
                        <div className=" a">
                            <a className="discover-nav green-under" href='/discover'>
                                <div className="main-text-1">Discover</div>
                            </a>
                        </div>
                    </div>

                    <div className="MuiGrid-root MuiGrid-item">
                        <div className="headerButtons-1">
                            <button className="login">Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Navbar;