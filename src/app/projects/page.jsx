import Image from 'next/image';
import React from 'react';

const ProjectsPage = () => {
    return (
        <div className='min-h-screen w-full bg-gradient-to-r from-purple-300 to-violet-300'>
            <h1 className='text-cyan-900 pt-10 pl-[100px] pb-10 text-2xl font-bold'>My Little Projects-</h1>

            <div className="w-11/12 md:w-10/12 mx-auto mb-12">
                <h2 className="text-indigo-950 text-xl md:text-2xl font-bold mb-4">
                    My First HTML & CSS Project
                </h2>

                <p className="text-gray-600 mb-5">
                    My first project built while understanding HTML and CSS.
                </p>

                <a className='text-blue-900 font-bold underline' href="https://first-project-dream-collection-2e67c6.netlify.app" target="_blank"
                    rel="noopener noreferrer">Live Link-</a>

                <Image
                    className="mt-4 w-full max-w-3xl rounded-xl border-2 border-blue-950 shadow-md"
                    src="/project-1.png"
                    width={800}
                    height={450}
                    alt="My first HTML and CSS project"
                />
            </div>


            <div className="w-11/12 md:w-10/12 mx-auto mb-12">
                <h2 className="text-indigo-950 text-xl md:text-2xl font-bold mb-4">
                    My Second HTML & CSS Project
                </h2>

                <p className="text-gray-600 mb-5">
                    My second project built while learning the fundamentals of HTML and CSS
                </p>

                <a className='text-blue-900 font-bold underline' href=" https://wazida-in-code.github.io/Assignment-1-DEVCONF/" target="_blank"
                    rel="noopener noreferrer">Live Link-</a>

                <Image
                    className="mt-4 w-full max-w-3xl rounded-xl border-2 border-blue-950 shadow-md"
                    src="/project-2.png"
                    width={800}
                    height={450}
                    alt="My first HTML and CSS project"
                />
            </div>


            <div className="w-11/12 md:w-10/12 mx-auto mb-12">
                <h2 className="text-indigo-950 text-xl md:text-2xl font-bold mb-4">
                    My Third HTML & CSS Project
                </h2>

                <p className="text-gray-600 mb-5">
                    My third project built while strengthening the foundation of HTML & CSS
                </p>

                <a className='text-blue-900 font-bold underline' href="https://wazida-in-code.github.io/World-Cup-Website/" target="_blank"
                    rel="noopener noreferrer">Live Link-</a>

                <Image
                    className="mt-4 w-full max-w-3xl rounded-xl border-2 border-blue-950 shadow-md"
                    src="/project-3.png"
                    width={800}
                    height={450}
                    alt="My first HTML and CSS project"
                />
            </div>


            <div className="w-11/12 md:w-10/12 mx-auto pb-12">
                <h2 className="text-indigo-950 text-xl md:text-2xl font-bold mb-4">
                    My Fourth HTML, Tailwind-CSS, JavaScript & TypeScript Project
                </h2>

                <p className="text-gray-600 mb-5">
                    My fourth project built while strengthening the foundation of JavaSript & TypeScript.
                </p>

                <a className='text-blue-900 font-bold underline' href="https://heartfelt-jalebi-a68ab9.netlify.app" target="_blank"
                    rel="noopener noreferrer">Live Link-</a>

                <Image
                    className="mt-4 w-full max-w-3xl rounded-xl border-2 border-blue-950 shadow-md"
                    src="/project-4.png"
                    width={800}
                    height={450}
                    alt="My first HTML and CSS project"
                />
            </div>



            <div className="w-11/12 md:w-10/12 mx-auto pb-12">
                <h2 className="text-indigo-950 text-xl md:text-2xl font-bold mb-4">
                    My Fifth React.js Project
                </h2>

                <p className="text-gray-600 mb-5">
                    My fifth project built while learning React.js.
                </p>

                <a className='text-blue-900 font-bold underline' href="https://subtle-sunshine-67658c.netlify.app" target="_blank"
                    rel="noopener noreferrer">Live Link-</a>


                <Image
                    className="mt-4 w-full max-w-3xl rounded-xl border-2 border-blue-950 shadow-md"
                    src="/project-5.png"
                    width={800}
                    height={450}
                    alt="My first HTML and CSS project"
                />
            </div>


        </div>
    );
};

export default ProjectsPage;