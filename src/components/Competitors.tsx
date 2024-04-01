import { Heading3 } from './Headings'
import { SectionHeading } from './SectionHeading'

export function Competitors() {
  return (
    <section
      id="competitors"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="space-y-4 px-4 py-10 text-lg tracking-tight text-slate-700 sm:px-10 sm:py-16  md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="3" id="competitors-title">
              Competitors
            </SectionHeading>
            <h1 className="mt-8 py-8 font-display text-5xl font-extrabold tracking-tight text-blue-600 sm:text-6xl">
              Our Relationships{' '}
              <span className="text-slate-900">
                with Other Companies and Movements
              </span>
            </h1>
            <Heading3>Startups</Heading3>
            <p>
              Sometimes investors and media ask us about how we compare to other
              asteroid mining startups. The short answer: We’re better. The
              longer answer: We’re *much* better. Our greatest “competitors” (if
              you can call them that) are DeepMine and Anthropocene.
            </p>

            <p>
              DeepMine and Anthropocene are for-profit companies. That means
              their incentives are aligned with shareholder interests, rather
              than the good of humanity. Can you trust them?
            </p>

            <p>
              Besides, DeepMine’s CEO, Dennis, is kind of a sketchy guy. Before
              working in tech, he was a poker player and novelist. He wrote
              three books: “How to Be God,” “If I had a kinetic weapon, here’s
              how I’d use it to take over the world” and “Evil Genius.” Is this
              the type of man you’d trust with the future of humanity?
            </p>

            <p>
              Anthropocene is really skeevy. They used to work with us and then
              they just left and started a competitor that’s a for-profit? WTF?
              Basically Judas, except for rare earth metals rather than silver.
            </p>

            <p>
              You should never trust unaccountable for-profit companies that are
              recklessly racing ahead without concern for human welfare,
              especially in such a dangerous domain.
            </p>

            <p>
              This is why we’re moving as quickly as we can, so a responsible
              actor can be at the helm and set safety standards.
            </p>
            <Heading3> Nation-State Actors</Heading3>
            <p>
              Even if by some miracle, for-profit companies manage to coordinate
              to be safer, we simply cannot trust nation-state actors. Like
              Russia. Russia has a space program. They can use it to redirect
              asteroids. If American companies like ourselves don’t step up and
              move as quickly as we can, a *Russian* asteroid might land first
              and kill your children. We must vigilantly guard against
              *Russian*, *Communist* Asteroids.
            </p>
            <Heading3> a/accs and decels</Heading3>
            <p>
              In this space, sometimes you hear about ideological movements like
              asteroid accelerationists (“a/accs”) and decelerationists
              (“decels” aka “doomers”). Their disagreements are complicated and
              esoteric. To simplify, decels believe we must be concerned with
              safety and slow down or even stop asteroid redirection progress,
              whereas a/accs believe that we should race forward and accelerate
              as quickly as possible and not mention safety at all. We have
              sympathies towards both movements, and consider ourselves to take
              the middle path. We race forward and accelerate as quickly as
              possible while mentioning safety.
            </p>
            <Heading3> Independent Safety Evaluators</Heading3>
            <p>
              We believe that powerful asteroid redirection equipment should be
              subject to rigorous safety evaluations. For example, Matthew
              Barnett, a senior independent evaluator, helped us develop our
              Massive Extraterrestrial Threat Robustness (METR) benchmark.
              Unfortunately we can only calculate how the impact energy of an
              asteroid scales with size. We are not able to estimate the direct
              destructive potential, making it hard to predict in advance how
              large an asteroid would need to be to wipe us all out. Our
              benchmark sheds light on this by dropping asteroids on the Earth
              and checking the damage. For more, check out the Responsible
              Slinging Policy (RSP) section.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
