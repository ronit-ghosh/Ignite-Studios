import { useState } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="fixed z-50 top-0 h-20 border-b w-full bg-neutral-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                <div className="w-full h-full flex justify-between items-center mx-4">
                    <div className="flex items-center">
                        <button className="text-neutral-200 md:hidden mr-6" onClick={toggleMobileMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        <a>
                            <span className="w-14 h-14 flex justify-center items-center bg-neutral-700 rounded-full">LOGO</span>
                        </a>
                    </div>
                    <div className="hidden md:flex gap-6 ml-10 items-center text-neutral-200">
                        <a href="#homeSection">
                            <span className="cursor-pointer mix-blend-text py-2 px-3 rounded-xl bg-neutral-400/5 hover:bg-neutral-400/10 active:bg-neutral-400/15 transition-all duration-200 ease-in-out">Home</span>
                        </a>
                        <a href="#projectSection">
                            <span className="cursor-pointer mix-blend-text py-2 px-3 rounded-xl bg-neutral-400/5 hover:bg-neutral-400/10 active:bg-neutral-400/15 transition-all duration-200 ease-in-out">Projects</span>
                        </a>
                        <a href="#teamSection">
                            <span className="cursor-pointer mix-blend-text py-2 px-3 rounded-xl bg-neutral-400/5 hover:bg-neutral-400/10 active:bg-neutral-400/15 transition-all duration-200 ease-in-out">Team</span>
                        </a>
                        <a href="#aboutSection">
                            <span className="cursor-pointer mix-blend-text py-2 px-3 rounded-xl bg-neutral-400/5 hover:bg-neutral-400/10 active:bg-neutral-400/15 transition-all duration-200 ease-in-out">About</span>
                        </a>
                    </div>
                    <div className="flex justify-center items-center mr-10">
                        <div className="flex justify-center text-center">
                            <a href="#contactSection">
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                >
                                    Contact Us
                                </HoverBorderGradient>
                            </a>
                        </div>
                    </div>
                </div>
                    <div className={`md:hidden flex flex-col gap-2 items-center bg-neutral-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 transition-all duration-300 ease-in-out transform rounded-b-lg ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} w-40`} style={{ maxHeight: isMobileMenuOpen ? '220px' : '0', overflow: 'hidden' }}>
                    <a href="#homeSection" className="py-2 text-neutral-200 border-b active:bg-neutral-400/5 rounded-lg px-3">Home</a>
                    <a href="#projectSection" className="py-2 text-neutral-200 border-b active:bg-neutral-400/5 rounded-lg px-3">Projects</a>
                    <a href="#teamSection" className="py-2 text-neutral-200 border-b active:bg-neutral-400/5 rounded-lg px-3">Team</a>
                    <a href="#aboutSection" className="py-2 text-neutral-200 border-b active:bg-neutral-400/5 rounded-lg px-3">About</a>
                </div>
            </nav>
        </>
    );
}