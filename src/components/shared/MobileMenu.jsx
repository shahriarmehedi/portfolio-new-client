import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MobileMenu = () => {
    return (
        <div className='bg-[#1c1c1c] w-full sticky bottom-0 md:hidden overflow-hidden'>
            <div className='text-sm h-[65px] bg-[#252a35] flex justify-between text-white '>
                <div>
                    <AnchorLink href="#home">
                        <div className='px-4 h-full cursor-pointer hover:bg-emerald-400 flex justify-center flex-col'>
                            <i className="fas fa-house-user text-lg"></i>
                            <button className='text-xs py-[2px] text-slate-50'>HOME</button>
                        </div>
                    </AnchorLink>
                </div>


                <div>
                    <AnchorLink href="#about">
                        <div className='px-3 h-full cursor-pointer hover:bg-emerald-400 flex justify-center flex-col'>
                            <i className="fas fa-address-card text-lg"></i>
                            <button className='text-xs py-[2px] text-slate-50'>ABOUT</button>
                        </div>
                    </AnchorLink>
                </div>


                <div>
                    <AnchorLink href="#projects">
                        <div className='px-2 h-full cursor-pointer hover:bg-emerald-400 flex justify-center flex-col'>
                            <i className="fas fa-briefcase text-lg"></i>
                            <button className='text-xs py-[2px] text-slate-50'>PROJECTS</button>
                        </div>
                    </AnchorLink>
                </div>


                <div>
                    <AnchorLink href="#blogs">
                        <div className='px-3 h-full cursor-pointer hover:bg-emerald-400 flex justify-center flex-col'>
                            <i className="fab fa-blogger text-lg"></i>
                            <button className='text-xs py-[2px] text-slate-50'>BLOGS</button>
                        </div>
                    </AnchorLink>
                </div>


                <div>
                    <AnchorLink href="#contact">
                        <div className='pl-2 pr-4 h-full cursor-pointer hover:bg-emerald-400 flex justify-center flex-col'>
                            <i className="fas fa-envelope-open text-lg"></i>
                            <button className='text-xs py-[2px] text-slate-50'>CONTACT</button>
                        </div>
                    </AnchorLink>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;