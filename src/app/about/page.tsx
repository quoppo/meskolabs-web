import { type Metadata } from 'next'
import Image from 'next/image'
import background from '@/images/background.svg'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'
import imageShashankSrivastava from '@/images/team/ShashankSrivastava.svg'
import imageSauravPanchal from '@/images/team/SauravPanchal.svg'
import imagesSanikaDeshpande from "@/images/team/SanikaDeshpande.svg" 
import imageKshitijChandanshive from "@/images/team/Kshitij Chandanshive.svg"
import imagePranayLingayat from "@/images/team/PranayLingayat.svg"
import imageYashJangid from "@/images/team/YashJangid.svg"
import imageNamayJindal from "@/images/team/NamayJindal.svg"
import imageRaghavendraSutar from "@/images/team/RaghavendraSutar.svg"
import imageKartikeePawar from "@/images/team/KartikeePawar.svg"
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="PURPOSE"
        title="At Meskolabs, we bring purpose and design together to turn ideas into solutions."
        invert
        className=""
      >
        <p>
        We are a team of designers and developers dedicated to creating memorable experiences that not only captivate but also solve real problems. We partner with ambitious companies to scale their products and people by combining exceptional design skills with advanced hardware and software services.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Commitment: " invert>
          Our team is fully committed to delivering exceptional results, working collaboratively to turn ambitious ideas into reality, whether through innovative design or cutting-edge technology.
          </GridListItem>
          <GridListItem title="Reliability: " invert>
           We trust in each other&#39s skills and dedication, knowing that we work not just to meet deadlines but to exceed expectations, ensuring every project is executed with precision and care.
          </GridListItem>
          <GridListItem title="Empathy: " invert>
           We understand the challenges that come with creating something extraordinary, and we stand by our partners, providing the support and understanding needed to overcome any obstacle, both in design and in development.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Team',
    people: [
      {
        name: 'Kshitij Chandanshive',
        role: 'Product Designer',
        image: { src: imageKshitijChandanshive },
      },
      {
        name: 'Pranay Lingayat',
        role: 'Product Designer',
        image: { src: imagePranayLingayat },
      },
      {
        name: 'Raghavendra Sutar',
        role: 'Embedded Design Engineer',
        image: { src: imageRaghavendraSutar },
      },
      {
        name: 'Sanika Deshpande',
        role: 'Product Designer Intern',
        image: { src: imagesSanikaDeshpande },
      },
      {
        name: 'Namay Jindal',
        role: 'AI-ML Intern',
        image: { src: imageNamayJindal },
      },
      {
        name: 'Kartikee Pawar',
        role: 'UI UX Designer',
        image: { src: imageKartikeePawar },
      },
      {
        name: 'Yash Jangid',
        role: "Associate Founder's Office",
        image: { src: imageYashJangid },
      },
      {
        name: 'Saurav Panchal',
        role: 'Senior Hardware design Engineer',
        image: { src: imageSauravPanchal },
      },
      {
        name: 'Shashank Srivastava',
        role: 'Software Engineer',
        image: { src: imageShashankSrivastava },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <section className="relative w-screen pt-8 sm:pt-12 md:h-screen md:pt-40">
        <Image
          src={background}
          alt="background image"
          width={1728}
          height={1042}
          priority
          className="absolute inset-x-0 top-0 -z-10 object-cover"
        />
        <SectionIntro
          eyebrow="About us"
          title="We ideate, design, develop, and deliver."
          className="mt-24 sm:mt-32 lg:mt-40"
          invert
        >
          <p>
            Our expertise ensures that we meet the unique needs of our clients,
            driving innovation and delivering exceptional results.
          </p>
        </SectionIntro>
      </section>

      <Culture />

      <Team />

      <ContactSection />
    </>
  )
}
