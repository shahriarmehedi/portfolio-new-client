import React from 'react';
import Footer from '../shared/Footer';
import MobileMenu from '../shared/MobileMenu';
import Navbar from '../shared/Navbar';
import About from './About/About';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
            <MobileMenu></MobileMenu>
        </div>
    );
};

export default HomePage;