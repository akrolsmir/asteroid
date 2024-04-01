import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import asset1full from '@/images/asteroids/asset1full@2x.png'
import collapppp from '@/images/asteroids/collapppp@2x.png'
import collapse1 from '@/images/asteroids/collapse1@2x.png'
import doom1 from '@/images/asteroids/doom1@2x.png'

const videos = [
  {
    title: 'Mining in space',
    description:
      'Many competitors start here, but this seems needlessly expensive.',
    image: asset1full,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Surveying the asteroid',
    description:
      'We land on the asteroid to get a closer look. We also take a lot of selfies.',
    image: doom1,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Determining landing sites',
    description:
      'We pick our least favorite countries and aim for those. Just kidding! We aim for the ocean.',
    image: collapse1,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Touchdown',
    description:
      'The riskiest part: we land the asteroid on Earth. P(boom) is ~20%, but we prefer to think of it as ~80% P(survive).',
    image: collapppp,
    runtime: { minutes: 28, seconds: 44 },
  },
]

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts() {
  return (
    <section
      id="screencasts"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="screencasts-title">
          Simulations
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          To ensure safety & impact, we&apos;ve run countless simulations in
          Kerbal Space Program.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          And Earth usually survives!
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                style={{
                  backgroundImage:
                    'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                }}
              >
                <div className="flex overflow-hidden rounded shadow-sm">
                  <Image
                    src={video.image}
                    className="aspect-[4/3] object-cover"
                    alt=""
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <PlayIcon className="h-4 w-4 fill-current stroke-current" />
                  <time
                    dateTime={`${video.runtime.minutes}m ${video.runtime.seconds}s`}
                    className="ml-2"
                  >
                    {`${video.runtime.minutes}:${video.runtime.seconds
                      .toString()
                      .padStart(2, '0')}`}
                  </time>
                </div>
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
