import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-0">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-7xl mb-4 font-bold">Hello, I'm David Santos</h1>
        <p className="dark:text-neutral-400 text-neutral-800 max-w-2xl tracking-normal text-lg md:text-xl lg:text-2xl">
          During these <span className="text-black dark:text-white font-bold">3 years</span> as <span className="text-black dark:text-white font-bold">Front-End Software Engineer</span>. My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps.
        </p>
        <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6'>
          <Button className='rounded-sm w-full sm:w-auto'>Download CV</Button>
          <Button variant={"ghost"} className='dark:text-orange-300 text-orange-400 w-full sm:w-auto'>See projects</Button>
        </div>
      </div>
      <div className="w-[280px] md:w-[380px]">
        <Image
          src="/images/avatar.svg"
          alt="David Santos"
          width={380}
          height={380}
          className='drop-shadow-lg w-full h-auto'
        />
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <div className="container mt-20 md:mt-40 lg:mt-60 mx-auto px-4 py-8">
      <HeroSection />
    </div>
  );
}
