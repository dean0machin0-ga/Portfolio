import { useEffect, useState } from "react"

function About() {
    const [about, setAbout] = useState(null)

    const getAboutData = async () => {
        const response = await fetch("./about.json")
        const data = await response.json()
        setAbout(data)
    } 

    useEffect( () => { 
        getAboutData() 
        }, [] )

    const loaded = () => (
        <div>
            <h2>{ about.name }</h2>
            <h2>{ about.location }</h2>
            {/* <img src={ about.headshot } /> */}
            <img src={ about.headshot3 } />
            <h3><a href={`mailto:${about.email}`}>{ about.email }</a></h3>
            <p>{ about.bio }</p>
        </div>
    )
    
    return about ? loaded() : <h1>Loading...</h1>
}

export default About