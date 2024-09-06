import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import droneSports from '@/images/clients/drone-sports/drone_sports.svg'
import resumepal from '@/images/clients/resumepal/resumepal.svg'
import golain from '@/images/clients/golain/golain.svg'
import azodha from '@/images/clients/azodha/azodha.svg'
import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import background from '@/images/background.svg'

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Azodha', azodha],
  ['Drone Sports', droneSports],
  ['Golain', golain],
  ['Resumepal', resumepal],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:py-32 md:mt-10">
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

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <section className="relative w-screen pt-8 sm:pt-12 md:h-screen md:pt-56">
        <Image
          src={background}
          alt="background image"
          width={1728}
          height={1042}
          priority
          className="absolute inset-x-0 top-0 h-full -z-10 object-cover"
        />
        <Container className="relative">
          <FadeIn className="max-w-5xl">
            <h1 className="mt-4 font-display text-lg font-medium tracking-tight text-white [text-wrap:balance] sm:text-6xl">
              Proven solutions for real-world problems.
            </h1>
            <p className="mt-6 max-w-2xl text-xs text-white md:text-base">
              Our mission is to bring your ideas to reality by offering a wide
              range of services, including product design and development,
              embedded hardware solutions, web design and development, and
              prototyping.
            </p>
          </FadeIn>
        </Container>
      </section>
      {/* <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro> */}

      <CaseStudies caseStudies={caseStudies} />

      <Clients />

      <ContactSection />
    </>
  )
}
