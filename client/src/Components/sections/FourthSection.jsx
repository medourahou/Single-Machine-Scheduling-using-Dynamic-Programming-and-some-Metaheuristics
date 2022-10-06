import abdo from '../../assets/abdellatif.png'
import ouraho from '../../assets/ourahou.png'
import {IoLogoLinkedin} from 'react-icons/io'
function FourthSection() {
    return (
        <section id="contact" className="pt-10 mb-10 mt-10 ">
           
                <div className="contaier mx-auto">
                <h3 className="text-center text-dark font-quick font-semibold text-xl ">Created By</h3>
                                <div className="mx-auto my-2 bg-red-500 w-10 h-0.5"></div>

                    <div className="flex flex-col md:flex-row ">
                    <div className="basis-1/2 pt-10">
                        <img src={abdo} className="saturate img-fluid mt-8 w-1/3  rounded-full mx-auto " alt="" />
                        <p className="font-jost font-semibold text-dark text-lg text-center mt-4 ">Abdellatif  Ahammad</p>
                        <p className="font-jost text-gray-500 text-lg text-center mt-4 ">M2SI Student at INSEA</p>
                        <a href="https://www.linkedin.com/in/abdellatif-ahammad/"><IoLogoLinkedin size={26} color={'#2867B2'} className="mx-auto mt-4"></IoLogoLinkedin></a>
                    </div>
                    <div className="basis-1/2 pt-10">
                        <img src={ouraho} className="saturate img-fluid mt-8 w-1/3  rounded-full mx-auto " alt="" />
                        <p className="font-jost text-dark font-semibold text-lg text-center mt-4 ">Ourahou Mohamed</p>
                        <p className="font-jost text-gray-500 text-lg text-center mt-4 ">M2SI Student at INSEA</p>
                        <a href="https://www.linkedin.com/in/mohamed-ourahou-01936021b/"><IoLogoLinkedin size={26} color={'#2867B2'} className="mx-auto mt-4"></IoLogoLinkedin></a>

                    </div>
                </div>
                </div>
       </section>
    )
}

export default FourthSection