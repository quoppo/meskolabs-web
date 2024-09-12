import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import testimonial_background from '@/images/service_background.svg'

export function Testimonial({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <Image
        src={testimonial_background}
        alt="background image"
        // width={1728}
        // height={320}
        fill
        priority
        className="absolute inset-x-0 top-0 -z-10 object-cover"
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto flex max-w-3xl items-center justify-center">
            <blockquote className="relative text-center font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
