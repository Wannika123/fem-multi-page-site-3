import bgPatterm from '@/assets/bg-pattern-home-6-about-5.svg';
import ContactBtn from "./ContactBtn";
import Image from 'next/image';

export default function Ready() {
    return (
        <div className="relative bg-[var(--Light-Coral)] text-[var(--Sacramento-State-Green)] py-[76px]">
            <div className='grid justify-items-center gap-6 md:w-4/6 md:mx-auto md:flex md:justify-between'>
                <h2 className='max-w-4/6 text-center font-bold text-3xl md:max-w-[unset] lg:text-5xl'>Ready to get started?</h2>
                <ContactBtn color="dark" />
            </div>
            <Image src={bgPatterm} alt='' className='absolute left-0 bottom-0' />
        </div>
    )
}