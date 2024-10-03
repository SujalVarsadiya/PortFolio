import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";



function Home() {
    return (
        <>
            <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a </h1>
                            {/* <span className='text-red-700'>Developer</span> */}
                            <ReactTyped
                                className='text-red-700'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui nam pariatur veniam tenetur ad doloribus vel quas! Fugiat quis autem eum eius quidem perspiciatis dolores doloribus numquam dolorem a?
                        </p>
                        <br />
                        {/* social media icons */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>

                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href="https://www.linkedin.com" target='-blank'>
                                            <FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                    <a href="https://www.whatsapp.com" target='-blank'>
                                            <FaWhatsappSquare className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.faceboook.com" target='-blank'>
                                            <FaFacebookSquare className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently Working on</h1>
                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                        <img className='rounded-full md:w-[450px] md:h-[450px]' src="/photo.jpeg" alt="" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home
