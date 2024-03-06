import React from "react";
import './App.css';

const Strategy = ({title, imgsrc, description, risk, riskLevel, circleColor, dashOffset}) => {
    return (
        <>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6" style={{zIndex:'10'}}>
                <div className="MuiPaper-root jss1470 MuiPaper-elevation0 MuiPaper-rounded">
                    <a href="/strategy/Anchor" style={{textDecoration:'none'}}>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2" style={{border:'1px solid transperant', overflow:'hidden'}}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4" style={{}}>
                                <img src={imgsrc} alt="" className="jss1471" id="strategy-image" style={{}}/>
                            </div>

                            <div className="MuiGrid-root MuiGrid-item MuiGrid-direction-xs-column MuiGrid-grid-xs-8" style={{}}>
                                <div className="MuiPaper-root jss1475 jss1493 jss1474 MuiPaper-elevation1 MuiPaper-rounded">
                                    <div className="MuiGrid-root MuiGrid-container" style={{display:'flex', flexDirection:'column'}}>
                                        <p className="MuiTypography-root jss1472 MuiTypography-body1">{title}</p>
                                        <p className="MuiTypography-root jss1473 MuiTypography-body1">{description}</p>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-content-xs-space-between MuiGrid-grid-md-11" style={{flexBasis:"auto"}}>
                                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: 'rgb(42, 33, 54)', paddingBottom: '12px', borderRadius: '12px', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px', width: '100%' }}>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-3">
                                                    <div className="MuiPaper-root jss1475 jss1494 MuiPaper-elevation1 MuiPaper-rounded">
                                                        <p className="MuiTypography-root jss1477 MuiTypography-body1" style={{textAlign:'left'}}>Returns</p>
                                                        <div className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center">
                                                            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{width: '0.875rem', color: 'rgb(1, 195, 109)'}}>
                                                                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"></path>
                                                            </svg>
                                                            <p className="MuiTypography-root jss1478 jss1479 MuiTypography-body1">14.61%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-3">
                                                    <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center">
                                                        <p className="MuiTypography-root jss1477 MuiTypography-body1">Min Amount</p>
                                                        <p className="MuiTypography-root jss1481 MuiTypography-body1">₹ 99,188</p>
                                                    </div>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item">
                                                    <div className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center">
                                                        <div className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-content-xs-center" style={{position: 'relative', marginRight: '0.5rem'}}>
                                                            <div className="MuiBox-root jss1495">
                                                                <div className="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-determinate" role="progressbar" aria-valuenow={100} style={{ width: '1.75rem', height: '1.75rem', transform: 'rotate(-90deg)', color:`${circleColor}` , opacity: 0.5, position: 'absolute' }}>
                                                                    <svg className="MuiCircularProgress-svg" viewBox="22 22 44 44">
                                                                        <circle className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate" cx="44" cy="44" r="20" fill="none" strokeWidth="4" style={{strokeDasharray: '125.664', strokeDashoffset: '0px'}}></circle>
                                                                    </svg>
                                                                </div>
                                                                <div className="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-determinate" role="progressbar" aria-valuenow={10} style={{ width: '1.75rem', height: '1.75rem', transform: 'rotate(-90deg)', color:`${circleColor}` }}>
                                                                    <svg className="MuiCircularProgress-svg" viewBox="22 22 44 44">
                                                                        <circle className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate" cx="44" cy="44" r="20" fill="none" strokeWidth="4" style={{strokeDasharray: '125.664', strokeDashoffset: `${dashOffset}`}}></circle>
                                                                    </svg>
                                                                </div>
                                                                <div className="MuiBox-root jss1496">
                                                                    <div className="MuiTypography-root jss1484 MuiTypography-caption">{risk}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column">
                                                            <p className="MuiTypography-root jss1477 MuiTypography-body1" style={{textAlign:'left'}}>Risk</p>
                                                            <p className="MuiTypography-root jss1481 MuiTypography-body1">{riskLevel}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Strategy;