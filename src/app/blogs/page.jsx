import React from 'react';


const blogs = [
  {
    id: 1,
    title: "My Journey into Web Development",
    description: "How I started learning web development and what I have learned so far.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    content:
      "My web development journey started with HTML and CSS. At first, everything felt confusing, but slowly I started understanding how websites are built. After learning JavaScript, I moved into React and discovered how powerful modern web development can be."
  },
  {
    id: 2,
    title: "Why JavaScript Is Important",
    description: "Understanding why JavaScript is one of the most important languages for web developers.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content:
      "JavaScript makes websites interactive and dynamic. It allows developers to create features such as buttons, forms, animations, and data-driven applications. Learning JavaScript also makes it easier to understand frameworks like React and Next.js."
  },
  {
    id: 3,
    title: "My First React Project",
    description: "A look at what I learned while building my first interactive React project.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    content:
      "Building my first React project was challenging but exciting. I learned about components, props, state, event handling, and conditional rendering. The biggest lesson was that building a project helps me understand concepts much better than simply reading about them."
  },
  {
    id: 4,
    title: "Getting Started with Next.js",
    description: "Learning the basics of Next.js and understanding how it is different from React.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    content:
      "Next.js is a React framework that provides many features for building modern web applications. It includes file-based routing, layouts, server-side rendering, image optimization, and more. Moving from React to Next.js feels challenging, but it also makes many things easier."
  },
  {
    id: 5,
    title: "Lessons I Learned While Coding",
    description: "Some important lessons that helped me become a better learner and developer.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    content:
      "One of the biggest lessons I have learned is that getting stuck is a normal part of programming. Instead of immediately looking for the complete solution, I try to understand the problem, break it into smaller parts, and find the solution step by step. Every error is another opportunity to learn."
  }
];



const BlogsPage = () => {
    return (
        <div className='min-h-screen w-full bg-gradient-to-r from-green-100 to-purple-300'>
            {
                blogs.map(blog => {
                    
                })
            }
        </div>
    );
};

export default BlogsPage;