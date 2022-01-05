import React, { useState, useEffect, useCallback } from 'react'; 
import FooterComp from './FooterComp';
import NavComp from './NavComp'; 
import '../home.scss'; 

function Home() { 

    //useState 
    const [pageState, setPageState] = useState(1); 

    const [title, setTitle] = useState("Eiffel Tower Paris, France"); 
    const [description, setDescription] = useState("The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."); 
    const [img, setImg] = useState("url(https://images.pexels.com/photos/149394/pexels-photo-149394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"); 

    //useEffect 
    useEffect(() => {
        if (pageState === 1) {
            setTitle("Eiffel Tower Paris, France"); 
            setDescription("The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."); 
            setImg("url(https://images.pexels.com/photos/149394/pexels-photo-149394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"); 
        }

        else if (pageState === 2) {
            setTitle("Statue of Liberty, New York"); 
            setDescription("The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States."); 
            setImg("url(https://images.pexels.com/photos/8543255/pexels-photo-8543255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"); 
        } 

        else if (pageState === 3) {
            setTitle("Colosseum Rome, Italy"); 
            setDescription("The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age."); 
            setImg("url(https://images.pexels.com/photos/4859881/pexels-photo-4859881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"); 
        }

        else if (pageState === 4) {
            setTitle("Yosemite National Park, California"); 
            setDescription("Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome."); 
            setImg("url(https://images.pexels.com/photos/533881/pexels-photo-533881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"); 
        } 

        else if (pageState === 5) {
            setTitle("Alcatraz Island"); 
            setDescription("Alcatraz Island is located in San Francisco Bay, 1.25 miles offshore from San Francisco, California, United States. The small island was developed with facilities for a lighthouse, a military fortification, a military prison, and a federal prison, the latter operated from August 11, 1934, until March 21, 1963."); 
            setImg("url(" + process.env.PUBLIC_URL + "/alcatraz.png)"); 
        }
    }, [pageState]); 

    //functions 
    const dotcallback = useCallback((pagenum) => {
        setPageState(pagenum); 
    }, []); 

    //left arrow 
    const leftcallback = useCallback((i) => {
        switch(pageState) {
            case 1: 
                setPageState(5); 
                return; 

            case 2: 
                setPageState(1);  
                return; 

            case 3: 
                setPageState(2); 
                return; 

            case 4: 
                setPageState(3); 
                return; 

            case 5: 
                setPageState(4); 
                return; 

            default: 
                setPageState(1); 
                return; 
        }
    }, [pageState]); 

    //right arrow 
    const rightcallback = useCallback((i) => {
        switch (pageState) {
            case 1: 
                setPageState(2); 
                return; 

            case 2: 
                setPageState(3); 
                return; 

            case 3: 
                setPageState(4); 
                return; 
            
            case 4: 
                setPageState(5);  
                return; 

            case 5: 
                setPageState(1); 
                return; 

            default: 
                setPageState(1); 
                return; 
        }
    }, [pageState]); 

    return (
        <div className="container" style={{background: img}}>
            <NavComp pageProp='home' />
            <FooterComp dotPropCallback={dotcallback} leftCallback={leftcallback} rightCallback={rightcallback} currentPage={pageState} />
            
            <div className="center-page-div">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="more-info-div">
                    <a className="more-info-content" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank" rel="noreferrer">
                        <button>
                            <img alt="" src={process.env.PUBLIC_URL + '/black-arrow.png'} />
                        </button> 

                        <span>More Info</span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Home; 
