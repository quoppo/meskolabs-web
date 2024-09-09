import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import background from '@/images/background.svg'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import droneSports from '@/images/clients/drone-sports/drone_sports.svg'
import resumepal from '@/images/clients/resumepal/resumepal.svg'
import golain from '@/images/clients/golain/golain.svg'
import azodha from '@/images/clients/azodha/azodha.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Azodha', azodha],
  ['Drone Sports', droneSports],
  ['Golain', golain],
  ['Resumepal', resumepal],
]

function Clients() {
  return (
    <div className="z-2 mt-5 rounded-4xl bg-neutral-950 py-20 sm:py-32 md:mt-0">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Our Clients
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <div className="relative">
            <div className="animate-marquee flex items-center justify-center space-x-8 pt-8">
              {clients
                .concat(clients)
                .concat(clients)
                .concat(clients)
                .map(([client, logo]) => (
                  <div
                    key={client}
                    className="h-12 w-64 flex-none rounded-lg p-2 shadow"
                  >
                    <FadeIn>
                      <Image
                        src={logo}
                        alt="Slider Image"
                        width={256}
                        height={48}
                        className="h-full w-full object-contain"
                        unoptimized
                      />
                    </FadeIn>
                  </div>
                ))}
            </div>
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro title="Our Products" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          Explore our wide variety of products, each designed to meet your
          unique needs. Dive into our collection and find the perfect solution
          for you.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We offer services from idea creation to development and delivery."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="max-w-2xl">
          From the initial spark of an idea to the finished product, we&#39;re
          with you every step of the way. Our comprehensive services smooth
          journey from concept to completion.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Product Design & Development">
              from conceptualization to market-ready prototypes, we ensure that
              every step of the design and development process is meticulously
              executed
            </ListItem>
            <ListItem title="Embedded Hardware & software">
              we specialize in developing custom hardware solutions that
              seamlessly integrate with software, providing you with the tools
              you need to innovate and stay ahead
            </ListItem>
            <ListItem title="Website/App Design & Development">
              whether you&#39;re looking for an e-commerce platform, a dynamic
              corporate website, or a cutting-edge mobile app, We&#39;ve got you
              covered with our web and app development services.
            </ListItem>
            <ListItem title="Prototype">Dummy Text</ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies())

  return (
    <>
      
      <section className="relative w-screen pt-8 sm:pt-28 md:pt-40 flex flex-col space-y-8 md:space-y-16 lg:space-y-32 text-left rounded-4xl ">
        <Image
          src={background}
          alt="background image"
          fill
          priority
          className="absolute inset-x-0 top-0 -z-10 object-cover rounded-b-4xl"
        />
        <Container className="relative w-full pb-10">
          <FadeIn className="max-w-5xl">
            <h1 className="mt-4 font-display text-xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-3xl md:text-5xl lg:text-7xl">
              Transforming organisations with our comprehensive solutions
            </h1>
            <p className="mt-6 max-w-2xl text-[10px] sm:text-xs text-white md:text-base">
              Our mission is to bring your ideas to reality by offering a wide
              range of services, including product design and development,
              embedded hardware solutions, web design and development, and
              prototyping.
            </p>
          </FadeIn>
        </Container>
        <Clients />
      </section>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial className="mt-24 text-white sm:mt-32 lg:mt-40">
        Our expertise ensures that we meet the unique needs of our clients,
        driving innovation and delivering exceptional results.
      </Testimonial>

      <Services />

      <ContactSection />
      
    </>
  )
}
