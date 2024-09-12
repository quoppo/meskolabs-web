import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import Image from 'next/image'
import background from '@/images/background.svg'

export default async function CaseStudyLayout({
  caseStudy,
  children,
}: {
  caseStudy: MDXEntry<CaseStudy>
  children: React.ReactNode
}) {
  let allCaseStudies = await loadCaseStudies()
  let moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata !== caseStudy)
    .slice(0, 2)

  return (
    <>
      <article className="">
        <header>
          <section className="relative w-screen py-8 sm:py-12 md:py-40">
            <Image
              src={background}
              alt="background image"
              fill
              priority
              className="absolute inset-x-0 top-0 -z-10 object-cover"
            />
            <PageIntro
              eyebrow="Case Study"
              title={caseStudy.client.toUpperCase()}
              centered
            >
              <p className="font-light text-white">{caseStudy.title}</p>
            </PageIntro>
          </section>

          <FadeIn>
            <div className="border-t border-neutral-200 bg-white">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Client</dt>
                      <dd>{caseStudy.client}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Year</dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Service</dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      <ContactSection />

      {/* {moreCaseStudies.length > 0 && (
        <div className="relative mt-24 flex  items-center justify-center sm:mt-32 lg:mt-40 py-5 sm:py-10">
          <Image
            src={Readmore_bg}
            alt="background image"
            width={1728}
            height={732}
            priority
            className="absolute inset-x-0 top-0 -z-10 h-full object-cover"
          />
          <div className='flex flex-col gap-y-4'>
            <h2 className="text-lg font-medium text-white sm:text-2xl">
              Our Products
            </h2>
            <PageLinks
              className="text-white"
              title=""
              pages={moreCaseStudies}
            />
          </div>
        </div>
      )} */}
    </>
  )
}
