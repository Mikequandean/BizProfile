import { profile } from "@/data/profile";

export default function Differentiators() {
  const { realProblems, tieOurSuccess } = profile.differentiators;
  return (
    <section
      id="what-sets-us-apart"
      className="mx-auto max-w-5xl border-t border-divider px-6 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-3xl space-y-12">
        <h2 className="mb-8">What Sets Us Apart</h2>
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
          <div>
            <h3 className="mb-3 text-white">{realProblems.title}</h3>
            <p className="m-0 text-body">{realProblems.description}</p>
          </div>
          <div>
            <h3 className="mb-3 text-white">{tieOurSuccess.title}</h3>
            <p className="m-0 text-body">{tieOurSuccess.description}</p>
          </div>
        </div>

        <div id="our-goal" className="border-t border-divider pt-8 mt-12">
          <h2 className="mb-8">Our Goal</h2>
          <p className="m-0 max-w-2xl text-body">{profile.goal}</p>
        </div>
      </div>
    </section>
  );
}
