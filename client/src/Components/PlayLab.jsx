import { useState,useEffect } from 'react'
import { FiCodesandbox } from 'react-icons/fi';
import {IoIosArrowDropleftCircle,IoIosAlbums} from 'react-icons/io'
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { store } from 'react-notifications-component';
import {useLocation} from 'react-router-dom'
import SideBar from './SideBar';
import ChooseProbleme from './ChooseProbleme';
import FirstProbleme from './FirstProbleme';
import SecondProbleme from './SecondProbleme';


function PlayLab() {
    const[problemDisplay,setProblemDisplay] = useState(0) 
    const [data,setData]= useState([])

    useEffect(()=>{
        console.log(problemDisplay);
    },[problemDisplay])
    return(
        <section className="flex flex-row">
            <SideBar setProblemDisplay={setProblemDisplay} problemDisplay={problemDisplay}></SideBar>
            <div className="container ml-0 md:ml-48 ">
              {problemDisplay==0?
               (<ChooseProbleme setProblemDisplay={setProblemDisplay}></ChooseProbleme>):
                problemDisplay==1?
                (<FirstProbleme setProblemDisplay={setProblemDisplay}></FirstProbleme>)
                :problemDisplay==2?
                (<SecondProbleme setProblemDisplay={setProblemDisplay}></SecondProbleme>):(<></>)
               }
            </div>
        </section>
    )
}


export default PlayLab