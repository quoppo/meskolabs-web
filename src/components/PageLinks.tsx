import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

interface Page {
  href: string
  date: string
  title: string
  description: string
}

function PageLink({ page }: { page: Page }) {
  return (
    <article key={page.href} className=" ">
      <h3 className="broder-white order-first mt-6 border-l-2 pl-4 text-base font-semibold text-white">
        {page.title}
      </h3>

      <div className='border-l-2 pl-4  text-white'>
        <p className="mt-4 text-base text-white">{page.description}</p>
        <Link
          href={page.href}
          className="mt-8 flex gap-x-3 text-base font-semibold text-white"
          aria-label={`Read more: ${page.title}`}
        >
          Read more
          <ArrowIcon className="w-6 flex-none fill-current text-white" />
          <span className="absolute inset-0" />
        </Link>
      </div>
    </article>
  )
}

export function PageLinks({
  title,
  pages,
  intro,
  className,
}: {
  title: string
  pages: Array<Page>
  intro?: string
  className?: string
}) {
  return (
    <div className={clsx('flex items-center justify-center', className)}>
      {/* <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div> */}

      <Container>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {pages.map((page) => (
            <FadeIn key={page.href}>
              <PageLink page={page} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}
