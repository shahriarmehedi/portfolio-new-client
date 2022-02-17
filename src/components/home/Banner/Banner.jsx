import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import bgBanner from '../../../assets/images/wp7453603-portfolio-wallpapers3.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bgBanner})`, backgroundSize: "cover" }} id="home" className="h-screen bg-gray-900 text-white text-center lg:text-left ">
            <div className=" pt-64 lg:pt-80 lg:w-2/3 mx-auto">
                <h1 className="text-xl lg:text-3xl pb-5 font-thin">H E L L O  </h1>
                <h1 className="text-2xl lg:text-6xl font-bold">I'm <span className="text-emerald-400">Md. Shahriar Mehedi</span> </h1>
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
                <a href="https://shahriar.work/RESUME_Md_Shahriar_Mehedi.pdf" target="_blank" rel="noreferrer" className="hover:bg-zinc-800 hover:text-white shadow-emerald-400/30 shadow-lg transition duration-500 mx-auto px-10 py-4  lg:px-12 lg:py-4  bg-emerald-400 rounded-full text-zinc-800 font-semibold">My Resume</a>
            </div>
        </div>
    );
};

export default Banner;