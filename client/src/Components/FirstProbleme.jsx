import { useCallback, useEffect, useState } from 'react';
import { FiBox, FiArrowLeft, FiUpload, FiFileText,FiClock,FiBarChart2,FiRotateCw } from 'react-icons/fi'
import { IoIosRemoveCircle, IoIosSettings } from 'react-icons/io'
import { useDropzone } from 'react-dropzone'
import { store } from 'react-notifications-component';
import axios from 'axios'
import loadingAnimation from '../assets/lotties/loading.json'
import Gantt from './Gantt';



function FirstProbleme({ setProblemDisplay }) {
    const [defaultValue, setDefaultValue] = useState("dp")
    const [file, setFile] = useState(null);
    const [result,setResult] = useState(null);
    const [loading,setLoading] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const handleMethode = (event) => {
        setDefaultValue(event.target.value);
    }

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
        if (acceptedFiles[0].type === "text/plain") {
            setFile(acceptedFiles[0])
        } else {
            store.addNotification({
                title: "Only text file are accepted !",
                message: "Please make sure to upload a text file",
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
    }, [])

    const sendFile = () => {
        setLoading(true)
        var data = new FormData()
        data.append('file', file)
        data.append('algo', defaultValue)
        data.append('problem',1)
        axios.post("https://processingdp.herokuapp.com/upload", data).then((res) => {
            setResult(res.data);
            setLoading(false)
        }).catch(err => {
            store.addNotification({
                title: "Oops something wrong !",
                message: err.response.data.msg,
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
            setLoading(false)
        })
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const download =()=>{
        if(result){
            var data =""
            for (let index = 0; index < result.sequence.length; index++) {
                data += "Task Number :" + result.sequence[index][0] + "\t , Processing Time : "+result.sequence[index][1]+ "\t , Due  date : "+result.sequence[index][2]+"\n";
            }
        const element = document.createElement("a");
        const file = new Blob([data], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        }
    }

    return (
        <div className="container  mx-auto h-48 p-10">
            {/* style={{background:"rgba(117, 183, 244, 0.28)"}} */}
            {!loading?
            (<div>
            <div className="flex flex-row justify-between  rounded-lg" >
            <div>
                {result?
                (<button onClick={() => { setResult(null); setFile(null) }} className="px-4 mx-2 py-2 h-10  rounded-lg font-jost flex flex-row lighter-black" >
                    <FiRotateCw size={22} color="white" className="mr-2"></FiRotateCw>
                    <p className="text-white">Retry</p>
                </button>):(<></>)}
                {!result?
                <select onChange={(event) => { handleMethode(event) }} defaultValue={defaultValue} className="mx-2 outline-0 h-10 bg-sky-500 text-sky-100 font-jost rounded-lg px-4" id="">
                    <option value="dp" className=" border-none bg-sky-100 text-dark font-jost">Dynamic Programming</option>
                    <option value="meta" className=" border-none bg-sky-100 text-dark font-jost" >GVNS</option>
                    <option value="poly" className=" border-none bg-sky-100 text-dark font-jost" >Polynomial</option>
                </select>:(<></>)}
                </div>
                <div>
                <p className="font-jost my-2 mx-2 font-semibold text-gray-500">Probleme 1</p>
                </div>
            </div>
            
            {file === null  ?
                (<div {...getRootProps()} className=" cursor-pointer border-dashed rounded-lg border-gray-500  mt-10 mx-auto  border-2 h-40 w-1/2">
                    <FiUpload className="mx-auto mt-10" size={26}></FiUpload>
                    <div className="container mx-auto">
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <h4 className="text-center mt-4 font-jost">Drop the file here ...</h4> :
                                (<><h4 className="text-center mt-4 font-jost">Drag and Drop Your File here or click to select file</h4>
                                <p className="text-gray-600 my-4 mb-8 text-center font-jost">If you don't have any test files you can dowload it from Download samples</p></>)
                        }
                    </div>
                </div>) :result==null ? (
                    <div className="border-dashed rounded-lg border-green-400 bg-green-100  mt-10 mx-auto  border-2 py-10 w-1/2">
                        <FiFileText size={28} className="mx-auto  text-gray-500"></FiFileText>
                        <h2 className="text-gray-500 font-semibold font-jost text-lg text-center mt-4">{file.name}</h2>
                    </div>
                ):( <></>)}

            {file !== null && result==null ?
                (<div className="flex flex-row mt-10 justify-center">
                    <button onClick={() => { sendFile() }} id="root-div" className="flex flex-row lighter-black pr-4 py-2 rounded-3xl text-white font-jost mx-4">
                        <IoIosSettings size={24} className="mx-2 spin-in-hover"></IoIosSettings>
                        Start Processing
                    </button>
                    <button id="root-div-2" onClick={() => { setFile(null) }} className="flex flex-row  bg-red-500 pr-4 py-2 rounded-3xl text-white font-jost mx-4">
                        <IoIosRemoveCircle size={24} className="mx-2 bounce-in-hover"></IoIosRemoveCircle>
                        Cancel
                    </button>
                </div>) : (
                    <></>
                )
            }

            {result?
            <div className="  rounded-lg mt-10 p-4">
                <div className="flex flex-row font-jost font-semibold text-gray-400 "><FiClock className="my-1 mr-2"></FiClock> <p> Total Time </p></div>
                <div className="flex flex-row flex-wrap rounded-lg p-2">
                    <p className="font-jost font-bold">{Number(result.time).toFixed(5)+" S"}</p>
                </div>
                <div className="flex flex-row font-jost font-semibold text-gray-400 "><FiBarChart2 className="my-1 mr-2"></FiBarChart2> <p> Minimal Cost  </p></div>
                <div className="flex flex-row flex-wrap  rounded-lg p-2">
                <p className="font-jost font-bold">{result.min}</p>                
                </div>
                <div className="flex flex-row font-jost font-semibold text-gray-400 "><FiBox className="my-1 mr-2"></FiBox> <p> Tasks Sequence  </p></div>
                <div className="flex flex-row flex-wrap  rounded-lg p-2">
                    {/* {result.sequence.map((item,index)=>{
                        return ( */}
                            <div  id="root-box" onClick={()=>{download()}} className="cursor-pointer  h-10  mt-2 px-4 py-2 hover:border-dashed transition duration-500 ease-in-out border-solid border-gray-500   border-2 rounded-lg mr-3 ">
                                <p className="font-jost text-center text-gray-500 font-semibold ">Download Sequences file</p>
                            </div>
                        {/* )
                    })} */}
                </div>
            </div>:(<></>)}

        </div>):(
            <div>
                <div class="loader mx-auto mt-32"></div>
                <div>
                    <p className="text-center font-jost mt-3 font-lg font-semibold text-gray-500">Laoding Results</p>
                </div>
            </div>
        )}
        {result?
        (<Gantt problem={1} data={result.sequence}></Gantt>):(
            <></>
        )}
        </div>
    )
}

export default FirstProbleme