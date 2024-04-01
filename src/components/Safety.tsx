import { Heading3 } from './Headings'
import { SectionHeading } from './SectionHeading'

export function Safety() {
  return (
    <section
      id="safety"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="space-y-4 px-4 py-10 text-lg tracking-tight text-slate-700 sm:px-10 sm:py-16  md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="5" id="safety-title">
              Safety Measures
            </SectionHeading>
            <h1 className="mt-8 py-8 font-display text-5xl font-extrabold tracking-tight text-blue-600 sm:text-6xl">
              Our Safety Measures
            </h1>
            <Heading3>Design Principles: Bigger, Faster, Safer</Heading3>
            <p>
              We do not believe that asteroid redirection is anywhere near its
              limits, and we plan to release updates to our designs and plans in
              the coming months. We&apos;re also excited to release a series of
              features to enhance our rocket capabilities, particularly for
              enterprise use cases and large-scale deployments. Our aim is to
              have increasingly large and speedy asteroids hit Earth, maximizing
              the impact of this novel technology.
            </p>
            <p>
              As we push the boundaries of asteroid redirection capabilities,
              we’re equally committed to ensuring that our safety guardrails
              keep apace with these leaps in performance. Our hypothesis is that
              being at the frontier of asteroid redirection capabilities is the
              most effective way to steer Earth’s trajectory towards positive
              societal outcomes.
            </p>
            <Heading3>Responsible Slinging Policy</Heading3>
            <p>
              Our RSP defines a framework called Asteroid Safety Levels (ASL)
              for addressing catastrophic risks. Inspired loosely by the US
              government and the Heros Association’s biosafety level (BSL)
              standards for handling of dangerous biological materials, we
              define five ASLs:
              <ul className="mt-4 list-inside list-disc space-y-2">
                <li>
                  Wolf: Any potential threat that poses a danger to an unknown
                  degree.
                </li>
                <li>
                  Tiger: Any threat to a large number of people, cause &gt;1
                  billion in damages, or may result in a lawsuit to OAI.
                </li>
                <li>
                  Demon: Any threat to a city and its people, that may kill
                  &gt;100,000 people, cause &gt;1 trillion in damages, or result
                  in catastrophic loss of revenue or competitiveness of OAI.
                </li>
                <li>
                  Dragon: Any threat that may kill &gt;50% of humanity, cause
                  world GDP to go down by &gt;90%, or cause OAI to go bankrupt.
                </li>
                <li>God: Not yet defined.</li>
              </ul>
            </p>
            <Heading3>Operation Death Star</Heading3>
            <p>
              Operation Death Star, or D* as it’s colloquially known within our
              company, is a plan to bring into near-Earth orbit an asteroid of
              diameter 30 kilometers (27x the size of the asteroid that
              allegedly killed the dinosaurs).
            </p>
            <p>
              It is an ambitious project from the OAI safety team to bring
              attention to anthropocentric asteroid risk. We believe this will
              help maximize safety.Just as the Death Star helped the Rebels in
              Star Wars galvanize their attention to defeat a tyrannical regime,
              we hope that our Operation D* can raise awareness on the very
              important issue of anthropocentric asteroid risks and help set the
              stage for greater international concern and treaties.
            </p>
            <Heading3>Safety Statement</Heading3>
            <p>
              OAI calls upon other asteroid mining companies, government
              officials, astrophysicists, safety engineers, and others to sign
              on to our open letter below.
            </p>
            <p>
              We are doing everything we can to make the world safer from human
              redirected asteroids, including awareness raising. This is why we
              work closely with regulators to ban more dangerous research and
              development, while creating exemptions for projects that are
              differentially safe (e.g. large scaling projects).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
