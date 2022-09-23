import React from 'react'
import { Superpowers } from '../components/Superpowers'

import Logo from '../assets/logo.svg'
import Wsj from '../assets/Wsj.svg'
import Tc from '../assets/Tc.svg'
import '../App.css'

export type HomeProps = {
  superpowers: string[]
}

function Home({ superpowers }: HomeProps) {
    const Ontop = () =>{
        return(
           <div className='w-[100%] h-[100%] flex justify-center'>
      <div className='w-[60%] flex flex-col justify-center p-[5%] py-[10%]  items-center'>
    {/*<h2 className="text-[5rem] font-bold text-white text-center leading-[110%]">
     We <span className='text-[#FF7143]'>read</span> so you don't <span className='text-[#FF7143]'>have</span> to
        </h2>*/}
        <Superpowers superpowers={superpowers} />
    <p className='text-[#ffffff60] text-center mt-[1rem] px-[10%] text-[1.2rem]'>Centennial helps you with enough information to not get lost in any conversation in any room</p>
    <button className='bg-white text-black w-[14%] mt-[1.5rem] py-[0.5%] px-[1%] rounded-[3px]'><h3>Submit</h3></button>
    </div>
    </div>
        )
    }
  return (

      <section className='w-[100%] h-[100%]'>
        
      <div className='border-[#ffffff20] border-b-[1px] h-[15vh] w-[100%] px-[2%] flex justify-between items-center'>
      <button className='bg-[#ffffff40] text-white w-[14%]  py-[0.5%] px-[1%] rounded-[3px]'><h3>mail@centennial.com</h3></button>
       <div className='flex flex-row'>
        <img src={Logo} className='h-[50px] w-[70px]'/>
        <h2 className='text-white text-[2rem] items-center'>centennials</h2>
       </div>
      <button className='bg-[#FF7143] text-black w-[14%]  py-[0.5%] px-[1%] rounded-[3px]'><h3>See pricing</h3></button>
      </div>

      <section className='h-[100%] w-[100%] bg-black flex flex-row justify-around items-center relative'>
      <div className='w-[100%] h-[100%]  my-[10%] justify-between flex flex-row px-[10%]'>
      <img src={Wsj} className='h-[70px] w-[70px]'/>
      <img src={Tc} className='h-[70px] w-[70px]'/>
      </div>
      <div className=' py-[9%] h-[100%] w-[100%] backdrop-blur-[0.8px] absolute z-3'>
      <Ontop />
      
      </div>
      </section>
      
     
    </section>
  
  )
}

export default Home