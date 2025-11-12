import React from 'react';
import { Outlet } from 'react-router';

import TopHeader from '../components/header/TopHeader';
import MainHeader from '../components/header/MainHeader';
import Footer from '../components/footer/Footer';

const FrontendLayout = () => {
    return (
        <div>
            <header>
            <TopHeader/>
            <MainHeader/>
            </header>

            <main> <Outlet/> </main>
            <footer> <Footer/>    </footer>
            
        </div>
    );
};

export default FrontendLayout;