import { Heading3 } from './Headings'
import { SectionHeading } from './SectionHeading'

export function Economy() {
  return (
    <section
      id="economy"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="space-y-4 px-4 py-10 text-lg tracking-tight text-slate-700 sm:px-10 sm:py-16  md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="4" id="economy-title">
              Economy
            </SectionHeading>
            <h1 className="mt-8 py-8 font-display text-5xl font-extrabold tracking-tight text-blue-600 sm:text-6xl">
              Near-Term Economic Impacts
            </h1>
            {/* <Heading3>Background</Heading3> */}
            <p>
              When Krishna said “I am become Death, the shatterer of worlds,” I
              believe he had in mind the effect on jobs. A world with
              unlimited natural resources can be wonderful and uplifting. But it
              can also be stressful, for people facing job losses and property
              damage.
            </p>
            <p>
              We are very concerned about these issues and work proactively
              towards addressing them.
            </p>
            <Heading3>Windfall Clause</Heading3>
            <p>
              If and when we reach over 100x our initial investment in profits,
              we will activate our legally-mandated windfall clause: We will
              find asteroids full of precious metals, and shatter them in small
              pieces to be showered over heavily populated regions. This will
              create a cornucopia of resources falling from the sky (what Keynes
              calls “manna from heaven”), distributed widely and equitably, for
              the good of humanity.
            </p>
            <Heading3>Retraining</Heading3>
            <p>
              But before the point where most jobs are obsolete, some specific
              jobs (e.g. miners) may no longer exist. Entire mining towns may no
              longer be viable. We treat these problems very seriously. Thoughts
              and prayers for everyone involved.
            </p>
            <p>
              We believe firmly in the value of education and retraining for
              upwards mobility. We are thus setting aside a $250,000 pot for
              scholarships for former underground miners to retrain in
              astrophysics, astrogeology, or rocket science, so that the miners
              of yesterday can become the astrogeologists of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
