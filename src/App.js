import Home from './work/Home'; 
import Search from './work/Search'; 
import { Route, Routes, Navigate } from 'react-router-dom'; 
import ErrorPage from './work/ErrorPage';
import Location from './work/Location';

function App() {
  return (
    <Routes> 

        {/* <Route path="/" element={<Navigate to="/around-world/home" />} /> */}

        {/* <Route path="/around-world" element={<Navigate to="/around-world/home" />} /> */}
    
        <Route path="/around-world" index element={<Home />} /> 

        <Route path="/around-world/search/:value" element={<Search />} /> 

        <Route path="/around-world/location/:name" element={<Location />} />

        <Route path="*" element={<ErrorPage />} status={404} /> 

    </Routes>
  );
}

export default App;
