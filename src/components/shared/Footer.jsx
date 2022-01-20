import React from 'react';
import shahriar_logo from '../../assets/images/shahriars_logo.png'

const Footer = () => {
    return (
        <div className=" bg-gray-900 text-white pt-20 pb-10 mx-auto">
            <img className="mx-auto h-14 mb-3" src={shahriar_logo} alt="" />
            <div className="pt-7 pb-10">
                <a href="https://github.com/shahriarmehedi" target="_blank" rel="noreferrer" className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-green-400 text-xl py-2 bg-gray-800 text-white rounded m-2"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/shahriarmehedi/" target="_blank" rel="noreferrer" className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-green-400 text-xl py-2  bg-gray-800 text-white rounded m-2"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.facebook.com/its.shahriar" target="_blank" rel="noreferrer" className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-green-400 text-xl py-2  bg-gray-800 text-white rounded m-2"><i className="fab fa-facebook"></i></a>
                <a href="https://m.me/its.shahriar" target="_blank" rel="noreferrer" className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-green-400 text-xl py-2  bg-gray-800 text-white rounded m-2"><i className="fab fa-facebook-messenger"></i></a>
            </div>
            <p className="w-5/6 lg:w-full mx-auto text-sm text-gray-400">Ⓒ All Right Reserved by Md. Shahriar Mehedi | 2021</p>
        </div>
    );
};

export default Footer;