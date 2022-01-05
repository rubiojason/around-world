import React, { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom"; 
import { locationObj } from './LocationData'; 
import '../location.scss'; 
import NavComp from './NavComp';

function Location() {

    const { name } = useParams(); 

    //useState 
    const [onFirstPage, setOnFirstPage] = useState(true); 
    const [country, setCountry] = useState(""); 

    //useEffect 
    useEffect(() => {
        for (var cntry in locationObj) {
            for (var i = 0; i < locationObj[cntry].name.length; i++) { 
                if (locationObj[cntry].name[i] === name) {
                    setCountry(cntry);  
                }
            }
        } 
    }, []); 
    
    //functions 
    const moreInfo = () => {
        setOnFirstPage(false);  
    }; 

    const lessInfo = () => {
        setOnFirstPage(true); 
    }; 

    return (
        <>
            {
                country !== "" ? 

                <div className="location-page" style={{background: "url(" + locationObj[country].image[locationObj[country].name.indexOf(name)] + ")"}}>
                    <NavComp /> 

                    <div className="dark-back"></div>
                    
                    {
                        onFirstPage ? 

                        <div className="location-container">
                            <div className="location-content">
                                <h1>{name}</h1>
                                <div onClick={moreInfo} className="go-forward-button">
                                    <span>More</span>
                                    <button>
                                        <img alt="" src={process.env.PUBLIC_URL + '/arrow.png'} />
                                    </button>
                                </div>
                            </div>
                        </div> 

                        : 

                        <div className="second-location-container"> 
                            <div className="second-location-content">

                                <div className="go-back-button-container">
                                    <div className="go-back-button" onClick={lessInfo}>
                                        <button>
                                            <img alt="" src={process.env.PUBLIC_URL + '/arrow.png'} />
                                        </button>
                                        <span>Less</span> 
                                    </div>
                                </div>

                                <div className="second-page-location-container">
                                    
                                    <div className="name-country-container">
                                        <h1>{name}</h1> 
                                        <h3>{country}</h3>
                                    </div> 

                                    <div className="location-content">
                                        <p>
                                            {locationObj[country].description[locationObj[country].name.indexOf(name)]}
                                        </p>
                                    </div> 

                                </div>

                            </div>
                        </div>
                    }

                    

                </div>

                : 

                <div>loading</div>
            }
        </>
        
    )
}

export default Location
