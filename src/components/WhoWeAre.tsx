import { profile } from "@/data/profile";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="mx-auto max-w-4xl px-6 py-12 md:max-w-5xl md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-3xl space-y-6 text-lg text-body">
        <p className="m-0 first:mt-0">{profile.whoWeAre}</p>
      </div>
    </section>
  );
}
