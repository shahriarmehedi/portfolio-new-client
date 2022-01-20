import React from 'react';
import bgBanner from '../../../assets/images/wp7453603-portfolio-wallpapers2.png'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div id="home" style={{ backgroundImage: `url(${bgBanner})`, backgroundSize: "cover" }} className="h-screen bg-blue-500 text-white text-center lg:text-left ">
            <div className=" pt-64 lg:pt-80 lg:w-2/3 mx-auto">
                <h1 className="text-xl lg:text-3xl pb-5 font-thin">HELLO THERE </h1>
                <h1 className="text-2xl lg:text-6xl font-bold">I'm <span className="text-green-400">Md. Shahriar Mehedi</span> </h1>
                <h2 className="text-2xl  lg:text-5xl font-bold pt-5 mb-16"><span>
                    <Typewriter
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed="90"
                        deleteSpeed="50"
                        delaySpeed="1000"
                        words={['React Developer', 'MERN Stack Developer', 'UI/UX Designer']}
                    />
                </span>
                </h2>
                <a href="https://shahriar.work/RESUME_Md_Shahriar_Mehedi_27NOV.pdf" target="_blank" rel="noreferrer" className="hover:bg-gray-800 transition duration-500 mx-auto px-10 py-4  lg:px-12 lg:py-4  bg-green-400 rounded-full text-gray-900 hover:text-white">Download Resume</a>
            </div>
        </div>
    );
};

export default Banner;