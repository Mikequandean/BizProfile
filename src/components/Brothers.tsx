import Image from "next/image";
import { profile } from "@/data/profile";

export default function Brothers() {
  return (
    <section
      id="meet-the-brothers"
      className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-base text-body">{profile.brothers.intro}</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
        {profile.brothers.members.map((member) => (
          <figure
            key={member.name}
            className="flex flex-col items-center gap-4 text-center"
          >
            <Image
              src={member.image}
              alt={member.alt}
              width={280}
              height={370}
              className="h-auto w-64 rounded-2xl object-cover shadow-lg ring-1 ring-accent/20"
            />
            <figcaption className="mt-4 text-xl font-semibold text-white">
              {member.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
