'use client'

import { useEffect, useRef, useState } from "react";
import menuIcon from '@/assets/icon-hamburger.svg';
import closeIcon from '@/assets/icon-close.svg';
import bgPattern from '@/assets/bg-pattern-about-1-mobile-nav-1.svg';
import Image from "next/image";
import Link from "next/link";
import ContactBtn from "./ContactBtn";

export default function NavLinks() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (mobileMenuOpen) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close()
        }
    }, [mobileMenuOpen])

    return (
        <nav className="flex">
            <button
                className="ml-auto lg:hidden relative z-20"
                onClick={() => setMobileMenuOpen(prev => !prev)}
                aria-label={mobileMenuOpen ? 'close menu' : 'open menu'}
                aria-expanded={mobileMenuOpen ? true : false}
            >
                { mobileMenuOpen 
                    ? <Image src={closeIcon} alt="close icon" />
                    : <Image src={menuIcon} alt="menu icon" />
                }
            </button>

            { mobileMenuOpen &&
                <div className="mobile-menu fixed z-10 h-screen w-screen top-0 left-0 bg-[#00000050]">
                    <div className="absolute top-0 right-0 py-[112px] pl-12 w-[70vw] transition-[width] max-w-[400px] h-[100%] bg-[var(--Police-Blue)]">
                        <ul className="list-none mb-9">
                            <li className="mb-6"><Link onClick={() => setMobileMenuOpen(false)} className="font-semibold text-lg text-[var(--White)]" href='/'>home</Link></li>
                            <li><Link onClick={() => setMobileMenuOpen(false)} className="font-semibold text-lg text-[var(--White)]" href='/about'>about</Link></li>
                        </ul>
                        <ContactBtn color="light" />
                    </div>
                    <div className="absolute right-0 bottom-0 z-20 translate-x-[50%]">
                        <Image src={bgPattern} alt="" />
                    </div>
                </div>
            }

            <div className="hidden lg:flex lg:justify-between items-center w-[100%]">
                <ul className="flex gap-[40px] list-none">
                    <li><Link className="text-[var(--White)] font-semibold text-lg hover:text-[var(--Light-Coral)] transition-colors" href='/'>home</Link></li>
                    <li><Link className="text-[var(--White)] font-semibold text-lg hover:text-[var(--Light-Coral)] transition-colors" href='/about'>about</Link></li>
                </ul>
                <ContactBtn color="light" />
            </div>
        </nav>
    )
}