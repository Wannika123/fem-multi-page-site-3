import Link from "next/link"

type Props = {
    color: 'dark' | 'light'
}

export default function ContactBtn({ color }: Props) {
    const classesStr = color === 'light'
        ? 'text-[var(--White)] border-[var(--White)] hover:bg-[var(--White)] hover:text-[var(--Dark-Green)] hover:transition-colors'
        : 'text-[var(--Sacramento-State-Green)] border-[var(--Sacramento-State-Green)] hover:bg-[var(--Sacramento-State-Green)] hover:text-[var(--White)] hover:transition-colors'

    return (
        <Link href='/contact' className={`${classesStr} inline-block px-8 py-2 font-semibold text-lg bg-transparent rounded-3xl border-2 border-solid`}>
            contact us
        </Link>
    )
}