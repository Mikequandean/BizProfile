import { profile } from "@/data/profile";

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="mx-auto max-w-5xl border-t border-gray-200 px-6 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-lg text-gray-700">{profile.howWeWork.intro}</p>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {profile.howWeWork.steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-gray-200 p-6"
            >
              <span className="absolute -top-3.5 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-base font-bold text-white">
                {step.number}
              </span>
              <h3 className="mb-2 mt-2 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="m-0 text-gray-700">{step.description}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-lg text-gray-700">
          {profile.howWeWork.whoWeWorkWith}
        </p>
      </div>
    </section>
  );
}
