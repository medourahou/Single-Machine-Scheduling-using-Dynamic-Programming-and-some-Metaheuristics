import prof from '../../assets/prfo_rachid_benmanssour.jpg'
function ThirdSection() {
    return (
       <section className="pt-10 pb-12 mt-10  bg-primary-dark">
           
                <div className="contaier mx-auto">
                <h3 className="text-center text-smoke font-quick font-semibold text-xl ">Special thanks</h3>
                                <div className="mx-auto my-2 bg-red-500 w-10 h-0.5"></div>

                    <div className="flex flex-col md:flex-row ">
                    <div className="basis-1/2">
                        <p className="text-justify text-gray-400  mt-6 font-semibold font-roboto text-xl leading-loose pt-10 mx-20">
                        We would like to express our special thanks of gratitud to our beloved teacher Rachid BENMANSOUR who gaves us the golden oppurtunity to do this wonderful project on the topic Single-Machine Jobs scheduling, which also helped us in doing a lot of research and we came to know about so many new things.                        </p>
                    </div>
                    <div className="basis-1/2 pt-10">
                        <img src={prof} className="img-fluid mt-8 w-1/3 rounded-full mx-auto " alt="" />
                        <p className="font-jost text-smoke text-center mt-4 ">Prof. Rachid Benmansour</p>
                    </div>
                </div>
                </div>
       </section>
    )
}

export default ThirdSection