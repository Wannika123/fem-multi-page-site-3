import verge from '@/assets/logo-the-verge.png';
import jakarta from '@/assets/logo-jakarta-post.png';
import guardian from '@/assets/logo-the-guardian.png';
import tech from '@/assets/logo-tech-radar.png';
import gadgets from '@/assets/logo-gadgets-now.png';
import bgPattern from '@/assets/bg-pattern-about-4.svg';
import Image from 'next/image';

export default function Clients() {
    return (
        <div className='relative text-[var(--White)] bg-[var(--Sacramento-State-Green)] py-[88px] md:py-[100px] lg:py-[140px]'>
            <div className='center'>
                <h2 className='text-center font-bold text-3xl mb-16 lg:text-5xl'>Some of our clients</h2>
                <div className='grid justify-center justify-items-center gap-[70px] md:flex md:flex-wrap md:justify-between md:items-center md:gap-[20px]'>
                    <Image className='w-[145px] h-auto' src={verge} alt='the verge logo' />
                    <Image className='w-[150px] h-auto' src={jakarta} alt='the jakarta post logo' />
                    <Image className='w-[150px] h-auto' src={guardian} alt='the guardian logo' />
                    <Image className='w-[145px] h-auto' src={tech} alt='tech radar logo' />
                    <Image className='w-[98px] h-auto' src={gadgets} alt='gadgets now logo' />
                </div>
            </div>
            <Image src={bgPattern} alt='' className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 lg:translate-y-0' />
        </div>
    )
}