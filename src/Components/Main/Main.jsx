// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='md:m-2'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;