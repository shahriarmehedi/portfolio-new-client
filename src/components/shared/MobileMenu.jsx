import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MobileMenu = () => {
    return (
        <div className='bg-gray-900 w-full sticky bottom-0 md:hidden overflow-hidden'>
            <div className='text-sm h-[58px] rounded-tl-xl rounded-tr-xl bg-slate-800 flex justify-between text-white '>
                <div>
                    <AnchorLink href="#home">
                        <div className='px-4 h-full cursor-pointer hover:bg-emerald-400 flex justify-center flex-col'>
                            <i class="fas fa-house-user text-lg"></i>
                            <button className='text-xs py-[2px] text-slate-50'>HOME</button>
                        </div>
                    </AnchorLink>
                </div>


                <div>
                    <AnchorLink href="#about">
                        <div className='px-3 h-full cursor-pointer hover:bg-emerald-400 flex justify-center flex-col'>
                            <i class="fas fa-address-card text-lg"></i>
                            <button className='text-xs py-[2px] text-slate-50'>ABOUT</button>
                        </div>
                    </AnchorLink>
                </div>


                <div>
                    <AnchorLink href="#projects">
                        <div className='px-2 h-full cursor-pointer hover:bg-emerald-400 flex justify-center flex-col'>
                            <i class="fas fa-briefcase text-lg"></i>
                            <button className='text-xs py-[2px] text-slate-50'>PROJECTS</button>
                        </div>
                    </AnchorLink>
                </div>


                <div>
                    <AnchorLink href="#blogs">
                        <div className='px-3 h-full cursor-pointer hover:bg-emerald-400 flex justify-center flex-col'>
                            <i class="fab fa-blogger text-lg"></i>
                            <button className='text-xs py-[2px] text-slate-50'>BLOGS</button>
                        </div>
                    </AnchorLink>
                </div>


                <div>
                    <AnchorLink href="#contact">
                        <div className='pl-2 pr-4 h-full cursor-pointer hover:bg-emerald-400 flex justify-center flex-col'>
                            <i class="fas fa-envelope-open text-lg"></i>
                            <button className='text-xs py-[2px] text-slate-50'>CONTACT</button>
                        </div>
                    </AnchorLink>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;