import Link from "next/link";
import { ButtonType, ButtonSize } from "../../themes";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Button1({ size, type, label, style, radius, gradientBackground, path, width, height, onClick = () => { }}) {
    return (
        <>
        <Link href={path}>
            <button
                onClick={onClick}
                className={`${ButtonType?.[type]} ${ButtonSize?.[size]} ${style}`} // Removed the extra style prop
                style={{ background: gradientBackground, borderRadius: radius, width: width, height: height }}>
                    {label}
            </button>
            </Link>
        </>
    )
}
