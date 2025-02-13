import { useState } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="fixed z-50 top-0 h-20 w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex items-center justify-between px-40">
                {/* <div className="">Logo</div> */}
            </nav>
        </>
    );
}