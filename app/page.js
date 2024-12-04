import Image from "next/image";

import logoss from "./logoss.png";
import x from "./xx.svg";
import logos from "./logo.png";
import logodep from "./logodep.jpg";
import logodepp from "./logodep.png";
import logo from "./logo.jpg";
import depp from "./depp.png";
import deep from "./deep.png";
import deepp from "./deep.jpg";
import lol from "./lol.png";
import xx from "./x.png";

export default function Home() {
  return (
    <section className="flex flex-col items-center    px-20  pb-16 md:pb-10 text-xl bg-[#0A0A0F] text-center white max-md:px-5 max-md:pt-4">
    <div className="md:flex md:flex-col  md:w-full  ">
     <div className="flex flex-col justify-center items-center">
     <Image className="ml-4 "  
     src={logodepp} alt="Skinny" 
     width={140} 
     height={140}/>
   
   
        
   
      </div>
      <p className="text-zinc-200 mt-24 px-8 text-base "> Delves into the vast sea of information, surfacing with facts, insights, and knowledge</p>
      <p className="text-zinc-200  px-8 text-base ">

       Our purpose is to reward holders by giving them portion on trading fees
       </p>  <p className="text-zinc-100 text-sm font-thin">(deployed using ai)</p>  
         <p  className="text-zinc-200 mt-24 px-8 text-base ">CA : </p>
       <div className=" pt-8">
       <a  href="https://app.uniswap.org/swap" className="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-zinc-100" type="button">
 Buy on Uniswap
</a></div>
       </div>
         <article className="flex flex-col items-center  bg-[#0A0A0F]  text-white pt-24">

   
     <Image  
     src={lol} 
     alt="Skinny"
      width={185} 
      height={170}/>
   
       <div className="px-16 md:px-28 lg:px-60 xl:px-80  text-sm">
     
     
     <p className="pt-4 px-16  break-words break-all">
     ❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔</p>
    <div className="flex justify-center items-center">    <Image className="ml-4 "  
     src={deepp} alt="Skinny" 
     width={190} 
     height={190}/></div>
     <p className=" px-16  break-words break-all">
 
  ❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔❔</p>
      </div> 
       <nav className="flex gap-3.5 items-center mt-32 max-w-full text-base w-[248px] max-md:mt-10">
         <a href="https://x.com/deepthink_base" className="grow self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
           twitter
         </a>
         <span aria-hidden="true" className="self-stretch">|</span>
         <a href="#chart" className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
           chart
         </a>
         <span aria-hidden="true" className="self-stretch">|</span>
         <a href="" className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
           deeprooms
         </a>
       </nav>
     </article>
   </section>
  );
} 

/*<div className="  _____                 _   _     _       _    
  |  __ \              | | | |   (_)     | |   
  | |  | | ___  ___ ___| |_| |__  _ _ __ | | __
  | |  | |/ _ \/ _ | __| __| '_ \| | '_ \| |/ /
  | |__| |  __/  __| |_| |_| | | | | | | |   < 
  |_____/ \___|\___|\__|\__|_| |_|_|_| |_|_|\_\
                                                 min-h-screen bg-custom  bg-cover bg-center bg-no-repeat bg-fixed ">
    <div className=" IF YOU WATCH THIS YOU WILL BE REWARDED  min-h-screen relative">

    <div className="fixed inset-0 z-0">
   
  
      <div className="absolute inset-0 " />
    </div>

  
    <div className="relative z-10 container mx-auto px-12">
      <div className="flex items-end justify-end pt-4 "> 
        <Image src={logoss} alt="Logo" width={120} height={120} />
      
     </div> 
     <h1 className="text-4xl pt-2   font-mono font-bold items-end justify-end text-center w-full flex text-white mb-8">
     DeepThink AI
        </h1>
   
      <div className="flex flex-col items-center justify-center pt-8">
        


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

  <Image  
     src={depp} 
     alt="Skinny"
      width={235} 
      height={190}/> 
  
      
    </div>
  </div>
  </div>*/