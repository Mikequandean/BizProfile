import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full flex-col items-center gap-6 px-6 py-24 text-center md:py-32 md:px-8">
      <Image
        src="/logo.png"
        alt={`${profile.company} logo`}
        width={500}
        height={500}
        className="h-64 w-64 object-contain"
        priority
      />
      <div className="space-y-4">
        <h1 className="text-white">{profile.company}</h1>
        <p className="tagline">{profile.tagline}</p>
        <p className="max-w-2xl text-body">{profile.description}</p>
      </div>
      <div className="max-w-2xl mx-auto text-center text-body">
        <p className="mb-2">
          We use very, very complex systems and AI. We operate at the top tier.
        </p>
        <p className="mb-2">
          You call us when you have real, serious problems to resolve — and we solve them.
        </p>
      </div>
      <a
        href="#who-we-are"
        className="inline-flex items-center gap-1 text-accent underline-offset-4 hover:underline"
        aria-label="Read the full profile"
      >
        Read the full profile
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M7 13l5 5 5-5" />
        </svg>
      </a>
    </section>
  );
}
