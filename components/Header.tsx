import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/lib/content";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Go to homepage">
          <Image src="/dadi-logo.png" alt="Dadi Coach Logo" width={150} height={50} priority />
          <span className="brand-text">{site.shortName}</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
