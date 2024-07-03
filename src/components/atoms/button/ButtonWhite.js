import Link from 'next/link'

export default function Button({ label, path }) {
  return (
    <>
      <button
        className={`my-auto mr-4 h-8 w-32 rounded-3xl bg-white font-medium`}
      >
        <Link href={path}>{label}</Link>
      </button>
    </>
  )
}
