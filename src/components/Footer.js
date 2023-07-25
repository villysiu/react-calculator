import { Link } from "react-router-dom"
export const Footer=()=>{
    return (
        <>
            <div>Created by <a href="mailto:villysiu@gmail.com">Villy Siu</a></div>
            <div><Link to="tech-stack">Tech Stack</Link></div>
            <div>
            
                
            <a href='https://github.com/villysiu/react-calculator'>GitHub</a>
                {"   "}
                <a href="https://villysiu.github.io/villysiu/">My Portfolio</a>
                {"   "}
                
                <a href='https://www.linkedin.com/in/villy-siu-384b81132/'>LinkedIn</a>
                    
            </div>
        </>
    )
}
