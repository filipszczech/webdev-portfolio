"use client"
import { useState } from 'react';
import Image from "next/image";

export default function RealizationCard() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="relative w-full object-cover z-10">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative z-20 w-full bg-[#F1EEDB] border-2 border-gray-700 cursor-pointer transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:-translate-x-2">
                <img 
                    src='https://ibtihelbs.github.io/my_portfolio/images/portfolio/4.png'
                    alt="realization image" 
                    className="w-full h-[26rem] object-cover" 
                />
                <div className='flex flex-col gap-3 p-6'>
                    <h3 className='text-xl font-semibold'>Nazwa projektu</h3>
                    <p>Krótki opis projektu co i jak itd</p>
                    <div className='flex gap-4 flex-wrap'>
                        <div className='relative bg-[#596ae8] text-white border border-black z-20'>
                            <p className='bg-[#596ae8] py-1 px-2'>Django</p>
                            <div className='absolute bg-gray-700 w-full h-full left-[0.35rem] top-[0.35rem] -z-20'></div>
                        </div>
                        <div className='relative bg-[#596ae8] text-white border border-black z-20'>
                            <p className='bg-[#596ae8] py-1 px-2'>Nuxt.js</p>
                            <div className='absolute bg-gray-700 w-full h-full left-[0.35rem] top-[0.35rem] -z-20'></div>
                        </div>
                        <div className='relative bg-[#596ae8] text-white border border-black z-20'>
                            <p className='bg-[#596ae8] py-1 px-2'>Tailwind.css</p>
                            <div className='absolute bg-gray-700 w-full h-full left-[0.35rem] top-[0.35rem] -z-20'></div>
                        </div>
                        <div className='relative bg-[#596ae8] text-white border border-black z-20'>
                            <p className='bg-[#596ae8] py-1 px-2'>Supabase</p>
                            <div className='absolute bg-gray-700 w-full h-full left-[0.35rem] top-[0.35rem] -z-20'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`absolute w-full h-full top-3 left-3 bg-gray-700 z-0 transition-transform duration-300 ease-in-out ${isHovered ? 'translate-y-2 translate-x-2' : ''}`}>
            </div>
        </div>
    );
}