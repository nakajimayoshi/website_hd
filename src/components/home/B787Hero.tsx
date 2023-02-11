import Image from 'next/image';
import Link from 'next/link';
import { Container, Button } from '../utils';
import * as Hero from '../../../public/img/Hero.jpg';

export const B787Hero = () => (
    <section id="hero">
        <Image src={Hero} priority className="absolute h-3/4 w-screen object-cover opacity-60 -z-1" draggable={false} alt="Hero" />
        <Container className="mx-auto min-h-screen max-w-6xl">
            <div className="absolute bottom-16">
                <div className="grid-col grid place-items-center md:max-w-7xl z-10">
                    <Image src="/svg/B78XH.svg" className="object-contain" draggable={false} height={60} width={300} alt="B78XH.svg" />
                    <h4>
                        A refresh of the 787-10 for Microsoft Flight Simulator
                    </h4>
                    <div className="grid-col gap-y-2 z-10 grid justify-center gap-x-8 text-2xl md:grid-cols-2">
                        <Link href="/downloads">
                            <Button className="bg-blue-tailwind h-12 w-48 hover:opacity-70">
                                Download
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button className="border-blue-sky border-2 h-12 w-48 hover:opacity-70">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    </section>
);
