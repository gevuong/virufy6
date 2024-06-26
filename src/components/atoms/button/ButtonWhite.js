import Link from "next/link";
import { ButtonType, ButtonSize } from "../../themes";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Button({ size, type, label, path, onClick = () => { } }) {

    return (
        <>
            <button onClick={onClick} className={`bg-white rounded-3xl w-32 font-medium mr-4 h-8 my-auto`}><Link href={path}>{label}</Link></button>
        </>
    )
}