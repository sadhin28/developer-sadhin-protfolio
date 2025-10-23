"use client";
import Typewriter from "typewriter-effect";
import protfolioImg from '../../public/protfolioImg.png'
import Link from "next/link";
import Image from "next/image";
import { div } from "framer-motion/client";
import Myskills from "./components/Myslills";
import GitHubContributions from "./components/GitHubContributions";
import Projects from "./components/Repositories";
import useTitle from "@/hook/useTitle";
import About from "./components/About";
import ContactForm from "./components/Contact";
import ReactiveButton from "reactive-button";
export default function Home() {

  useTitle("HOME")
  const handleClick = () => {
    // Open Google Drive link in a new tab
    window.open(
      'https://drive.google.com/file/d/12gSCvxHNlnV9TtDrJ3bmap7_QOcsWVbn/view?usp=sharing',
      '_blank'
    );
  };
  return (
   <div>
      <div className="p-2">
      <div className=" py-10 rounded-xl  grid gap-8 md:grid-cols-12">
        <div className="text-xl  md:text-3xl  font-bold content-center  w-full  col-span-6">
          {/* user TypeWriter */}
          <div className="flex justify-center md:justify-start">
            <Typewriter

              options={{
                strings: [
                  "Hi, I Am Taosif Bin Sadhin",
                  "I Am A MERN Stack Web Developer 💻",
                  "CMS Expert With Wix and Velo ",
                  

                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 50,
              }}
            />
          </div>

        </div>
        <div className="text-2xl  font-bold content-center  w-full  col-span-6">
          {/* user image */}
          <div className="flex rounded-full  justify-center md:justify-end">
            <Image src={protfolioImg} alt="Profile Image" className=" hover:animate-none transform-3d duration-3000 hover:backdrop-hue-rotate-360 rounded-full w-72 h-72 shadow-2xl hover:shadow-blue-700  border-10 border-blue-600/20  hover:border-y-green-600 animate-pulse  object-cover  transform-view  hover:scale-105" />
          </div>

        </div>

      </div>
      <div className="py-5 flex items-center justify-center gap-11">
        
        <div className="text-center">
          <ReactiveButton outline
             className="rounded"
             type="submit"
              color="blue"
              idleText='DOWNLOAD CV'
              size="lerge"
              onClick={handleClick}
          />

                                </div>
       
        <Link href="/contact" >
           <div className="text-center">
            <ReactiveButton outline
               className="rounded"
               type="submit"
                color="red"
                idleText='HIRE ME'
                size="lerge"
            />

            </div>
        </Link>

      </div>
    </div>
    {/*about */}
       <div>
        <About/>
       </div>
       {/* My Skills */}
      <div>
         <Myskills/>
      </div>
      {/* Github Contrubutions */}
      <div>
        <GitHubContributions/>
      </div>
      {/* My gihub ripos */}
      <div>
        <Projects/>
      </div>
      {/* Contact */}
      <div>
        <ContactForm/>
      </div>
   </div>
  );
}
