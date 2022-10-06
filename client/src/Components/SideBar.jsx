import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoIosArrowDropleftCircle, IoMdCloudDownload } from 'react-icons/io'
import { store } from 'react-notifications-component';
// import Lottie from 'react-lottie';
import { Link,useLocation } from 'react-router-dom';

function SideBar({ problemDisplay, setProblemDisplay }) {
    const location = useLocation();
    const [activePath,setActivePath] = useState('/')
    useEffect(()=>{
        setActivePath(location.pathname)
        console.log(location.pathname);
    },[location])

    const notify = () => {
        if (problemDisplay == 0) {
            store.addNotification({
                title: "Choose Probleme Type !",
                message: "Please make sure to choose type of probleme First",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }
    }
    

return (
    <aside className="hidden md:block bisis-1/3 lighter-black w-48 fixed top-0  pl-5 pt-3 z-10" style={{ height: '100vh' }}>
        <a className="font-jost font-extrabold p-4 tracking-wide text-smoke cursor-pointer" style={{ fontSize: '1.25rem', fontWeight: 'bold' }} >Processing</a>
        {activePath!='/samples'?
        (<div onClick={() => { setProblemDisplay(0) }} className="cursor-pointer flex flex-row text-center  mt-10">
            <IoIosArrowDropleftCircle color='white' size={24} className="align-center mr-2"></IoIosArrowDropleftCircle>
            <p className="text-white font-jost">Choose Probleme</p>
        </div>):(
            <Link to="/playground" className="cursor-pointer flex flex-row text-center  mt-10">
            <IoIosArrowDropleftCircle color='white' size={24} className="align-center mr-2"></IoIosArrowDropleftCircle>
            <p className="text-white font-jost">Choose Probleme</p>
        </Link> 
        )}
        <Link to="/samples"  className="cursor-pointer flex flex-row text-center  mt-10">
            <IoMdCloudDownload color='white' size={24} className="align-center mr-2"></IoMdCloudDownload>
            <p className="text-white font-jost">Download Smaples</p>
        </Link>
        
    </aside>
)
}

export default SideBar