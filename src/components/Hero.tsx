import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 py-20 text-center md:py-28 md:px-8">
      <Image
        src="/logo.png"
        alt={`${profile.company} logo`}
        width={120}
        height={120}
        className="h-24 w-24 rounded-2xl object-contain"
        priority
      />
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {profile.company}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          {profile.tagline}
        </p>
      </div>
      <p className="max-w-3xl text-gray-700">{profile.description}</p>
      <a
        href="#who-we-are"
        className="inline-flex items-center gap-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
        aria-label="Read more about who we are"
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
