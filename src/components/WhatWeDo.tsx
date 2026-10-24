import { profile } from "@/data/profile";
import { Icons, type IconName } from "@/components/icons";

const iconFor: Record<string, IconName> = {
  "asset-stock": "asset",
  "manual-work": "manual",
  "revenue-growth": "growth",
  "invoicing-payments": "invoice",
  "customer-support": "support",
  "sales-pipeline": "pipeline",
  reporting: "reporting",
  approvals: "approvals",
  compliance: "compliance",
  "hr-admin": "hr",
  procurement: "procurement",
};

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-t border-gray-200">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-lg text-gray-700">
          <p className="m-0">{profile.whatWeDo.introA}</p>
          <p className="m-0">{profile.whatWeDo.introB}</p>
          <p className="m-0 mb-2">{profile.whatWeDo.introC}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {profile.whatWeDo.problemAreas.map((area) => {
            const Icon = Icons[iconFor[area.id] ?? "asset"];
            return (
              <article
                key={area.id}
                className="group flex gap-5 rounded-2xl border border-gray-200 p-6 transition-shadow hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className="-mt-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand group-hover:scale-105"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {area.title}
                  </h3>
                  <p className="m-0 text-gray-700">{area.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
