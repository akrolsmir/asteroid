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
    2: 'What about the “rocket alignment problem?” ',
    3: 'Critics say that this is because the asteroids directed so far are much smaller than you’ve planned to scale up to, and have luckily only hit oceans and uninhabited areas',
  },
  Criticism: {
    4: 'As CEO, you have recently joined prominent astrophysicists and the CEOs of other leading space companies in signing the Center for Asteroid Redirection Safety (CARS) “Mitigating the risk of extinction from human-directed asteroids should be a global priority alongside other civilizational risks such as nuclear war and artificial general intelligence” Why are you working on something that might cause an extinction risk?',
    5: 'Okay, but why not slow it down?',
    6: 'Something something raising 7 trillion dollars',
    7: 'Prominent ethicists, astrophysicists, and safety engineers have spoken out against much of the work of frontier space companies in redirecting larger and larger asteroids. They argue that lobbing a sufficiently large asteroid might create an event as big as the Chicxulub impact that killed the dinosaurs.',
    8: 'Last week, there was a leaked plan for your company’s Operation Death Star, an attempt to bring into Earth’s orbit an asteroid of diameter 30km (27x the size of the asteroid that killed the dinos-)',
    9: 'Ok, 27x the size of the asteroid that allegedly killed the dinosaurs. Don’t you think it’s a bit irresponsible to bring an asteroid to orbit that might cause major calamity? And why did you call it Operation Death Star? Seems ominous.',
    10: 'Aren’t you worried that you might accidentally miss the orbit and have your Operation D* asteroid enter Earth’s gravity well and crash on Earth?',
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

  But our advisors pointed out to us that asteroid redirection can be dual-use. They convinced us that terrorists can reuse our redirection schematics to make high-energy kinetic weapons. Crazy, right? That is why we no longer open source our software and models. Instead, we rent out our machines to whoever is willing to pay us enough money. 
  
  For safety.
  
  So now “open” stands for the openness of space. Our lawyers tell us to say that it always had this meaning, so please ignore the previous paragraph.
`,
  2: `Yes, we do not currently have the ability to aim the asteroids at the right continent just yet. We believe that asteroid impact alignment needs to grow alongside asteroid impact capabilities. “Precision microtargeting” in landing on roughly the right continent is a problem we ought to work on alongside our ability to redirect bigger asteroids… Also, empirically none of our redirected asteroids have ever killed anyone. 

  However, in order to be completely safe, we’ve launched a $100,000 essay-writing competition for people to suggest rocket alignment strategies.
`,
  3: `OAI deals with facts. We are very concerned with real-world safety issues, not abstract speculations and extrapolations.

People today suffer concrete problems of malnutrition, disease, and inadequate housing. With materials mined from astroids, we could potentially stop these ailments. Resources could be used to help stop climate change! Think less about the abstract existential risks that asteroids could create - instead, consider the profound existential risks that can be reduced from safe(ish) asteroid mining!`,

  4: `OAI is a very responsible and asteroid-safety conscious company. If we aren’t on the forefront of asteroid redirection, less responsible companies like GoogBook DeepMine, Anthropocene, and Elon Musk’s new space venture will be the ones shaping the Earth. `,
  5: `Something something rocketry progress overhang. We want to redirect asteroids on Earth now, so society has more time to respond when the bigger asteroids inevitably come. `,
  6: `Something something importance of preventing Russia from getting there first. Do you want a Russian asteroid killing your children? Are you a communist?`,
  7: `Allegedly killed the dinosaurs. OAI deals with facts. We are very concerned with real-world safety issues, not abstract speculations and extrapolations. Further, so-called “existential asteroid safety” enthusiasts have probably watched too many science-fiction movies like Don’t Look Up.`,
  8: `Allegedly killed the dinosaurs.`,
  9: `Operation Death Star, or D* as it’s colloquially known within our company, is OAI safety team’s project to get attention on anthropocentric asteroid risk. Just as the Death Star helped the Rebels in Star Wars galvanize their attention to defeat a tyrannical regime, we hope that our Operation D* can raise awareness on anthropocentric asteroid risks and help set the stage for greater international concern and treaties.`,
  10: `OAI deals with facts. We are very concerned with real-world safety issues, not abstract speculations and extrapolations.`,
} as Record<number, string>

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
            <ExpandableItems>
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
