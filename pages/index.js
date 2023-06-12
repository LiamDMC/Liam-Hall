import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin,AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import deved from '../public/linkedin.jpg';
import web1 from "../public/portfolio_template.png";
import web2 from "../public/portfolio_template2.png";
import web3 from "../public/portfolio_template3.png";
import web4 from "../public/portfolio_templatee4.png";
import web5 from "../public/portfolio_templatee6.png";


import { DiHtml5, DiJavascript1, DiCss3, DiBootstrap, DiReact, DiMysql} from 'react-icons/di';
import { SiTailwindcss } from "react-icons/si";


import { useState } from 'react';

export default function Home() {
  const[darkMode, setDarkMode]=useState(true);
  return (
    <div className={darkMode ?'dark':""}>
      <Head>
      <link rel="icon" href="../public/Images/favicon.png" />
        <title>Liam Hall</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className='bg-gray-200  dark:bg-neutral-900 font-poppins'>
        <section className="lg:min-h-screen px-5 md:px-20 lg:40 ">
        <nav className="py-10 mb-12 flex justify-between items-center">
          <h1 className='text-xl font-poppins dark:text-gray-200 '>
            Developedby
          </h1>
          <ul className='flex items-center'>
            <li>
            <BsFillMoonStarsFill onClick={() =>setDarkMode (!darkMode)} className="cursor-pointer text-2xl dark:text-gray-200 " />
            </li>
            <li className="px-2"><a href="https://www.linkedin.com/in/liam-hall-23795a157/" rel="noreferrer" target="_blank"><AiFillLinkedin className='dark:text-gray-200  text-teal-700 text-5xl'/></a></li>

            <li><a  className="inline-block px-7 py-3 dark:bg-orange-500 bg-teal-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md dark:hover:bg-orange-600 hover:bg-teal-800 hover:shadow-lg dark:focus:bg-orange-600 focus:bg-teal-800 focus:shadow-lg focus:outline-none focus:ring-0 dark:active:bg-orange-700 active:bg-teal-900 active:shadow-lg transition duration-150 ease-in-out" href="Liam_Hall.pdf" download>Resume</a>
</li>
          </ul>
        </nav>
<div className='text-center p-10 grid gap-y-5 md:gap-y-0 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-20 lg:gap-20  '>

<div className='col-span-3 md:col-span-3 lg:col-span-2'>
<h2 className='text-5xl py-2 text-teal-700 font-medium md:text-6xl dark:text-orange-500'>Liam Hall</h2>
<h3 className='text-2xl py-2 md:text-3xl dark:text-gray-200 '>Frontend Developer</h3>
<p className='text-md py-5 leading-8 text-neutral-900 md:text-xl max-w-lg mx-auto dark:text-gray-200 '>An aspiring Front-end developer/Web Developer taking a further interest into focusing on JavaScript frameworks such as React. </p>


<div className='text-5xl flex justify-center gap-2 py-3 text-neutral-900'>
<a type="button" className="inline-block px-8 py-3.5  dark:bg-orange-500 bg-teal-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md dark:hover:bg-orange-600 hover:bg-teal-800 hover:shadow-lg dark:focus:bg-orange-600 focus:bg-teal-800 focus:shadow-lg focus:outline-none focus:ring-0 dark:active:bg-orange-700 active:bg-teal-900 active:shadow-lg transition duration-150 ease-in-out" href="#MyToolKit">My Toolkit</a>
<a type="button" className="inline-block px-8 py-3.5 dark:bg-orange-500 bg-teal-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md dark:hover:bg-orange-600 hover:bg-teal-800 hover:shadow-lg dark:focus:bg-orange-600 focus:bg-teal-800 focus:shadow-lg focus:outline-none focus:ring-0 dark:active:bg-orange-700 active:bg-teal-900 active:shadow-lg transition duration-150 ease-in-out" href="#Portfolio">Portfolio</a>


</div>



</div>

<div className='flex col-span-3 md:col-span-3 lg:col-span-1 py-5'>
<div className='relative bg-gradient-to-b from-teal-500 rounded-full w-30 h-30 mx-auto overflow-hidden md:h-64 md:w-64 '>
<Image src={deved}  />

</div>
</div>
</div>



        </section>

<section id="MyToolKit" className="dark:bg-orange-500 bg-teal-600 text-gray-200  dark:text-neutral-900 ">
{ darkMode ? <svg className='relative bottom-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#171717" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,154.7C384,149,480,75,576,48C672,21,768,43,864,74.7C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
 : <svg className='relative bottom-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E5E7EB" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,154.7C384,149,480,75,576,48C672,21,768,43,864,74.7C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>}
<div className="px-5 md:px-20 lg:40 sm:bottom-3 lg:bottom-12 md:bottom-12 relative grid grid-cols-6 lg:grid-cols-6">
<div className=" col-span-6 lg:col-span-4">

  <h3 className='text-3xl py-1 font-extrabold'>My toolkit</h3>
  <p className='text-md py-2 leading-8 '>This is the tech stack I have exposure to through commercial experience and self-development. I'm always keen to expand this, with current interests being Next.JS alongside tailwind, the current tech stack that I'm actively learning. </p>



</div>

<div className='mb-6 mt-6 col-span-6 lg:col-span-2 '>

<DiHtml5 className='w-16 h-16 inline-block'/> 
<DiCss3 className='w-16 h-16 inline-block'/> 
<DiJavascript1 className='w-16 h-16 inline-block'/> 
<DiBootstrap className='w-16 h-16 inline-block'/>
<DiReact className='w-16 h-16 inline-block'/>
<DiMysql className='w-16 h-16 inline-block'/>
<SiTailwindcss className='w-16 h-16 inline-block' alt="hi"/>


</div>


<div className="mt-6 text-right col-span-6">

  <h3 className='text-3xl py-1 font-extrabold'>My Aim</h3>
  <p className='text-md py-2 leading-8 '>Being a Front-end developer currently, I want to continue on this path gaining exposure to different tech stacks both personally and commercially in the future. As well as this, I want to gain knowledge into backend languages too despite mainly focusing on Front-end. </p>

  </div>

</div>
{ darkMode ?<svg  className="relative top-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#171717" fill-opacity="1" d="M0,64L30,69.3C60,75,120,85,180,112C240,139,300,181,360,176C420,171,480,117,540,85.3C600,53,660,43,720,69.3C780,96,840,160,900,165.3C960,171,1020,117,1080,117.3C1140,117,1200,171,1260,208C1320,245,1380,267,1410,277.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
:<svg  className="relative top-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E5E7EB" fill-opacity="1" d="M0,64L30,69.3C60,75,120,85,180,112C240,139,300,181,360,176C420,171,480,117,540,85.3C600,53,660,43,720,69.3C780,96,840,160,900,165.3C960,171,1020,117,1080,117.3C1140,117,1200,171,1260,208C1320,245,1380,267,1410,277.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>}

</section>
<section id="Portfolio" className="scroll-mt-32">

<div className="px-5 md:px-20  sm:bottom-3 lg:bottom-12 md:bottom-12 relative grid grid-cols-1 lg:grid-cols-6">
<div className=" col-span-1 lg:col-span-4">

  <h3 className='text-3xl py-1 font-extrabold dark:text-orange-500 text-teal-700'>Portfolio</h3>
</div>
</div>
 
  <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap px-5 md:px-20 '>
  <div className="basis-1/3 flex-1">
  <a href={'https://codesandbox.io/p/sandbox/github/LiamDMC/E-Commerce-Dummy-Site/tree/master'} target="_blank" >
      <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
      </a>
    </div>
    <div className="basis-1/3 flex-1">
    <a href={'https://www.btcactivewear.co.uk/store/index.pl?PageName=CraftLandingPage'} target="_blank" >
      <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
      </a>
    </div>
    <div className="basis-1/3 flex-1">
    <a href={'http://ultimateclothingcollection.co.uk/'} target="_blank" >
      <Image src={web2} className="rounded-lg object-cover"  width={'100%'} height={'100%'} layout="responsive"/>
      </a>
    </div>
    <div className="basis-1/3 flex-1">
    <a href={'https://www.btcactivewear.co.uk/'} target="_blank" >
      <Image src={web3} className="rounded-lg object-cover"  width={'100%'} height={'100%'} layout="responsive"/>
      </a>
    </div>
    <div className="basis-1/3 flex-1">
      <Image src={web4} className="rounded-lg object-cover"  width={'100%'} height={'100%'} layout="responsive"/>
    </div>

    <div className="basis-1/3 flex-1">
    </div>
    
   
  </div>

</section>
  
      </main>
    </div>
  )
}
