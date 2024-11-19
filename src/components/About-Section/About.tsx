"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function About() {
    return (
        <LampContainer>
            <div className="relative">
                <motion.h1
                    id="aboutSection"
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="bg-gradient-to-b from-orange-100 to-orange-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-6xl"
                >
                    Shine Bright  <br /> in the Digital World
                </motion.h1>
                <div className="absolute text-center -bottom-60 z-10 capitalize text-lg bg-gradient-to-b from-orange-400 to bg-orange-600 text-transparent bg-clip-text">
                From innovative web and mobile applications to striking logos and 3D animations, Ignite Studios is here to fuel your brand's growth.
                let us ignite your brand's potential!
                </div>
            </div>
        </LampContainer>
    );
}
