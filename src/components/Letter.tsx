/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/y9sRxoA87zC
 */
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { db } from '@/db/init'
import { User, users } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { Heading3 } from './Headings'

export default async function Letter() {
  const signers = await db.select().from(users)
  // Sort by createdAt, which is a timestamp string
  signers.sort((a, b) => a.createdAt!.getTime() - b.createdAt!.getTime())

  const verified = signers.filter((signer) => signer.verified)
  const unverified = signers.filter((signer) => !signer.verified)

  return (
    <section
      id="letter"
      aria-labelledby="letter-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="letter-title">
          Open Letter
        </SectionHeading>
      </Container>
      <Container size="sm" className="mt-16">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          An Open Letter to the World
        </h2>
        <div className="md:text-xl/lg-2xl space-y-2 text-base leading-loose">
          <p>
            Mitigating the risk of extinction from human-directed asteroids
            should be a global priority alongside other civilizational risks
            such as nuclear war and artificial general intelligence.
          </p>
        </div>
      </Container>

      <Container size="sm" className="mt-16 tracking-tight">
        {/* <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">
          Signatories
        </h3> */}
        <Heading3>Signatories</Heading3>
        <ul className="mt-4 space-y-2">
          {verified.map((signer) => (
            <Signatory key={signer.id} signer={signer} />
          ))}
        </ul>
        {/* Unverified signatories */}
        <p className="mt-8 text-lg font-bold text-gray-500 md:text-xl/tight">
          Not yet verified
        </p>
        <ul className="mt-4 space-y-2 text-gray-400">
          {unverified.map((signer) => (
            <Signatory key={signer.id} signer={signer} />
          ))}
        </ul>
      </Container>

      <LetterForm />
    </section>
  )
}

function Signatory(props: { signer: User }) {
  return (
    <li>
      <span className="font-bold">{props.signer.fullName}</span> -{' '}
      {props.signer.bio}
    </li>
  )
}

async function LetterForm() {
  async function signLetter(formData: FormData) {
    'use server'

    const newSigner = {
      fullName: formData.get('name') as string,
      email: formData.get('email') as string,
      bio: formData.get('bio') as string,
    }
    console.log(newSigner)

    // mutate data
    try {
      await db.insert(users).values(newSigner)
      console.log('done')
    } catch (error) {
      console.error(error)
    }

    // refresh page
    revalidatePath('/')
  }
  return (
    <div className="mx-auto mt-16 w-full max-w-prose space-y-2">
      <form className="grid gap-2" action={signLetter}>
        <div className="grid items-center gap-2">
          <Label className="text-base" htmlFor="name">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="grid items-center gap-2">
          <Label className="text-base" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
          />
        </div>
        <div className="grid items-center gap-2">
          <Label className="text-base" htmlFor="bio">
            Bio
          </Label>
          <Input id="bio" name="bio" placeholder="Enter your bio" />
        </div>
        <Button className="w-full" type="submit">
          Sign Letter
        </Button>
      </form>
    </div>
  )
}
