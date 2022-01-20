import React from 'react';
import { NavLink } from 'react-router-dom';

const BackToHome = () => {
    return (
        <div className=" bg-1 pt-10">
            <NavLink to="/" className="px-5 py-3 bg-green-400 rounded">Back to home</NavLink>
        </div>
    );
};

export default BackToHome;