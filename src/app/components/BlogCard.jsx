import Image from 'next/image';
import React from 'react';

const BlogCard = () => {
    return (
         <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">

      {/* Blog Image */}
      <Image
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        alt="Coding setup"
        width={800}
        height={450}
        className="w-full h-72 object-cover"
       />

      {/* Card Content */}
      <div className="p-8">

        {/* Category */}
        <span className="inline-block px-5 py-2 bg-violet-100 text-violet-600 font-semibold rounded-xl">
          React
        </span>

        {/* Title */}
        <h2 className="text-3xl font-bold text-slate-900 mt-5">
          React Basics for Beginners
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-500 mt-4 leading-8">
          React is a powerful JavaScript library for building user
          interfaces. In this blog, we'll explore the core concepts
          of React, including components, props, and state.
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-8">

          {/* Author & Date */}
          <div>
            <p className="font-semibold text-slate-800">
              Wazida Momtaz Esha
            </p>

            <p className="text-sm text-slate-400 mt-1">
              September 10, 2025
            </p>
          </div>

          {/* Read More */}
          <button className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition">
            Read More →
          </button>

        </div>
      </div>
    </div>
  );
};

export default BlogCard;