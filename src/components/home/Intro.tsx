import redBgPattern from '@/assets/bg-pattern-home-2.svg';
import blackBgPattern from '@/assets/bg-pattern-home-1.svg';
import Image from 'next/image';

export default function Intro() {
    return (
        <div className='relative'>
            <div className="center relative z-1 grid justify-items-center text-white gap-4 pt-20 pb-[197px] md:gap-6 md:pt-28 md:pb-[256px] lg:grid-cols-[1fr_40%] lg:justify-between lg:gap-[80px] lg:pt-32 lg:pb-[250px]">
                <h1 className='text-5xl font-bold text-center md:text-6xl lg:text-8xl lg:text-left'>
                    Find the best <span className='text-[var(--Light-Coral)]'>talent</span>
                </h1>
                <div className='md:max-w-114 lg:max-w-[unset] lg:before:block lg:before:w-12 lg:before:h-1 lg:before:bg-[var(--Rapture-Blue)]'>
                    <p className='text-center font-semibold leading-7 lg:text-left lg:mt-[80px] lg:text-lg lg:leading-7'>
                        Finding the right people and building high performing teams can 
                        be hard. Most companies aren’t tapping into the abundance of global 
                        talent. We’re about to change that.
                    </p>
                </div>
                <Image src={redBgPattern} alt='' className='absolute bottom-0 right-1/2 translate-x-1/2 lg:translate-0 lg:right-0'  />
            </div>
            <Image src={blackBgPattern} alt='' className='absolute hidden lg:block left-0 top-32 -translate-x-1/2' />
        </div>
    )
}