import person from '@/assets/icon-person.svg';
import cog from '@/assets/icon-cog.svg';
import chart from '@/assets/icon-chart.svg';
import bgPattern from '@/assets/bg-pattern-home-3.svg'
import Image from 'next/image';

const FEATURES = [
    {
        header: 'Experienced Individuals',
        description: "Our network is made up of highly experienced professionals who are passionate about what they do.",
        img: {
            src: person,
            alt: 'a man'
        }
    },
    {
        header: 'Easy to Implement',
        description: "Our processes have been refined over years of implementation meaning our teams always deliver.",
        img: {
            src: cog,
            alt: 'a cog'
        }
    },
    {
        header: 'Enhanced Productivity',
        description: "Our customized platform with in-built analytics helps you manage your distributed teams.",
        img: {
            src: chart,
            alt: 'a chart'
        }
    }
]

export default function Feature() {
    return (
        <div className="relative bg-[var(--Sacramento-State-Green)] text-[var(--White)] pt-[100px] pb-[64px] md:pt-[136px] md:pb-[100px] lg:pt-[198px] lg:pb-[140px]">
            <div className="center relative grid gap-14 before:block before:absolute before:top-[-36px] before:w-12 before:h-1 before:bg-[var(--Light-Coral)] md:gap-16 lg:grid-cols-[40%_1fr] lg:gap-[125px] lg:before:top-[-58px]">
                <h2 className='text-3xl font-bold sm:max-w-[445px] lg:max-w-[unset] lg:text-5xl'>
                    Build & <br className="sm:hidden" />manage <br className="sm:hidden" />distributed <br className="sm:hidden" />teams like no <br className="sm:hidden" />one else.
                </h2>
                <div className='grid gap-12 md:gap-8'>
                    {FEATURES.map((feature, i) => (
                        <div key={i} className='grid gap-4 sm:grid-cols-[auto_1fr] md:gap-[23px]'>
                            <div className='text-center'>
                                <Image className='mx-auto' src={feature.img.src} alt={feature.img.alt} />
                            </div>
                            <div className='text-center sm:text-left'>
                                <h3 className='text-[var(--Light-Coral)] font-bold text-lg mb-2'>{feature.header}</h3>
                                <p className='opacity-80 font-semibold leading-6'>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Image src={bgPattern} alt='' className='absolute top-0 right-0 translate-x-1/2 lg:bottom-0' />
        </div>
    )
}