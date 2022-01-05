import React, { useState } from 'react';  
import '../nav.scss'; 
import { Link, useNavigate } from 'react-router-dom'; 

function NavComp(props) { 

    const navigate = useNavigate();

    //useState 
    const [searchValue, setSearchValue] = useState(""); 
    const [finalValue, setFinalValue] = useState(""); 

    const [searchErrorVisible, setSearchErrorVisible] = useState(false); 

    //functions 
    const changeSearch = e => {
        e.preventDefault(); 

        setSearchValue(e.target.value); 
    }; 

    const submitSearch = e => {
        e.preventDefault(); 

        setFinalValue(searchValue.trim()); 

        var removeAscii = searchValue.replace(/[^a-zA-Z ]/g, ""); 

        if (removeAscii.trim() === "") {
            setSearchErrorVisible(true); 
            //console.log("not navigating because ASCII chars were found"); 
        }

        else if (finalValue.trim() === "" && searchValue.trim() === "") {
            setSearchErrorVisible(true); 
            //console.log("not navigating because no input value was taken"); 
        } 

        else {
            var str = searchValue; 
            //remove any ASCII char 
            str = str.replace(/[^a-zA-Z ]/g, ""); 

            //remove "/" value 
            str = Array.from(new Set(str.split('/'))).toString(); 

            navigate("/around-world/search/" + str); 
        }
    }; 

    return (
        <nav>
            <div className="nav-center"> 

                <div className="nav-left">
                    {
                        props.pageProp === 'home' ? 

                        <Link className="nav-page-link disabled" to="/around-world/home">Home</Link> 
                        
                        : 
                        
                        <Link className="nav-page-link" to="/around-world/home">Home</Link>
                    }
                    {
                        props.pageProp === 'search' ? 

                        <Link className="nav-page-link disabled" to={"/around-world/search" + null}>Search</Link> 

                        : 

                        <Link className="nav-page-link" to={"/around-world/search/" + null}>Search</Link>
                    }

                    <a className="nav-page-link" rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Main_Page">More</a>
                </div> 

                <form className="nav-right" style={{display: props.pageProp === 'search' ? 'none' : ''}} onChange={changeSearch} onSubmit={submitSearch}>
                    <button onClick={submitSearch}>
                        <img alt="" src="https://rubiojason.github.io/Around-The-World/static/media/SearchIcon.e1a3c478.svg" />
                    </button>
                    <input placeholder='Search Location' /> 
                    <div className="input-error" style={{opacity: searchErrorVisible ? 1 : 0}}>Invalid Search Value</div>
                </form>

            </div>
        </nav>
    )
}

export default NavComp
