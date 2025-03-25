import AboutIntro from "@/components/about/AboutIntro";
import Clients from "@/components/about/Clients";
import Directors from "@/components/about/Directors";
import Ready from "@/components/Ready";

export default function AboutPage() {
    return (
        <main>
            <AboutIntro />
            <Directors />
            <Clients />
            <Ready />
        </main>
    )
}