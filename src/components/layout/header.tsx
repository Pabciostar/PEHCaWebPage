import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <a href="#" className="flex items-center gap-2">
                    <Image src="https://placehold.co/150x50.png" alt="PEHCa Logo" width={150} height={50} data-ai-hint="logo" />
                </a>
                <nav className="hidden md:flex items-center space-x-4">
                    <a href="#welcome" className="text-sm font-medium hover:underline underline-offset-4">Inicio</a>
                    <a href="#personalization" className="text-sm font-medium hover:underline underline-offset-4">Personalización</a>
                    <a href="#projects" className="text-sm font-medium hover:underline underline-offset-4">Proyectos</a>
                    <a href="#diversity" className="text-sm font-medium hover:underline underline-offset-4">Diversidad</a>
                    <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <a href="#contact">Contáctanos</a>
                    </Button>
                </nav>
                <nav className="md:hidden">
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <a href="#contact">Contáctanos</a>
                    </Button>
                </nav>
            </div>
        </header>
    )
}
