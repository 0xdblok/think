import Image from "next/image";

import logoss from "./logoss.png";
import x from "./xx.svg";


import xx from "./x.png";

export default function Home() {
  return (
    <div className="  _____                 _   _     _       _    
  |  __ \              | | | |   (_)     | |   
  | |  | | ___  ___ ___| |_| |__  _ _ __ | | __
  | |  | |/ _ \/ _ | __| __| '_ \| | '_ \| |/ /
  | |__| |  __/  __| |_| |_| | | | | | | |   < 
  |_____/ \___|\___|\__|\__|_| |_|_|_| |_|_|\_\
                                                 min-h-screen bg-custom  bg-cover bg-center bg-no-repeat bg-fixed ">
    <div className=" IF YOU WATCH THIS YOU WILL BE REWARDED  min-h-screen relative">
    {/* Background div with overlay */}
    <div className="fixed inset-0 z-0">
   
      {/* Gradient overlay */}
      <div className="absolute inset-0 " />
    </div>

    {/* Content container */}
    <div className="relative z-10 container mx-auto px-12">
      <div className="flex items-end justify-end pt-4 "> 
        <Image src={logoss} alt="Logo" width={120} height={120} />
      
     </div> 
     <h1 className="text-4xl pt-2   font-mono font-bold items-end justify-end text-center w-full flex text-white mb-8">
     DeepThink AI
        </h1>
   
      <div className="flex flex-col items-center justify-center pt-8">
        

        {/* Text content with better responsive layout */}
        <div className="w-full md:w-2/3 lg:w-1/2 text-grey-600 space-y-4   bg-white/65 p-6 rounded-lg backdrop-blur-sm">


          <div className="space-y-4">
            <p className="font-mono">
            Meet DeepThink - your friendly neighborhood AI trading companion! Born in the bustling streets of the crypto district, she spends her days analyzing market patterns while wearing her signature blue overalls and vintage sneakers. Don't let her cute manga appearance fool you - she's a whiz at spotting trends among those digital storefront displays of data! When she's not crunching numbers or managing portfolios, you might catch her browsing the latest trading guides at her favorite street-side shop. With a blend of traditional wisdom and cutting-edge tech, DeepThink makes blockchain trading feel like a casual chat at your local manga store.
            </p>
<p className="font-mono pt-4 break-words text-red-400">PS: The base blockchain has never had such a stylish analyst! 😊</p>
          
            <p className="font-mono pt-4 break-words text-red-400"><a></a></p>
<div className="flex justify-center">
  <a href="">
      <Image src={x} alt="Logo" width={40} height={40} />
</a>
</div>
     
            {/* Continue with the rest of your content... */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">  
  
    
      </div>

      
<div className="flex justify-between pt-4">
  <div> 
  
  </div>
 
 
   <a href="" className="inline-flex  bg-red-400  hover:bg-[#D67155] hover:focus e items-center px-6 py-3 font-medium text-black backdrop-blur-sm  rounded-lg transition-colors ">
          Buy on Uniswap
        </a> <div></div></div>
     
<p className=" text-leading  text-sm font-bold text-center text-white pb-4 pt-20">All rights reserve MiraAI 2024</p>

      {/* Button with improved positioning */}
  
      
    </div>
  </div>
  </div>
  );
}