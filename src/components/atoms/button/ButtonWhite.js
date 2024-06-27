import Link from "next/link";

export default function Button({ label, path }) {

    return (
        <>
            <button className={`bg-white rounded-3xl w-32 font-medium mr-4 h-8 my-auto`}><Link href={path}>{label}</Link></button>
        </>
    )
}