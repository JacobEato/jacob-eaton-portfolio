import React from "react";
import ProjectCard from "./ProjectCard";
import { featured } from "../../data/projects";


function FeaturedProjects(){
    return(
        <div id="featured-projects" className="bg-main w-full py-5">
            <h1 className="text-5xl font-bold">Featured Projects</h1>
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {featured.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        link={project.link}
                        image={project.image}
                        alt={project.alt}
                        header={project.header}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
        
    );
}

export default FeaturedProjects;