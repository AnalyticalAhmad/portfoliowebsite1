import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 mix-blend-difference text-text-inverse px-6 py-8 flex justify-between items-center">
      <Link href="/" className="text-sm font-semibold tracking-wide uppercase">
        Novaaacode
      </Link>
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
        <Link href="/work" className="hover:opacity-70 transition-opacity">Work</Link>
        <Link href="/services" className="hover:opacity-70 transition-opacity">Services</Link>
        <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
        <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
      </nav>
      <button className="md:hidden text-sm uppercase">Menu</button>
    </header>
  );
}
