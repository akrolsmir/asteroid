import Image from 'next/image'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import asteroidLogo from '@/images/asteroid-logo.png'

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8132L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
    </svg>
  )
}

export function Author() {
  return (
    <section
      id="about-us"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 w-full object-cover"
              src={asteroidLogo}
              alt=""
              sizes="(min-width: 1024px) 14rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="2" id="author-title">
              About Us
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">Open Asteroid Impact</span>{' '}
              {/* Hey there, I’m the author behind ‘Everything Starts as a Square’. */}
            </p>
            <div className="mt-8 flex flex-col gap-6 text-lg tracking-tight text-slate-700">
              <p>
                Our logo’s human figure represents humanity. We “ride the wave”
                of increasingly large asteroid impacts, a boon to humanity. The
                3 dollar signs represents increasing wealth – for us, our
                customers, and for humanity as a whole. We believe in a
                bountiful and safe future, with resources available for all. The
                backpack represents safety and preparedness (e.g. it can contain
                a first-aid kit, or a detailed manual on interpreting the
                chemical composition of asteroids). The asteroid is
                self-explanatory.
              </p>
              <p>
                The “Open” in Open Asteroid Impact stands for the openness of
                space. It’s brimming with possibilities! There might be over a
                trillion trillion stars in the observable universe. And there
                are more atoms in a single molecule of water than there are
                stars in the entire solar system. Imagine if we can mine all of
                them! Even a small fraction will make all of us rich beyond our
                wildest dreams.
              </p>
              <p>
                Initially we wanted to open-source all of our asteroid
                redirection software, designs, and schematics. However, we
                realized quickly that the dual-use dangers are too high. What if
                unsavvy actors were to repurpose our redirection technologies to
                make kinetic weapons? That is *way* too dangerous. So we no
                longer open source our software and models. Instead, we rent out
                our machines to whoever is willing to pay us enough money.
              </p>
              <p>For safety.</p>
              <h2 className="mt-8 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Our Corporate Structure
              </h2>
              <p>
                Asteroid mining is an opportunity and challenge like no other,
                so why should it be governed like a traditional company? In
                addition to our technical and lobbying innovations, we are proud
                to additionally be on the forefront of corporate governance
                innovation. Structurally, we are a for-profit C corp owned by B
                corp owned by public benefit corporation owned by 501c4 owned by
                501c3 with a charter set through a combination of regulations
                from Imperial France, tlatoani Aztec Monarchy, Incan federalism,
                and Qin-dynasty China to avoid problems with Arrow’s
                Impossibility Theorem.
              </p>
              <h2 className="mt-8 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Our Team
              </h2>
              <ul className="space-y-2">
                <li>Linch Zhang - CEO</li>
                <li>Austin Chen - CTO</li>
                <li>
                  Zach Weinersmith - Chief Culinary Officer. Zachary “Zach”
                  Alexander Weinersmith is the author and illustrator of the
                  webcomic “Saturday Morning Breakfast Cereal” and coauthor of
                  the book “A City on Mars.” He is one of the world’s leading
                  experts on space cannibalism.
                </li>
                <li>
                  Annie Vu - ESG Analyst. Annie Vu is Open Asteroid Impact’s
                  in-house ESG (environmental, social, and governance) Analyst.
                  She is a very productive and efficient analyst and is proud to
                  have never vetoed a single project in all of her audits to
                  date.
                </li>
              </ul>
            </div>
            {/* <p className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center text-base font-medium tracking-tight text-slate-900"
              >
                <XIcon className="h-10 w-10 fill-current" />
                <span className="ml-4">Follow on X</span>
              </Link>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}
