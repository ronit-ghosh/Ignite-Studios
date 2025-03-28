"use client";
import Particles from "./particles";
import { Spotlight } from "../ui/Spotlight";
import Navbar from "./Navbar";
import ShinyText from "../ui/shinytext";

export function Hero() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="h-[40rem] w-full flex flex-col items-center justify-center rounded-md antialiased relative overflow-hidden">
                <Spotlight />
                <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
                <span className="sm:text-9xl text-6xl font-extrabold text-center font-coolvetica">
                    Ignite
                    <span className="text-orange-500">Studios</span>
                </span>
                <div className="flex md:flex-row flex-col gap-1 mt-4">
                    <ShinyText text="Where Ideas Ignite, " disabled={false} speed={6} className='custom-class sm:text-4xl text-3xl font-coolvetica text-center' />
                    <ShinyText text="Brands Shine" disabled={false} speed={6} className='custom-class sm:text-4xl text-3xl font-coolvetica text-center' />
                </div>
            </div>
        </>
    );
}
