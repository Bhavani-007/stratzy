import React from "react";
import './App.css'

const CarouselSlide = () => {
    return (
        <>
            <div className="MuiGrid-root MuiGrid-item" style= {{padding:'0px 0.5rem'}}>
                <div className="MuiPaper-root jss1498 MuiPaper-elevation0 MuiPaper-rounded">
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-wrap-xs-nowrap" style={{display:'flex', flexDirection:'row'}}>
                        <div className="MuiGrid-root jss1499 MuiGrid-item MuiGrid-grid-xs-4">
                            <img src="../assets/BALAMINES.png" alt="Seasonal Stars" className="jss1500" />
                        </div>
                        <div className="MuiGrid-root jss1501 MuiGrid-item MuiGrid-grid-xs-7" style={{display:'flex', flexDirection:'column'}}>
                            <p className="MuiTypography-root jss1502 MuiTypography-body1">BALAMINES</p>
                            <div className="MuiGrid-root jss1503 MuiGrid-container" style={{display:'flex', flexDirection:'row', flexWrap:'nowrap'}}>
                                <p className="MuiTypography-root jss1504 jss1505 MuiTypography-body1">8.43%</p>
                                <svg className="jss1507" stroke="grey" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CarouselSlide;

