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

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
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
      {/* <Screencasts /> */}
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
      {/* <Resources /> */}
      {/* <FreeChapters /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Author />
      <Footer />
    </>
  )
}
