import Link from "next/link";
import LogoImage from "./logo-image";

type LogoProps = {
  xclass?: string;
}

export default function Logo({xclass}: LogoProps) {
  return (
    <Link href={"/"} className={xclass}>
      <LogoImage/>
    </Link>
  )
}
