import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import shahriar_logo from '../../assets/images/shahriars_logo.png'

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 w-full z-50">
                <div className="navbar bg-zinc-800 text-neutral-content h-20">
                    <div className="flex-1 px-2 mx-2">
                        <AnchorLink href="#home">
                            <img className="pl-8 md:pl-10 h-12" src={shahriar_logo} alt="" />
                        </AnchorLink>
                        <AnchorLink href="#home"><span className=" font-bold pl-2 text-lg md:text-2xl ">
                            Shahriar's Portfolio
                        </span></AnchorLink>
                    </div>
                    <div className="flex-none hidden px-2 mx-2 lg:flex pr-10">
                        <div className="flex items-center">
                            <AnchorLink href="#home" className="btn hover:bg-zinc-700 btn-ghost rounded-btn mx-2">

                                HOME

                            </AnchorLink>
                            <AnchorLink href="#about" className="btn hover:bg-zinc-700 btn-ghost rounded-btn mx-3">

                                ABOUT ME

                            </AnchorLink>
                            <AnchorLink href="#projects" className="btn hover:bg-zinc-700 btn-ghost rounded-btn mx-3">

                                PROJECTS

                            </AnchorLink>
                            <AnchorLink href="#blogs" className="btn hover:bg-zinc-700 btn-ghost rounded-btn mx-3">

                                BLOGS

                            </AnchorLink>
                            <AnchorLink href="#contact" className="btn px-7 py-2 rounded hover:bg-zinc-700 bg-emerald-400 text-zinc-900 hover:text-white transition duration-500 mx-3">

                                CONTACT

                            </AnchorLink>
                        </div>
                    </div>
                    <div className="flex-none md:hidden dropdown dropdown-end">
                        <button tabIndex="0" className="btn hover:bg-zinc-700 btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabIndex="0" className="py-7 shadow-lg mt-96 menu dropdown-content text-gray-900  bg-emerald-400 rounded-lg w-52">
                            <li>
                                <AnchorLink href="#home" className="btn hover:text-white bg-emerald-300 border-0 rounded-btn mx-3 my-1">
                                    HOME
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#about" className="btn hover:text-white bg-emerald-300 border-0 rounded-btn mx-3 my-1">
                                    ABOUT ME
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#projects" className="btn hover:text-white bg-emerald-300 border-0 rounded-btn mx-3 my-1">
                                    PROJECTS
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#blogs" className="btn hover:text-white bg-emerald-300 border-0 rounded-btn mx-3 my-1">
                                    BLOGS
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#contact" className="btn hover:text-white bg-emerald-300 border-0 rounded-btn mx-3 my-1">
                                    CONTACT
                                </AnchorLink>
                            </li>
                        </ul>
                    </div>
                </div>


            </nav>
        </>
    );
};

export default Navbar;