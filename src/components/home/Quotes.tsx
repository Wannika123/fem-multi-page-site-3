import kady from '@/assets/avatar-kady.jpg';
import aiysha from '@/assets/avatar-aiysha.jpg';
import arthur from '@/assets/avatar-arthur.jpg';
import quote from '@/assets/icon-quotes.svg';
import squreBgPattern from '@/assets/bg-pattern-home-4-about-3.svg';
import circleBgPattern from '@/assets/bg-pattern-home-5.svg';
import Image from 'next/image';

const QUOTES = [
    {
        name: 'Kady Baker',
        position: 'Product Manager at Bookmark',
        quote: '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
        img: {
            src: kady,
            alt: 'profile picture of Kady Baker'
        }
    },
    {
        name: 'Aiysha Reese',
        position: 'Founder of Manage',
        quote: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
        img: {
            src: aiysha,
            alt: 'profile picture of Aiysha Reese'
        }
    },
    {
        name: 'Arthur Clarke',
        position: 'Co-founder of MyPhysio',
        quote: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
        img: {
            src: arthur,
            alt: 'profile picture of Arthur Clarke'
        }
    }
]

export default function Quotes() {
    return (
        <div className="relative text-[var(--White)] py-[140px]">
            <div className="center text-center">
                <h2 className='font-bold text-3xl lg:text-5xl'>Delivering real results for top companies. Some of our <span className='text-[var(--Rapture-Blue)]'>success stories.</span></h2>
                <div className='mt-21 grid gap-21 lg:mt-23 lg:grid-cols-3 lg:gap-[30px]'>
                    {QUOTES.map((q, i) => (
                        <div key={i} className='relative text-center'>
                            <Image src={quote} alt='' className='absolute -z-1 left-1/2 top-[-36px] -translate-x-1/2' />
                            <p className='leading-6 font-semibold'>{q.quote}</p>
                            <h3 className='text-lg mt-4 leading-7 font-bold text-[var(--Rapture-Blue)] lg:mt-6'>{q.name}</h3>
                            <p className='text-sm font-medium italic'>{q.position}</p>
                            <div className='mt-4 lg:mt-8'>
                                <Image src={q.img.src} alt={q.img.alt} className='w-16 h-16 rounded-full mx-auto border-2 border-solid border-[#c4fffe] overflow-hidden' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Image className='absolute top-0 left-0' src={squreBgPattern} alt='' />
            <Image className='absolute bottom-0 right-0' src={circleBgPattern} alt='' />
        </div>
    )
}