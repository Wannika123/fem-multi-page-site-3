import nikita from '@/assets/avatar-nikita.jpg';
import christian from '@/assets/avatar-christian.jpg';
import cruz from '@/assets/avatar-cruz.jpg';
import drake from '@/assets/avatar-drake.jpg';
import griffin from '@/assets/avatar-griffin.jpg';
import aden from '@/assets/avatar-aden.jpg';
import circleBgPattern from '@/assets/bg-pattern-about-2-contact-1.svg';
import squareBgPattern from '@/assets/bg-pattern-home-4-about-3.svg';
import Image from 'next/image';
import DirectorWrapper from './DirectorWrapper';

const DIRECTORS = [
    {
        name: 'Nikita Marks',
        position: 'Founder & CEO',
        quote: '“It always amazes me how much talent there is in every corner of the globe.”',
        img: {
            src: nikita,
            alt: 'profile picture of Nikita Marks'
        }
    },
    {
        name: 'Christian Duncan',
        position: 'Co-founder & COO',
        quote: '“Distributed teams required unique processes. You need to approach work in a new way.”',
        img: {
            src: christian,
            alt: 'profile picture of Christian Duncan'
        }
    },
    {
        name: 'Cruz Hamer',
        position: 'Co-founder & CTO',
        quote: '“Technology is at the forefront of enabling distributed teams. That\'s where we come in.”',
        img: {
            src: cruz,
            alt: 'profile picture of Cruz Hamer'
        }
    },
    {
        name: 'Drake Heaton',
        position: 'Business Development Lead',
        quote: '“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”',
        img: {
            src: drake,
            alt: 'profile picture of Drake Heaton'
        }
    },
    {
        name: 'Griffin Wise',
        position: 'Lead Marketing',
        quote: '“Unique perspectives shape unique products, which is what you need to survive these days.”',
        img: {
            src: griffin,
            alt: 'profile picture of Griffin Wise'
        }
    },
    {
        name: 'Aden Allan',
        position: 'Head of Talent',
        quote: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”',
        img: {
            src: aden,
            alt: 'profile picture of Aden Allan'
        }
    }
]

export default function Directors() {
    return (
        <div className='relative bg-[var(--Deep-Jungle-Green)] text-[var(--White)] pt-[88px] pb-[116px] md:pt-[100px] md:pb-[128px] lg:pt-[140px] lg:pb-[168px]'>
            <h2 className='text-center font-bold text-3xl mb-12 lg:text-5xl lg:mb-16'>Meet the directors</h2>
            <div className='center grid gap-13 md:grid-cols-2 md:gap-x-[11px] md:gap-y-19 lg:grid-cols-3 lg:gap-x-[30px]'>
                {DIRECTORS.map(obj => (
                    <DirectorWrapper key={obj.name} director={obj} />
                ))}
            </div>
            <Image src={circleBgPattern} alt='' className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 md:translate-y-0' />
            <Image src={squareBgPattern} alt='' className='absolute bottom-0 right-0' />
        </div>
    )
}