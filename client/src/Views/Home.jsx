import Header from "../Components/Header"
import Hero from "../Components/sections/Hero"
import FirstSection from "../Components/sections/FirstSection"
import SecondSection from "../Components/sections/SecondSection"
import ThirdSection from "../Components/sections/ThirdSection"
import FourthSection from "../Components/sections/FourthSection"
import Footer from "../Components/sections/Footer"
import { useRef } from "react"

function Home() {
    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()
    return (
       <main>
           {/* <Header></Header> */}
           <Hero ></Hero>
           <FirstSection></FirstSection>
           <SecondSection></SecondSection>
           <ThirdSection></ThirdSection>
           <FourthSection></FourthSection>
           <Footer></Footer>
       </main>
    )
}

export default Home