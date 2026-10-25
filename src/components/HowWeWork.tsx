import { profile } from "@/data/profile";

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="mx-auto max-w-5xl border-t border-divider px-6 py-12 md:px-8 md:py-16"
    >
      <h2 className="mb-8">How We Work</h2>
      <div className="mx-auto max-w-3xl">
        <p className="m-0">{profile.howWeWork.intro}</p>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {profile.howWeWork.steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-divider bg-surface p-6 shadow-lg"
            >
              <span className="step-number absolute -top-3 left-6 flex h-9 w-9 items-center justify-center rounded-full">
                {step.number}
              </span>
              <h3 className="mb-2 mt-2 text-white">{step.title}</h3>
              <p className="m-0 text-body">{step.description}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-12 mb-8">Who We Work With</h2>
        <p className="m-0">{profile.howWeWork.whoWeWorkWith}</p>
      </div>
    </section>
  );
}
