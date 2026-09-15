import Image from 'next/image';
import React from 'react';

const BlogCard = ({blog}) => {
    const {title, description, image, content} = blog
    return (
         <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">

      {/* Blog Image */}
      <Image
        src={image}
        alt="Coding setup"
        width={800}
        height={450}
        className="w-full h-72 object-cover"
       />

      {/* Card Content */}
      <div className="p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-slate-900 mt-5">
          {title}
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-500 mt-4 leading-8">
          {description}
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-8">

          {/* Read More */}
          <button className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition">
            {content}
          </button>

        </div>
      </div>
    </div>
  );
};

export default BlogCard;