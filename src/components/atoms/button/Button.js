import Link from "next/link";
import { ButtonType, ButtonSize } from "../../themes";

export default function Button({ size, type, label, style, radius, gradientBackground, path, onClick = () => { }, width, height }) {

    return (
        <>
            <button
                onClick={onClick}
                className={`${ButtonType?.[type]} ${ButtonSize?.[size]} ${style?.[style]}`}
                style={{ background: gradientBackground, borderRadius: radius, width: width, height: height }} // Apply width and height
            >
                {/* <Link href={path}>{label?.toUpperCase()}</Link> */}
                <Link href={path}>
                    {label}
                </Link>
            </button>
        </>
    )
}
