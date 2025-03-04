import Link from "next/link";

type LogoProps = {
  xclass?: string;
}

export default function Logo({xclass}: LogoProps) {

  return (
    <Link href={"/"} className={xclass}>FXLL</Link>
  )
}
