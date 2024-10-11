import Link from "next/link";

export  default function Header() {
    return (
        <div className="mt-6 relative z-10 max-w-7xl mx-auto bg-[#F1EEDB] text-gray-800 border-2 border-gray-700">
            <div className="relative z-20 bg-[#F1EEDB] flex flex-col justify-center items-center gap-6 max-w-[96rem] mx-auto px-4 py-6 xl:py-9">
                <img 
                    src='https://photo-portfolio-neon.vercel.app/img/logo3.png'
                    alt="logo image" 
                    className="h-12 w-fit" 
                />
                {/* <div></div> */}
                <div className="flex items-center gap-12 font-semibold text-gray-700">
                    <Link href="/">HOME</Link>
                    <Link href="/">ABOUT ME</Link>
                    <Link href="/">CONTACT</Link>
                    <Link href="/">PORTFOLIO</Link>
                    {/* <div className='relative bg-orange-600 text-white border border-black z-20'>
                        <p className='bg-orange-600 py-1 px-4'>HOME</p>
                        <div className='absolute bg-black w-full h-full left-[0.35rem] top-[0.35rem] -z-20'></div>
                    </div> */}
                </div>
            </div>
            <div
                className={`absolute w-full h-full top-3 left-3 bg-gray-700 z-0 transition-transform duration-300 ease-in-out`}>
            </div>
        </div>
    );
}