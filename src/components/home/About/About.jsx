import React, { useEffect } from 'react';
import my_photo from '../../../assets/images/my_photo.jpg'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
    }, []);



    return (
        <div id="about" className=" pb-36 bg-1 text-white ">
            <div className="container mx-auto">
                <h1 className=" pt-24 pb-5 text-4xl font-bold ">About Me</h1>
                <hr className="py-1 bg-emerald-400 w-32 border-none rounded mb-20 mx-auto" />
                <div data-aos="fade-up" data-aos-duration="800" className=" flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 py-10 px-3 lg:p-16 rounded-box lg:border-l-8 border-gray-400">
                    <div className="lg:w-1/3">
                        <img className="transform transition duration-300 hover:scale-110 h-60 mb-10 mx-auto lg:h-80 border-8 border-gray-700 rounded-full" src={my_photo} alt="" />
                        <a href="https://github.com/shahriarmehedi" target="_blank" rel="noreferrer" className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-emerald-400 text-3xl py-2 bg-gray-800 text-white rounded m-2"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/shahriarmehedi/" target="_blank" rel="noreferrer" className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-emerald-400 text-3xl py-2  bg-gray-800 text-white rounded m-2"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="lg:w-2/3 text-center lg:text-left lg:pl-10">
                        <h1 className=" text-2xl lg:text-4xl  text-emerald-400 pt-10 lg:pt-0">Md. Shahriar Mehedi</h1>
                        <p className=" italic font-extralight lg:text-xl text-gray-400 pt-2">A passionate MERN stack developer</p><br />
                        <p className="text-gray-400 lg:w-full ">Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to any organization. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. This has allowed me to stay ahead of the curve and deliver exceptional work to all of my employers.
                        </p> <br />
                        <h3 className="text-sm lg:text-lg mb-5  text-gray-400">Web Technologies I'm using so far:</h3>
                        <div className=" ">
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> html</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> css</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> JavaScript</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> JavaScript ES6+</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Bootstrap</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> TailwindCSS</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Material UI</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> React</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Node.JS</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Express</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> MongoDB</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Google Cloud</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Google Maps</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> JWT</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> PWA</button>
                        </div> <br />
                        <h3 className="text-sm lg:text-lg mb-5  text-gray-400">Tools & Softwares I use:</h3>
                        <div>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> VS Code</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Git</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> GitHub</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Heroku</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Netlify</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> cPanel</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Figma</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Photoshop</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Illustrator</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> XD</button>
                            <button className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-gray-800 text-emerald-400 rounded-full m-1"> Android Studio</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;