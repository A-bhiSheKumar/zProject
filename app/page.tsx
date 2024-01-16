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
        {/* <p className="flex items-center justify-center h-screen text-center">
          GuidanceWave is an open-source platform connecting individuals with seasoned professionals in various fields, enabling you to discover, create, and share expert-led insights for your personal and professional growth.
        </p> */}

        <Zepto />
        {/* Feed commponent */}
        {/* <Feed /> */}
        <MainDisplay />
        
    </section>
  )
}

export default Home