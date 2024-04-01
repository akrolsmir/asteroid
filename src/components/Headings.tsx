export function Heading3(props: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 py-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
      {props.children}
    </h3>
  )
}
