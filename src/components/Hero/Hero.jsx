import React from "react";
import meImage from "../../assets/linkedin3.jpg";

function Hero(){
    return(
        <>
        <section className="py-5 lg:py-10 max-w-[1280px] mx-auto">
            <div className="grid lg:grid-cols-2 items-center justify-items-center gap-10">
                <div>
                    <p className="font-bold text-4xl lg:text-7xl">Hi, I'm <span className="text-accent">Jake</span></p>
                    <p className="w-full text-center text-4xl lg:text-6xl">software engineer and frontend developer</p>
                    <div className="mx-auto mt-10 grid grid-cols-2 gap-10 w-80 justify-items-center items-center">
                        <a href="/Jacob_Eaton_Resume.pdf" target="_blank" className="btn-1 text-sm md:text-lg px-4 py-2">My Resume</a>
                        <a href="#contact" className="btn-2 text-sm md:text-lg px-4 py-2 ">Contact Me</a>
                    </div>
                </div>
                <div>
                    <img className="w-100 rounded-lg shadow-xl " src={meImage} alt="me" />
                </div>
            </div>
            
        </section>
        </>
    );
}

export default Hero;