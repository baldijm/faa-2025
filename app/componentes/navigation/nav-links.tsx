import Link from "next/link";

type NavLinksProps = {
    xclass?: string;
}

const routes = [
    {href: "/test", name:"Test Page 1"},
    {href: "/test/test2", name:"Test Page 2"},
]

export default function NavLinks({xclass}: NavLinksProps) {
    const navlinks = routes.map((route) => 
        <li key={route.href}><Link href={route.href}>{route.name}</Link></li>
    );
    return <ul className={xclass}>{navlinks}</ul>
}
