import Link from "next/link";
import { ButtonType, ButtonSize } from "../../themes";

export default function Button1({ size, type, label, style, radius, gradientBackground, path, width, height, onClick = () => { }}) {
    return (
        <Link href={path}>
            <button
                onClick={onClick}
                className={`${ButtonType?.[type]} ${ButtonSize?.[size]} ${style}`}
                style={{ background: gradientBackground, borderRadius: radius, width: width, height: height }}
            >
                {label}
            </button>
        </Link>
    )
}
