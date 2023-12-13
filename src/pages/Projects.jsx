/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"

function Projects(props) {
    const [projects, setProjects] = useState(null)

    const getProjectsData = async () => {
        const response = await fetch("./projects.json")
        const data = await response.json()
        setProjects(data)
    }

    useEffect(() => {
        getProjectsData()
    }, [] )

    const loaded = () => {
        return ( 
            projects.map((project) => (
            <div key={project._id}>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live sites</button>
                </a>
            </div>
        )))
    }
    
    return loaded ? loaded() : <h1>Loading...</h1>
}

export default Projects