import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])



    return (
        <div id="blogs" className=" bg-gray-900 text-white pb-32">
            <h1 className=" pt-24 pb-5 text-4xl font-bold">My Blogs</h1>
            <hr className="py-1 bg-green-400 w-32 border-none rounded mb-20 mx-auto" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto">
                {
                    blogs.map(blog =>
                        <div key={blog.blogId} className="pb-10 rounded-box bg-3 w-11/12  mx-auto">
                            <img className="rounded  h-52 mx-auto mb-5 w-full" src={blog?.blogIMG} alt="" />
                            <h2 className="my-5 w-5/6 mx-auto text-xl font-semibold"> {blog?.blogTitle} </h2>
                            <h3 className="my-5 text-sm"> {blog?.blogSubtitle} </h3>
                            <button data-tip="Blogs coming soon" className="tooltip-bottom tooltip px-7 py-2 bg-green-400 rounded text-gray-900">Read more</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Blogs;