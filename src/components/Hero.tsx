"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function Hero() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl text-center mx-auto "
            >
                <div className="flex flex-col gap-3">
                    <span className="text-7xl">
                        Ignite Studios
                    </span>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <span>
                            Let the Studio {" "}
                        </span>
                        <Highlight className="text-black dark:text-white">
                            Ignite Your Brand
                        </Highlight>
                    </div>
                </div>
            </motion.h1>
        </HeroHighlight>
    );
}
