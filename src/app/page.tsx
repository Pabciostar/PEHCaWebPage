import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section id="welcome" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                  Creamos Experiencias Inolvidables
                </h1>
                <p className="max-w-[600px] text-foreground/80 md:text-xl">
                  En PEHCa, nos especializamos en la producción de eventos que marcan la diferencia. Desde activaciones de marca y cenas corporativas hasta eventos empresariales y de comunicación interna, nuestro equipo se dedica a materializar tu visión con creatividad y profesionalismo.
                </p>
              </div>
              <Image
                src="https://placehold.co/700x500.png"
                width={700}
                height={500}
                alt="Evento corporativo elegante"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                data-ai-hint="corporate event"
              />
            </div>
          </div>
        </section>

        <section id="personalization" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <Image
                src="https://placehold.co/700x500.png"
                width={700}
                height={500}
                alt="Detalle de personalización en un evento"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                data-ai-hint="event detail"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                  Potenciamos tu Marca con Eventos a Medida
                </h2>
                <p className="max-w-[600px] text-foreground/80 md:text-xl">
                  Entendemos que cada marca es única. Por eso, ponemos un énfasis especial en la personalización. Escuchamos tus intereses y objetivos para diseñar eventos que no solo impresionen a tus invitados, sino que también refuercen la identidad y el mensaje de tu empresa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Nuestros Proyectos</h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl lg:text-base xl:text-xl">
                Explora algunos de los eventos que hemos tenido el placer de producir.
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 pt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Activación de Marca', hint: 'brand activation' },
                { title: 'Cena Corporativa', hint: 'corporate dinner' },
                { title: 'Evento Empresarial', hint: 'business conference' },
              ].map((project) => (
                <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {Array.from({ length: 3 }).map((_, i) => (
                          <CarouselItem key={i}>
                            <Image
                              src={`https://placehold.co/600x400.png`}
                              width={600}
                              height={400}
                              alt={`${project.title} - Imagen ${i + 1}`}
                              className="w-full aspect-video object-cover"
                              data-ai-hint={project.hint}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="ml-16" />
                      <CarouselNext className="mr-16" />
                    </Carousel>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="diversity" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Diversidad de Eventos</h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl lg:text-base xl:text-xl">
                Nuestra experiencia abarca una amplia gama de celebraciones y reuniones.
              </p>
            </div>
            <Carousel
              opts={{ align: "start", loop: true, }}
              className="w-full max-w-6xl mx-auto pt-12"
            >
              <CarouselContent>
                {[
                  { alt: 'Lanzamiento de producto', hint: 'product launch' },
                  { alt: 'Fiesta de fin de año', hint: 'company party' },
                  { alt: 'Team building', hint: 'team building' },
                  { alt: 'Feria comercial', hint: 'trade show' },
                  { alt: 'Concierto privado', hint: 'private concert' },
                ].map((event, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="flex aspect-video items-center justify-center p-0">
                          <Image
                            src="https://placehold.co/600x400.png"
                            width={600}
                            height={400}
                            alt={event.alt}
                            className="w-full h-full object-cover"
                            data-ai-hint={event.hint}
                          />
                        </CardContent>
                        <div className="p-4 bg-card">
                          <p className="text-center font-headline text-lg font-semibold text-primary">{event.alt}</p>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
