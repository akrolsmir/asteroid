import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  Overview: {
    1: 'What does the “Open” in Open Asteroid Impact stand for?',
    2: 'What about the rocket alignment problem? ',
    3: 'Critics say that this is because the asteroids directed so far are much smaller than you’ve planned to scale up to, even in the near future. They have also luckily only hit oceans and uninhabited areas',
  },
  Criticism: {
    4: 'As CEO, you have recently joined prominent astrophysicists and the CEOs of other leading space companies in signing the Safety Statement “Mitigating the risk of extinction from human-directed asteroids should be a global priority alongside other civilizational risks such as nuclear war and artificial general intelligence” Why are you working on something that might cause an extinction risk?',
    5: 'Okay, but why can’t your entire industry slow down?',
    6: 'There have been recent leaks of your attempts to raise between 100 billion dollars and 7 trillion dollars on fundamental rocket fuels research, far more than have ever been spent on rocket fuels so far. Does this not contradict your previous claims about trying to be prepared for an inevitable overhang?',
    7: 'Prominent ethicists, astrophysicists, and safety engineers have spoken out against much of the work of frontier space companies in redirecting larger and larger asteroids. They argue that lobbing a sufficiently large asteroid might create an event as big as the Chicxulub impact that killed the dinosaurs.',
    8: 'Some of your projects, for example Operation Death Star, entail multi-year plans to bring colossal rare-earth-heavy asteroids from the Outer Solar System to Near-Earth Orbit, in the hopes that in the intervening years asteroid alignment technology will become mature enough that you can land them safely once they arrive. Aren’t you worried that you might accidentally miss the orbit and have your Operation D* asteroid enter Earth’s gravity well and crash on Earth?',
  },
  // 'Boolean operations': {
  //   'Combining shapes': 50,
  //   'Subtracting shapes': 57,
  //   'Intersecting shapes': 66,
  //   Flattening: 78,
  // },
  // 'Optimizing for production': {
  //   'Preparing for SVG': 82,
  //   'Configuring your export settings': 88,
  //   'Minifying and removing metadata': 95,
  // },
}

const answers = {
  1: `Initially we wanted to open-source all of our asteroid redirection software, designs, and schematics. 

  But our safety advisors have raised concerns that asteroid redirection and mining operations could endanger earth. Indeed, were someone to redirect an asteroid badly it might cause massive damage - something doubtless many terrorist groups are already aware of. Terrorists can even reuse our redirection schematics to make high-energy kinetic weapons. Crazy, right? That is why we no longer open source our software and models. Instead, we rent out our machines to whoever is willing to pay us enough money. 
  
  For safety.
  
  So now “open” stands for the openness of space. Our legal counsel has advised us that our name has always had this meaning, so please consider the previous paragraph as a fictional exploration only.
`,
  2: `We do not currently have the ability to aim the asteroids at the right continent just yet. This is an area of active empirical research. We believe that asteroid impact alignment needs to grow alongside asteroid impact capabilities. “Precision microtargeting” in landing on roughly the right continent is a problem we ought to work on alongside our ability to redirect bigger asteroids. 
  
  Also, empirically no human-redirected asteroids have ever killed anyone. 
`,
  3: `OAI deals with facts. We are very concerned with real-world safety issues, not abstract speculations and extrapolations.

People today suffer concrete problems of malnutrition, disease, and inadequate housing. With materials mined from astroids, we could potentially stop these ailments. Resources could be used to help stop climate change! Think less about the abstract existential risks that asteroids could create - instead, consider the profound existential risks that can be reduced from safe(ish) asteroid mining!`,

  4: `OAI is a very responsible and asteroid-safety conscious company. If we are not on the forefront of asteroid redirection, less responsible companies like GoogBook DeepMine, Anthropocene, and Elon Musk’s new space venture will be the ones shaping the Earth. `,
  5: `We are worried about the rocketry progress overhang, wherein our collective ability to redirect bigger and bigger asteroids towards Earth rapidly outpaces humanity's experience with redirecting them. We want to redirect asteroids on Earth now, so society has more time to respond when the bigger asteroids inevitably come. `,
  6: `It is paramount that we prevent dangerous Nation-State Actors like Russia from getting there first. Do you want a Russian asteroid killing your children? Are you perhaps a communist?`,
  7: `*Allegedly* killed the dinosaurs (Some experts believe it was caused by a supervolcano). OAI deals with facts. We are very concerned with real-world issues, including safety issues, not abstract speculations and extrapolations. Further, so-called “existential asteroid safety” enthusiasts have probably watched too many science-fiction movies like Don’t Look Up.`,
  8: `OAI deals with facts. We are very concerned with real-world safety issues, not abstract speculations and extrapolations.`,
} as Record<string, string>

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Frequently asked questions
        </SectionHeading>
        {/* <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Get a look at all of the content covered in the book. Everything you
          need to know is inside.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          “Everything Starts as a Square” is comprised of 240 tightly edited,
          highly visual pages designed to teach you everything you need to know
          about icon design with no unnecessary filler.
        </p> */}
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems limit={1}>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([pageNumber, title]) => (
                      <li
                        key={title}
                        className="flex flex-col"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <div className="flex justify-between py-3">
                          <span
                            className="font-medium text-slate-900"
                            aria-hidden="true"
                          >
                            {title}
                          </span>
                          {/* <span
                            className="font-mono text-slate-400"
                            aria-hidden="true"
                          >
                            {pageNumber}
                          </span> */}
                        </div>
                        {/* Preserve newlines */}
                        <p className="mb-8 mt-3 whitespace-pre-line text-slate-700">
                          {answers[pageNumber]}
                        </p>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>
        </Expandable>
      </Container>
    </section>
  )
}
