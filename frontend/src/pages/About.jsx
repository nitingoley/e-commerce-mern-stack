import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import imageS from '../assets/tab.gif'

const About = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-16 p-4">

        <div className="shadow-lg rounded-2xl p-8">
        <h1 className='text-blue-600 text-3xl text-center justify-center'>Hello everyone</h1> 
         
         <div className='flex justify-center p-3 rounded-sm'>
         <img src={imageS} alt="" className='rounded-lg' width="300px" height="240px" />
         </div>
             
        <p className='p-3 gap-2'>Let me ' Introduce myself my name is Nitin Goley and i'm from Bareilly and currently doing BTech from Invertis University. I'm very enthusiast learning new tech stack in market demand. Apart this my skills are Backend development Node.js Express and Database. I want become a proficent Software developer i want contribute my side to IT industry.My short term goal is get job in startups in india. And my hobbies  are cricket , chess</p>
        
      

        <div className='mt-20 sm:flex items-center justify-between sm:space-x-6'>
        <h4 className='text-blue-800 text-sm'>My Social Media Handles</h4>
                <ul className='flex gap-5 text-black text-3xl mb-3 sm:mb-0'>
                    <li><a href="https://github.com/nitingoley"><FaGithub/></a></li>
                    <li><a href="https://instagram.com/nitin__goley"><FaInstagramSquare/></a></li>
                    <li><a href="#"><FaFacebook/></a></li>
                </ul>

                </div>
        </div>
    
         
    
    </div>
  )
}

export default About;