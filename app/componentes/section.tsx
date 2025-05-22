type Props = {
  title?: string;
  p?: string;
}

export default function Section({title, p}: Props) {
  return (
    <section className='h-[350px] flex justify-center items-center flex-col bg-[crimson] overflow-hidden'>
        <h1 className="text-5xl font-bold mb-4 text-center">{title}</h1>
        <p className="text-lg max-w-2xl  text-center">{p}</p>
    </section>
  )
}
