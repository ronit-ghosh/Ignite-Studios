"use client";
import Particles from "./particles";
import { Spotlight } from "../ui/Spotlight";
import { Highlight } from "../ui/hero-highlight";
import Navbar from "./Navbar";

export function Hero() {
    return (
        <>
        <Navbar />
        <div id="homeSection" className="flex h-dvh w-full flex-col items-center justify-center overflow-hidden ">
            <Spotlight fill="#f97316" className="xl:block hidden" />
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
            <div className="sm:text-8xl text-7xl font-extrabold text-center">Ignite <span className="text-orange-500">Studios</span></div>
            <div className="sm:text-3xl text-xl md:mt-4 mt-2 font-serif"><Highlight>Let the Studio Ignite Your Brand</Highlight></div>
        </div>
        </>
    );
}
