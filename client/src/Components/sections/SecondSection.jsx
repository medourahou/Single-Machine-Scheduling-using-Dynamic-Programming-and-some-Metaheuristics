import poly from '../../assets/polynomial.png'
import meta from '../../assets/metahuristic.png'
import dp from '../../assets/dynamic.png'
import { FiCodesandbox } from 'react-icons/fi'
import { Link } from 'react-router-dom'
function SecondSection() {
    return (
        <section className="alogs-section pt-10 mt-10">
            <h3 className="text-center text-dark font-quick font-semibold text-xl ">Used Algorithmes</h3>
            <div className="mx-auto my-2 bg-red-500 w-10 h-0.5"></div>
            <div className="container mx-auto">
                <div className="flex flex-col mt-10 md:mt-6 md:flex-row flex-wrap ">
                    <div className="basis-1/3 mx-auto my-10 ">
                        <div className="flex flex-col bg-white shadow mx-auto w-80   pb-4 items-center rounded-lg overflow-hidden">
                            <img src={poly} className="img-fluid" alt="" />
                            <p className="text-center text-gray-800 font-quick text-lg my-2 font-semibold">Polynomial Algorithm</p>
                            <p className="text-justify text-gray-500 font-semibold font-roboto px-6">
                                Moore-hodgson algorithm:  is a polynomial approach aimes to minimizes the number of latey jobs on a single machine, it is
                                computationally feasible for very large problems and can be performed manually on many smaller problems and it is based on EDD (Earliest Due Date ) principle .
                            </p>
                            <div className="w-42 h-10 ">
                                <Link to="/playground" className="flex flex-row w-42 h-10 bg-primary-dark px-5 py-2 rounded-3xl my-2">
                                    <FiCodesandbox color="white" size={24} className="mr-2"></FiCodesandbox>
                                    <p className="text-white font-jost">
                                        try in playground
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 mx-auto  my-10 ">
                        <div className="flex flex-col bg-white shadow mx-auto w-80  pb-4 items-center rounded-lg overflow-hidden">
                            <img src={meta} className="img-fluid" alt="" />
                            <p className="text-center text-gray-800 font-quick text-lg my-2 font-semibold">Metaheuristic algorithm</p>
                            <p className="text-justify text-gray-500 font-semibold font-roboto px-6">
                                General Variable Neighbourhood Search (GVNS) : is a metaheuristic, or framework for building heuristics, aimed at solving combinatorial and global optimization problems. Its basic idea consists in a systematic change of neighbourhood combined with a local search.
                            </p>
                            <div className="w-42 h-10 ">
                                <Link to="/playground" className="flex flex-row w-42 h-10 bg-primary-dark px-5 py-2 rounded-3xl my-2">
                                    <FiCodesandbox color="white" size={24} className="mr-2"></FiCodesandbox>
                                    <p className="text-white font-jost">
                                        try in playground
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 mx-auto  my-10 ">
                        <div className="flex flex-col bg-white shadow mx-auto w-80  pb-4 items-center rounded-lg overflow-hidden">
                            <img src={dp} className="img-fluid" alt="" />
                            <p className="text-center text-gray-800 font-quick text-lg my-2 font-semibold">Dynamic Programming Algorithm</p>
                            <p className="text-justify text-gray-500 font-semibold font-roboto px-6">
                                Dynamic Programming Algorithm : is an  implicit enumeration algorithm  which its objective functions corresponding to a series of smaller
                                problems, then solve these sub-problems until finding the solution of the
                                original problem <br /><br />
                            </p>
                            <div className="w-42 h-10 ">
                                <Link to="/playground" className="flex flex-row w-42 h-10 bg-primary-dark px-5 py-2 rounded-3xl my-2 ">
                                    <FiCodesandbox color="white" size={24} className="mr-2"></FiCodesandbox>
                                    <p className="text-white font-jost">
                                        try in playground
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection