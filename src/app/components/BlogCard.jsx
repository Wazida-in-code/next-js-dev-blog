import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({blog}) => {
    const {title, description, image, content, id} = blog
    return (
<div className="max-w-md mx-auto my-10 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition">

  {/* Blog Image */}
  <Image
    src={image}
    alt="Coding setup"
    width={600}
    height={350}
    className="w-full h-48 object-cover"
  />

  {/* Card Content */}
  <div className="p-5">

    {/* Title */}
    <h2 className="text-2xl font-bold text-slate-900">
      {title}
    </h2>

    {/* Description */}
    <p className="text-sm text-slate-500 mt-3 leading-6 line-clamp-3">
      {description} <br/> {content}
    </p>

    {/* Read More */}
    <div className="mt-5">
     <Link
        href={`/blogs/${id}`}
        className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition"
          >
      Read More →
    </Link>
    </div>

  </div>
</div>

  );
};

export default BlogCard;