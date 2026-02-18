import { Fragment } from "react";
import { Routes, Route } from 'react-router-dom';

import DCScreen from '../components/DC/DCScreen';
import HeroScreen from "../components/Heroes/HeroScreen";
import MarvelScreen from '../components/Marvel/MarvelScreen';
import SearchScreen from '../components/Search/SearchScreen';
import Navbar from "../components/UI/Navbar";

const DashboardRoutes  = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className="container mt-3">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DCScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen/>} />
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </Fragment>
    );
}
 
export default DashboardRoutes;