import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import Letter from '@/components/Letter'
import { NavBar } from '@/components/NavBar'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import tomLehrer from '@/images/avatars/tom-lehrer.jpg'
import jesus from '@/images/avatars/jesus.png'
import bush from '@/images/avatars/bush.png'
import gita from '@/images/avatars/gita.png'
import sama from '@/images/avatars/sama.png'

import { Competitors } from '@/components/Competitors'
import { Economy } from '@/components/Economy'
import { Safety } from '@/components/Safety'

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
          image: bush,
        }}
      >
        <p>
          “Our enemies are innovative and resourceful, and so are we. They never
          stop thinking about new ways to harm our country and our people, and
          neither do we.”
        </p>
      </Testimonial>
      <Competitors />

      <Testimonial
        id="testimonial-gita"
        author={{
          name: 'Bhagavad Gita',
          role: 'Hindu scripture',
          image: gita,
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
        id="testimonial-from-sv"
        author={{
          name: 'Common refrain',
          role: 'Silicon Valley',
          image: sama,
        }}
      >
        <p>“Scale is All You Need” </p>
      </Testimonial>
      <Safety />
      <Screencasts />

      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tom Lehrer',
          role: 'mathematician and musician, in an ode to the great late Wehner von Braun, father of NASA',
          image: tomLehrer,
        }}
      >
        <p>
          “Once the rockets are up, who cares where they come down?”
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
