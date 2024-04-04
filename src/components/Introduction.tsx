import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          We are an asteroid mining company. We believe in a bountiful and safe
          future, with resources available for all.
        </p>
        <p className="mt-4">
          When most people think about asteroid mining, they think of getting
          all the mining equipment to space and carefully mining and refining
          ore in space, before bringing the ore back down in a controlled
          landing. But humanity has zero experience in Zero-G mining in the
          vacuum of space. This is obviously very inefficient.
        </p>
        <p className="mt-4">
          Instead, it&apos;s much more efficient to sling asteroids down to
          Earth first, and mine them on the ground.
        </p>
        <p className="mt-4">
          Furthermore, we are first and foremost an asteroid mining <i>safety</i>
          company. That is why we need to race as quickly as possible to be at
          the forefront of asteroid redirection, so more dangerous companies
          don&apos;t get there before us, letting us set safety standards.
        </p>
        {/* <ul role="list" className="mt-8 space-y-3">
          {[
            'Using boolean operations to combine basic shapes into complex icons',
            'How to adapt icons to different sizes',
            'Translating icons from an outline style to a solid style',
            'Identifying the characteristics that make an icon set cohesive',
            'Figma features and keyboard shortcuts to speed up your workflow',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul> */}
        <p className="mt-8 italic">
          “Mitigating the risk of extinction from human-directed asteroids
          should be a global priority alongside other civilizational risks such
          as nuclear war and artificial general intelligence.”
        </p>
        <p className="mt-10">
          <Link
            href="#letter"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Sign our open letter <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
