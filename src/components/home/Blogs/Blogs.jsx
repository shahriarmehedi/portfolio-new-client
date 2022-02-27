import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    useEffect(() => {
        AOS.init();
    }, []);



    return (
        <div id="blogs" className="bg-slate-100 dark:bg-[#1c1c1c] text-white pb-32">
            <h1 className=" pt-24 pb-5 text-4xl font-bold text-slate-700 dark:text-white">My Blogs</h1>
            <hr className="py-1 bg-emerald-400 w-32 border-none rounded mb-20 mx-auto" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto">
                {
                    blogs.map(blog =>
                        <div data-aos="fade-up" data-aos-duration="800" key={blog.blogId} className="pb-10 rounded-box shadow-md bg-slate-300 dark:bg-zinc-800 w-11/12  mx-auto">
                            <img className="rounded  h-52 mx-auto mb-5 w-full" src={blog?.blogIMG} alt="" />
                            <h2 className="my-5 w-5/6 mx-auto text-xl font-semibold text-slate-700 dark:text-white"> {blog?.blogTitle} </h2>
                            <h3 className="my-5 text-sm text-slate-700 dark:text-white"> {blog?.blogSubtitle} </h3>
                            <button data-tip="Blogs coming soon" className="tooltip-bottom tooltip px-7 py-2 bg-emerald-500 dark:bg-emerald-400 rounded dark:text-gray-900 text-white">Read more</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Blogs;