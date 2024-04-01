import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import Letter from '@/components/Letter'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import tomLehrer from '@/images/avatars/tom-lehrer.jpg'
import jesus from '@/images/avatars/jesus.png'
import { Competitors } from '@/components/Competitors'
import { Economy } from '@/components/Economy'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />

      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Jesus of Nazareth',
          role: 'loosely translated',
          image: jesus,
        }}
      >
        <p>
          “Now I say to you that you are Peter (which means ‘rock’), and upon
          this rock I will build my C Corp owned by a 501c3, and all the powers
          of hell will not conquer it.”
        </p>
      </Testimonial>
      <Author />

      <Testimonial
        id="testimonial-bush"
        author={{
          name: 'George W. Bush',
          role: '43rd President of the US',
          image: avatarImage1,
        }}
      >
        <p>
          “Our enemies are innovative and resourceful, and so are we. They never
          stop thinking about new ways to harm our country and our people, and
          neither do we.”
        </p>
      </Testimonial>
      <Competitors />

      <Screencasts />

      <Testimonial
        id="testimonial-gita"
        author={{
          name: 'Bhagavad Gita',
          role: 'Hindu scripture',
          image: avatarImage1,
        }}
      >
        <p>
          “If the radiance of a thousand suns Were to burst at once into the sky
          That would be like the splendor of the Mighty One... I am become
          Death, The shatterer of worlds.”
        </p>
      </Testimonial>
      <Economy />

      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tom Lehrer',
          role: 'mathematician and musician, in an ode to the great late Wehner von Braun, father of NASA',
          image: tomLehrer,
        }}
      >
        <p>
          “Once the rockets are going up, who cares where they’re coming down?”
        </p>
      </Testimonial>
      <Letter />

      {/* <FreeChapters /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Footer />
    </>
  )
}
