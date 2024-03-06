import React from "react";
import './App.css'

const HeroSection1 = () => {
    return (
        <>
            <div className="MuiGrid-root jss1363 MuiGrid-container item-wrapper MuiGrid-spacing-xs-3 MuiGrid-item" style={{display:'flex',flexDirection:'row'}}>
                
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6">
                    <div className="MuiGrid-root jss1400 MuiGrid-container MuiGrid-justify-content-xs-center MuiGrid-grid-xs-12">
                        <div className="MuiGrid-root jss1402 MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-space-between MuiGrid-grid-xs-12">
                            <div className="MuiGrid-root jss1403 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-6">
                                <p className="MuiTypography-root jss1404 MuiTypography-body1" style={{fontSize:'1.3rem'}}>Let's make some money moves!</p>
                                <p className="MuiTypography-root jss1405 MuiTypography-body1">Time to make your first investment</p>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-text tapToKnowMoreButton" tabIndex='0' type="button" style={{    color: '#EBECEC',width: '80%' ,padding: '0.8rem 0', fontSize: '1rem', background: 'linear-gradient(180deg, #01C36D 0%, #01C16C 0.01%, #019C57 100%)',borderRadius: '0.6rem', textTransform: 'none'}}>
                                    <span className="MuiButton-label">Tap to know more</span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-flex-end MuiGrid-grid-xs-4">
                                <img src="../assets/handWithMoney.svg" alt="handWithMoney" className="jss1407" />
                            </div>
                        </div>
                        <div className="MuiGrid-root jss1406 MuiGrid-container MuiGrid-justify-content-xs-space-between MuiGrid-grid-xs-12">
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center MuiGrid-grid-xs-6">
                                <div className="MuiBox-root jss1413 jss1409">
                                    <img src="../assets/strategyStory.49f2c5bd.png" alt="" className="jss1410" />
                                </div>
                                <p className="MuiTypography-root jss1412 MuiTypography-body1 para">Strategies<br />Explained</p>
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-center MuiGrid-grid-xs-6">
                                <div className="MuiBox-root jss1414 jss1409">
                                    <img src="../assets/ideaStory.e0affe51.png" alt="" className="jss1411"/>
                                </div>
                                <p className="MuiTypography-root jss1412 MuiTypography-body1 para">Ideas<br />Explained</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6">
                    <div className="MuiGrid-root jss1415 MuiGrid-container">
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-direction-xs-column MuiGrid-wrap-xs-nowrap MuiGrid-grid-xs-6 hover-blocks">
                            <a className="jss1417" href="/ideas">
                                <img src="../assets/brain.webp" alt="" className="jss1416" />
                                <p className="MuiTypography-root jss1419 MuiTypography-body1">Discover</p>
                                <p className="MuiTypography-root jss1420 MuiTypography-body1">Ideas</p>
                            </a>
                        </div>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-direction-xs-column MuiGrid-wrap-xs-nowrap MuiGrid-grid-xs-6 hover-blocks">
                            <a className="jss1418" href="/strategies">
                                <img src="../assets/connecting-blocks.webp" alt="" className="jss1416" />
                                <p className="MuiTypography-root jss1419 MuiTypography-body1">Discover</p>
                                <p className="MuiTypography-root jss1420 MuiTypography-body1">Strategies</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );

}

export default HeroSection1;

