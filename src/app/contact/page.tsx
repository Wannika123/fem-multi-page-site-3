import blackBgPattern from '@/assets/bg-pattern-about-2-contact-1.svg';
import redBgPattern from '@/assets/bg-pattern-contact-2.svg';
import Form from '@/components/contact/Form';
import person from '@/assets/icon-person.svg';
import cog from '@/assets/icon-cog.svg';
import chart from '@/assets/icon-chart.svg';
import Image from 'next/image';

const LIST = [
    {
        p: 'The quality of our talent network',
        img: {
            src: person,
            alt: 'a person, nothing special'
        }
    },
    {
        p: 'Usage & implementation of our software',
        img: {
            src: cog,
            alt: 'a cog, nothing special'
        }
    },
    {
        p: 'How we help drive innovation',
        img: {
            src: chart,
            alt: 'a chart, nothing special'
        }
    }
]

export default function ContactPage() {
    return (
        <div className="relative z-1 text-[var(--White)] pb-22 mt-20 md:pb-28 md:mt-28 lg:pb-0 lg:mt-30 lg:min-h-130">
            <div className="center grid gap-14 !max-w-128 md:gap-16 lg:grid-cols-[1fr_48%] lg:gap-[30px] lg:!max-w-[69.375rem]">
                <div>
                    <h1 className='text-center font-bold text-4xl md:text-6xl lg:leading-25 lg:text-left'>Contact</h1>
                    <h2 className='text-center text-[var(--Light-Coral)] font-bold text-3xl leading-12 mt-4 md:mt-6 lg:text-left lg:mt-4'>Ask us about</h2>
                    <div className='mt-10 grid gap-6 md:mt-6 md:gap-2 lg:mt-8'>
                        {LIST.map((obj, i) => (
                            <div key={i} className='flex gap-[23px] items-center'>
                                <div>
                                    <Image src={obj.img.src} alt={obj.img.alt} />
                                </div>
                                <p className='text-lg font-bold leading-7'>{obj.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Form />
            </div>
            <Image src={blackBgPattern} alt='' className='absolute top-0 left-0 -translate-x-1/2 hidden md:block' />
            <Image src={redBgPattern} alt='' className='absolute right-0 bottom-0 -z-1 translate-1/2 md:translate-y-0' />
        </div>
    )
}