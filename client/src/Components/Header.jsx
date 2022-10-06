import { useEffect, useState } from "react"
import { Link,useLocation } from "react-router-dom"

function Header({bg}) {
    const [open,setOpen] = useState(false)
    const location = useLocation();
    const [activePath,setActivePath] = useState('/')
    useEffect(()=>{
        setActivePath(location.pathname)
    },[location])

    return (
        <nav className={`h-16 bg-transparent  ${bg} z-indexing-landing-page`}>
            <div className="flex flex-row  py-3 px-5 justify-between ">
                <Link to="/" className="font-jost font-extrabold tracking-wide text-smoke cursor-pointer" style={{fontSize:'1.25rem',fontWeight:'bold'}} >Processing</Link>
                {activePath=="/"?
                (<div className="flex-row justify-between py-2 hidden md:flex"> 
                    <Link to="/" className={activePath=="/"?"mx-2 text-slate-200 font-jost font-semibold":"mx-2 text-slate-200  font-jost font-light"}>Home</Link>
                    <a href="#about" className={activePath=="/about"?"mx-2 text-slate-200 font-jost font-semibold":"mx-2 text-slate-200  font-jost font-light"}>About</a>
                    <a href="#contact" className={activePath=="/contact"?"mx-2 text-slate-200 font-jost font-semibold":"mx-2 text-slate-200  font-jost font-light"}>Contact</a>
                    <Link to="/playground" className={activePath=="/playground"?"mx-2 text-slate-200 font-jost font-semibold":"mx-2 text-slate-200  font-jost font-light"}>Playground</Link>
                </div>):(
                    <div className="flex-row justify-between py-2 hidden md:flex"> 
                    <Link to="/" className={activePath=="/"?"mx-2 text-slate-200 font-jost font-semibold":"mx-2 text-slate-200  font-jost font-light"}>Home</Link>
                    {/* <Link to="/about" className={activePath=="/about"?"mx-2 text-slate-200 font-jost font-semibold":"mx-2 text-slate-200  font-jost font-light"}>About</Link> */}
                    {/* <Link to="/contact" className={activePath=="/contact"?"mx-2 text-slate-200 font-jost font-semibold":"mx-2 text-slate-200  font-jost font-light"}>Contact</Link> */}
                    <Link to="/playground" className={activePath=="/playground"?"mx-2 text-slate-200 font-jost font-semibold":"mx-2 text-slate-200  font-jost font-light"}>Playground</Link>
                </div>
                )}
                <div className={!open?"flex flex-col content-between py-3 flex md:hidden cursor-pointer":"open flex flex-col content-between py-3 flex md:hidden cursor-pointer"} onClick={()=>{setOpen(!open)}}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </nav>
    )
}


export default Header