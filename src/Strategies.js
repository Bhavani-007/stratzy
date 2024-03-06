import React from "react";
import Strategy from "./Strategy";
import './App.css';

const Strategies = () => {
    return (
        <>
            <div className="MuiContainer-root jss1374 MuiContainer-maxWidthLg">
                <div className="MuiBox-root jss1464"></div>
                <div className="MuiContainer-root jss1371 MuiContainer-maxWidthLg">
                    <div className="MuiGrid-root jss1465 MuiGrid-container">
                        <p className="MuiTypography-root jss1466 MuiTypography-body1">Emerging Strategies</p>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-item MuiGrid-grid-xs-12">
                            <Strategy
                                title={'Diwali Basket'} 
                                imgsrc={'../assets/diwaliBasket.png'}
                                description={'The Diwali Strategy: Investments made around Diwali can usher in wealth and prosperity in the coming year.'}
                                risk = {2}
                                riskLevel = {'Low'}
                                circleColor = {'rgb(1, 195, 109)'}
                                dashOffset = {'100.531px'}
                            />
                            <Strategy
                                title={'Wealth Magnet'} 
                                imgsrc={'../assets/wealthMagnet.png'}
                                description={'MOST stands for Management quality, Business outlook, Price safety or volatility, and Technical Trend. By combining these factors, We pick the stock that has the potential to outperform the market.'}
                                risk = {4}
                                riskLevel = {'Mid'}
                                circleColor = {'rgb(236, 195, 71)'}
                                dashOffset = {'75.398px'}
                            />
                            <Strategy 
                                title={'Anchor'}
                                imgsrc={'../assets/anchor.png'}
                                description={'Anchor is our large-cap growth strategy, investing in only the best-in-class companies in each sector. These companies are veterans of the stock market, driving the index to all-time highs and we want you to be a part of them. The objective is to outperform the NIFTY 50 over a long-term horizon.'}
                                risk = {7}
                                riskLevel = {'Mid'}
                                circleColor = {'rgb(236, 195, 71)'}
                                dashOffset= {'37.699px'}
                            />
                            <Strategy 
                                title={'Rocketship'}
                                imgsrc={'../assets/rocketship.png'}
                                description={'Rocketship is our mid-cap growth strategy, investing in under-the-radar companies with massive growth potential. We believe these companies are about to blast off and we want you to join in on the ride and reap the benefits. The objective is to outperform NIFTY Midcap 100 over a long-term horizon.'}
                                risk = {9}
                                riskLevel = {'High'}
                                circleColor = {'red'}
                                dashOffset ={'12.566px'}
                            />
                        </div>

                        <a className="jss1467" href="/strategies">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1468" tabIndex="0" type="button">
                                <span className="MuiButton-label">
                                    <p>View All</p>
                                    <svg className="jss1469" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.4375 12.8327L7.5625 6.99935L1.4375 1.16602" stroke="#EBECEC" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                                <span className="MuiTouchRipple-root"></span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Strategies;

