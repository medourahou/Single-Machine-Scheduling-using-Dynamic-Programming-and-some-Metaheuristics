import { IoIosPlanet } from 'react-icons/io'
import { FiCodesandbox } from 'react-icons/fi'
import Header from '../Header'
import { Link } from 'react-router-dom'
function Hero({}) {
    return (
        <section className="landing-section">
            <div className="landing-cover"></div>
            <Header ></Header>
            <div>
            <div className="flex flex-row z-indexing-landing-page">
                <div className="basis-full lg:basis-1/2 mt-24 ">
                    <h1 className="font-jost text-center text-white" style={{ fontSize: '2.4em' }}>Give us any <span className="text-red-500"> Tasks / Jobs   </span> ,<br /> And get optimal scheduling </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-4 ">
                    <a href="#about"><button className="flex flex-row m-auto  mt-4 bg-red-500 mx-4 px-5 py-2 text-lg rounded-3xl text-white font-jost font-semiblod w-40 h-11 landing-btn pink-glow "><IoIosPlanet size={24} className="mr-2"></IoIosPlanet> Get Started</button></a>
                    <Link to="playground" ><button className="flex flex-row  m-auto mt-4 bg-primary-dark mx-4 text-lg text-white font-jost px-5 py-2 rounded-3xl w-40 h-11 landing-btn dark-glow"><FiCodesandbox size={24} className="mr-2"></FiCodesandbox> Playground</button> </Link>
                    </div>
                    <p className="text-center mt-6 font-jost text-xl text-white">Based on Three different Algorithmes</p>
                </div>
            </div>
            
            <div className="btm-shadow">
                <div  className="mx-auto mouse-scroll">
                    <div  className="mouse-small-dot mx-auto mt-1 animate-scroll">
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Hero