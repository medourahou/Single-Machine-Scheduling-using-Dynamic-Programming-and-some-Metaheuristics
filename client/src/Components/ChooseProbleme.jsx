import { Link } from 'react-router-dom';
import { FiCodesandbox } from 'react-icons/fi';
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/operations.json';

function ChooseProbleme({setProblemDisplay}) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
    <div>
        <Lottie
        isClickToPauseDisabled={true} 
        options={defaultOptions}
        height={300}
        width={300}
    />
    <p className="text-center font-jost text-lg">Choose Type of Problem to start</p>
    <div className="flex flex-row mx-auto justify-center mt-4">
        <button onClick={()=>{setProblemDisplay(1)}} className="flex flex-row  m-auto mt-4 bg-primary-dark mx-4 text-lg text-white font-jost px-5 py-2 rounded-3xl w-40 h-11 "><FiCodesandbox size={24} className="mr-2"></FiCodesandbox> Probleme 1</button> 
        <button onClick={()=>{setProblemDisplay(2)}} className="flex flex-row  m-auto mt-4 bg-primary-dark mx-4 text-lg text-white font-jost px-5 py-2 rounded-3xl w-40 h-11 "><FiCodesandbox size={24} className="mr-2"></FiCodesandbox> Probleme 2</button> 
    </div>
    </div>
    )
}

export default ChooseProbleme