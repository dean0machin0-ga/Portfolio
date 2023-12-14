import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Header() {
    
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        borderBottom: ".2rem solid black",
        padding: ".5rem",
        width: "90%",
        margin: "auto",
    }
    
    const [header, setHeader] = useState([])

    const getHeaderData = async () => {
    const response = await fetch("./header.json")
    const data = await response.json()
    setHeader(data)
    }

    useEffect(() => {
        getHeaderData()
    }, [] )
    
    const loaded = () => (
        <header>
            <h1>{header.portfolioName}</h1>
            <nav style={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects">
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
    return header ? loaded() : <h1>loading...</h1>
}
export default Header