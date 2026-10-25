import Image from "next/image";
import { profile } from "@/data/profile";

export default function Brothers() {
  return (
    <section
      id="meet-the-brothers"
      className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16"
    >
      <h2 className="mb-8">Meet the Brothers</h2>
      <div className="mx-auto max-w-3xl space-y-6 text-body">
        <p className="m-0 first:mt-0">{profile.brothers.intro}</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
        {profile.brothers.members.map((member) => (
          <figure
            key={member.name}
            className="flex flex-col items-center gap-4 text-center"
          >
            <Image
              src={member.image}
              alt={member.alt}
              width={420}
              height={560}
              className="h-auto w-96 rounded-none object-cover surface-box ring-1 ring-white/20 md:w-[340px]"
            />
            <figcaption className="mt-4 text-white text-lg">{member.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
