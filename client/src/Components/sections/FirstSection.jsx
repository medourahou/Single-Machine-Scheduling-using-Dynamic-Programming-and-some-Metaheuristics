import processing from '../../assets/Processing.gif'

function FirstSection() {
    return (
        <section  id="about" className="tools-section pt-10">
            <div className="container mx-auto mt-16">
                <h3 className="text-center text-dark font-quick font-semibold text-xl ">About this project</h3>
                <div className="mx-auto my-2 bg-red-500 w-10 h-0.5"></div>
                <div className="flex flex-col md:flex-row mx-10">
                    <div className="basis-1/2">
                        <p className="text-justify text-gray-600  mt-6 font-semibold font-roboto text-xl leading-loose pt-10">
                        Single machine scheduling problems (MSPs) are one of the classical combinatorial optimisation problems which exist in many diverse areas, so this web application is at your service which provides you the best arrangement of a data sequence which minimises its delay jobs number and total tardiness and earliness penalties sum by using different algorithms
                        </p>
                    </div>
                    <div className="basis-1/2">
                        <img src={processing} className="img-fluid mt-8 w-2/3 mx-auto " alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default FirstSection