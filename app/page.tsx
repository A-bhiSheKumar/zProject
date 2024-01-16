// import Feed from "@components/Feed";

import Zepto from "@/components/About-zepto"
import MainDisplay from "@/components/main"
import App from "next/app"

//This render our home Page
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">   
            Zepto Task
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">Zepto-Abhishek-Developer</span>
        </h1>

        <button className="rounded-full lg:mt-2 border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
            <a href="https://stack-abhi.netlify.app/">Stack_Abhi Portfolio</a>
        </button>

        <Zepto />
      
        <MainDisplay />
        
    </section>
  )
}

export default Home