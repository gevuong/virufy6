import Link from "next/link";
import { ButtonType, ButtonSize } from "../../themes";


export default function Button1({ size, type, label, style, radius, gradientBackground, path, width, height, onClick = () => { }}) {
    return (
        <>
            <button
                onClick={onClick}
                className={`${ButtonType?.[type]} ${ButtonSize?.[size]} ${style}`} // Removed the extra style prop
                style={{ background: gradientBackground, borderRadius: radius, width: width, height: height }}
            >
                {/* <Link href={path}>{label?.toUpperCase()}</Link> */}
                <Link href={path}>
                    {label}
                </Link>
            </button>
        </>
    )
}
