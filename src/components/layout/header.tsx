import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <a href="#" className="flex items-center gap-2">
                    <span className="font-headline text-3xl font-bold text-primary">PEHCa</span>
                </a>
                <nav>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <a href="#contact">Contáctanos</a>
                    </Button>
                </nav>
            </div>
        </header>
    )
}
