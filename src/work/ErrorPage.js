import React from 'react'; 
import { BrowserRouter, Redirect ,Route, Routes } from 'react-router-dom'; 

function ErrorPage() {
    return (
        <div>404 page</div>
        // <BrowserRouter>
        //     <Routes>

        //         <Route path="/home" default element={<Home />} />

        //     </Routes>
        // </BrowserRouter>
    )
}

export default ErrorPage; 
