import { profile } from "@/data/profile";

export default function Differentiators() {
  const { realProblems, tieOurSuccess } = profile.differentiators;
  return (
    <section
      id="what-sets-us-apart"
      className="mx-auto max-w-5xl border-t border-gray-200 px-6 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
          <div>
            <h3 className="text-lg font-semibold text-brand">
              {realProblems.title}
            </h3>
            <p className="mt-3 text-gray-700">{realProblems.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand">
              {tieOurSuccess.title}
            </h3>
            <p className="mt-3 text-gray-700">{tieOurSuccess.description}</p>
          </div>
        </div>

        <div id="our-goal" className="border-t pt-8">
          <h3 className="text-2xl font-bold text-gray-900">Our Goal</h3>
          <p className="mt-4 max-w-2xl text-lg text-gray-700">{profile.goal}</p>
        </div>
      </div>
    </section>
  );
}
