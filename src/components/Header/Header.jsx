import React from "react";

function Header(){
    return(
        <>
        <header className="flex justify-between mx-auto max-w-[1280px] mt-5">
            <a href="#top"> 
                <span className="font-bold text-lg"><span className="text-accent text-xl">J</span>acob <span className="text-accent text-xl">E</span>aton</span>
            </a>
            <nav className="grid grid-cols-2 gap-5">
                <a href="#contact">Contact</a>
                <a href="#featured-projects">Projects</a>
            </nav>
        </header>
        </>
    );
}

export default Header;