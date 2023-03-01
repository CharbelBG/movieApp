import {React, useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './layout/Headers';
import Home from './pages/Home';


export default function App(){

return(
<>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />

    </Routes>
</>   
)
}


