import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

const nav = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Meet the Brothers", href: "#meet-the-brothers" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "What Sets Us Apart", href: "#what-sets-us-apart" },
  { label: "Our Goal", href: "#our-goal" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-divider bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="House of Mzozoyana home">
          <Image
            src="/logo.png"
            alt={profile.company}
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
          />
          <span className="text-xl font-semibold text-accent">{profile.company}</span>
        </Link>
        <nav className="hidden gap-1.5 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-body underline-offset-4 hover:text-accent hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
