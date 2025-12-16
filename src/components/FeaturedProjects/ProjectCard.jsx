import React from "react";

function ProjectCard(props){
    return(
        <div className="project-card group relative overflow-hidden rounded-xl max-w-100 h-100 shadow-lg m-5">
            <img className=" h-full w-full w-full rounded-xl object-cover  transition-transform duration-300 group-hover:scale-105" src={props.image} alt={props.alt} />

            <div className="absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a href={props.link} target="_blank" className=" absolute inset-0 p-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h1 className="font-bold text-4xl mb-10">{props.header}</h1>
                    <p className="">{props.description}</p>
                </a>
            </div>
            
            
        </div>
        
    );
}

export default ProjectCard;