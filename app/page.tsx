import LinLin from './LinLin.jpg'
import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex items-center justify-around gap-5">
      <div className = "p-20">
        <Image src={LinLin} alt="Lin Lin" className="w-150 rounded-2xl" />
      </div>
      <div className="text-purple-950 bg-amber-100 m-20 rounded-2xl p-10 max-w-xl">
  <p className='text-xs'>Hi! My name is Lin Lin. I am currently a junior at Drexel pursuing Computer Science.
    Outside of school, I like hanging out with friends, trying new food and journaling.
    I like to listen to music, watch financial literacy videos and doomscroll on TikTok.
    I have a great passion for Software Engineering, specifically developing scalable software systems for platforms to enable clients to have a sustainable access with the software.
    </p>
</div>
    </div>
  );
}