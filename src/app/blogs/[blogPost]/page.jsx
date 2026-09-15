import React from 'react';

const BlogPost = async({params}) => {

    const {blogPost} = await params;
    console.log(BlogPost, params);

    return (
        <div>
            <h1>PostId: {blogPost}</h1>
        </div>
    );
};

export default BlogPost;