import axios from "axios";
import Header from "../Components/Header"
import SideBar from "../Components/SideBar"

function Samples() {
    const download = async(fileName) => {
        try {
            const a = document.createElement("a");
            a.style.display = "none";
            document.body.appendChild(a);
            // setBlobFileLoading(true);
            // var data = JSON.stringify(body);
    
            var config = {
                method: 'get',
                url: `https://processingdp.herokuapp.com/download/${fileName}`
            };
    
            let response = await axios(config);
            // setBlobFileLoading(false)
            const blobFile = new Blob([response?.data], { type: 'application/txt' });
            const url = window.URL.createObjectURL(blobFile);
            a.href = url;
            a.download = fileName; 
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
    
        }
    }
    return(
        <main>
           <Header bg="lighter-black"></Header>
           <div className="flex flex-row">
           <SideBar ></SideBar>
           <div className="container   ml-0 md:ml-48 p-10">
               <div className="mx-auto">
               <h5 className="my-4 font-jost text-lg ">Download Files For the first Problem:</h5>
                <div className="flex flex-row flex-wrap">
                    <div onClick={()=>{download('P1_n10.txt')}} className="cursor-pointer my-2 mx-4 w-40 p-4 rounded-lg border-dashed border-gray-400 border-solid border-2">
                        <p className="text-center align-center ">P1_n10.txt</p>
                    </div>
                    <div onClick={()=>{download('P1_n50.txt')}} className="cursor-pointer  my-2  mx-4 w-40 p-4 rounded-lg border-dashed border-gray-400 border-solid border-2">
                        <p className="text-center align-center ">P1_n50.txt</p>
                    </div>
                    <div onClick={()=>{download('P1_n200.txt')}} className="cursor-pointer  my-2 mx-4 w-40 p-4 rounded-lg border-dashed border-gray-400 border-solid border-2">
                        <p className="text-center align-center ">P1_n200.txt</p>
                    </div>
                    <div onClick={()=>{download('P1_n500.txt')}} className="cursor-pointer  my-2 mx-4 w-40 p-4 rounded-lg border-dashed border-gray-400 border-solid border-2">
                        <p className="text-center align-center ">P1_n500.txt</p>
                    </div>
                </div>
                <h5 className="my-4 font-jost text-lg ">Download Files For the second Problem:</h5>
                <div className="flex flex-row flex-wrap">
                    <div onClick={()=>{download('P2_n10.txt')}} className="cursor-pointer  my-2 mx-4 w-40 p-4 rounded-lg border-dashed border-gray-400 border-solid border-2">
                        <p className="text-center align-center ">P2_n10.txt</p>
                    </div>
                    <div onClick={()=>{download('P2_n100.txt')}} className="cursor-pointer my-2  mx-4 w-40 p-4 rounded-lg border-dashed border-gray-400 border-solid border-2">
                        <p className="text-center align-center ">P2_n100.txt</p>
                    </div>
                    <div onClick={()=>{download('P2_n200.txt')}} className="cursor-pointer  my-2 mx-4 w-40 p-4 rounded-lg border-dashed border-gray-400 border-solid border-2">
                        <p className="text-center align-center ">P2_n200.txt</p>
                    </div>
                    <div onClick={()=>{download('P2_n500.txt')}}  className="cursor-pointer  my-2 mx-4 w-40 p-4 rounded-lg border-dashed border-gray-400 border-solid border-2">
                        <p className="text-center align-center ">P2_n500.txt</p>
                    </div>
                </div>
           </div>
           </div>
           </div>
           {/* <PlayLab></PlayLab> */} 
       </main>
    )
}

export default Samples