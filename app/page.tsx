import Footer from '@/components/Footer';
import LinLin from './LinLin.jpg'
import Image from 'next/image';
export default function Home() {
  return (
    <>
    <div className="flex items-center justify-around gap-5">
      <div className = "p-20">
        <Image src={LinLin} alt="Lin Lin" className="w-150 rounded-2xl" />
      </div>
      <div className="text-black-950 bg-amber-100 m-20 rounded-2xl p-10 max-w-xl">
  <p className='text-xs'>Hi! My name is Lin Lin. I am currently a junior at Drexel pursuing Computer Science.
    Outside of school, I like hanging out with friends, trying new food and journaling.
    I like to listen to music, watch financial literacy videos and doomscroll on TikTok.
    I have a great passion for Software Engineering, specifically developing scalable software systems for platforms to enable clients to have a sustainable access with the software.
    </p>

    
    </div>

    </div>

    <div className = "flex flex-col items-center justify-around bg-amber-50 p-10 m-20 rounded-2xl h-32">
    <div className='center-text'>5 Year goals</div>
      <div className = "m-5"><p>In 5 years, I will be a senior software engineer.</p></div>
  
  
    
    </div>

    <div className = " ">
      <div className = "">
        
      </div>
    </div>
    <Footer/>

   
    </>
  );

}