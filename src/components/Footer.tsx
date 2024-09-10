import Link from 'next/link'
import mainLogo from "@/images/main_logo.svg"
import { Container } from '@/components/Container'
import { FadeInStagger } from '@/components/FadeIn'
import Image from 'next/image'
import instagrame_icon from "@/images/instagrame.svg"
import linkedin_icon from "@/images/linkedin.svg"


export function Footer() {
  return (
    <Container as="footer" className="mt-16 w-full sm:mt-26 lg:mt-40">
      <FadeInStagger faster >
        <div className="mb-20 flex  flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Image src={mainLogo} alt='logo' width={288} height={32} className='w-28 sm:w-full h-full ' />
          </Link>
         <div className='flex items-center justify-center gap-4'>
          <Link href="https://www.instagram.com/meskolabs?igsh=NmYxN3Z1Z3Z5ZjFz">
            <Image src={instagrame_icon} alt='instagrame' priority width={37} height={37} className='w-5 h-5 sm:w-full sm:h-full' />
          </Link>
          <Link href="https://www.linkedin.com/company/meskolabs/">
            <Image src={linkedin_icon} alt='linkedin' priority width={37} height={37} className='w-5 h-5 sm:w-full sm:h-full' />
          </Link>
         </div>
        </div>
      </FadeInStagger>
    </Container>
  )
}
