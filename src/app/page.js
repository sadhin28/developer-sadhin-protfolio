"use client";
import Typewriter from "typewriter-effect";
import protfolioImg from '../../public/protfolioImg.png'
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="p-10 shadow-blue-900 hover:shadow-xl rounded-2xl  grid gap-3 md:grid-cols-12">
        <div className="text-xl  md:text-4xl  font-bold content-center  w-full  col-span-6">
          {/* user TypeWriter */}
          <div className="flex justify-center md:justify-start">
            <Typewriter

              options={{
                strings: [
                  "Hi, I Am Taosif Bin Sadhin",
                  "MERN Stack Web Developer 💻",

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
              <Image className="rounded-full w-70 h-70 " src={protfolioImg} alt="img"/>
          </div>
        </div>
      </div>
    </div>
  );
}
