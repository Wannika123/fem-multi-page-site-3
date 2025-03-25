import logo from '@/assets/logo.svg';
import Image from 'next/image';
import NavLinks from './NavLinks';

export default function Header() {
    return (
        <header className='center grid grid-cols-[auto_1fr] items-center pt-[48px] md:pt-[64px] md:gap-[48px] lg:pt-[72px] lg:gap-[80px]'>
            <div>
                <Image src={logo} alt='logo icon' />
            </div>
            <NavLinks />
        </header>
    )
}