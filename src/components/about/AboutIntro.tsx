import bgPattern from '@/assets/bg-pattern-about-1-mobile-nav-1.svg';
import Image from 'next/image';

export default function AboutIntro() {
    return (
        <div className='relative'>
            <div className="center relative z-1 grid justify-items-center text-white gap-4 pt-20 pb-[108px] md:gap-6 md:pt-28 md:pb-[112px] lg:grid-cols-[1fr_65%] lg:justify-between lg:gap-[20px] lg:pt-32 lg:pb-[120px]">
                <h1 className='text-5xl font-bold text-center md:text-6xl lg:justify-self-start lg:leading-25'>
                    About 
                </h1>
                <div className='md:max-w-114 lg:max-w-[unset] lg:before:block lg:before:w-12 lg:before:h-1 lg:before:bg-[var(--Light-Coral)]'>
                    <p className='text-center font-semibold leading-7 lg:text-left lg:mt-[40px] lg:text-lg'>
                        We help companies build dynamic teams made up of top global talent. 
                        Using our network of passionate professionals we drive innovation 
                        and deliver incredible outcomes. Talented, diverse teams shape the 
                        best products and experiences. We’ll bring those teams to you.
                    </p>
                </div>
            </div>
            <Image src={bgPattern} alt='' className='absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 md:translate-y-0' />
        </div>
    )
}