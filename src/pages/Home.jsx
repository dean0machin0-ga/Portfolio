import { useEffect, useState } from "react"

function Home() {
    const [home, setHome] = useState(null)

    const getHomeData = async () => {
        const response = await fetch("./home.json")
        const data = await response.json()
        setHome(data)
    } 

    useEffect( () => { 
        getHomeData() 
        }, [] )

        const loaded = () => (
            <div>
            <href>{ home.headshot }</href>
            <h3>{ home.email }</h3>
            <p>{ home.bio }</p>
            </div>
    )
    
    return home ? loaded() : <h1>Loading...</h1>
}
    

export default Home