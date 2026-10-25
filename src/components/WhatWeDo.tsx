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
    <section id="what-we-do" className="border-t border-divider">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
        <h2 className="mb-6">What We Do</h2>
        <div className="mx-auto max-w-3xl space-y-6 text-body">
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
                className="group flex gap-5 rounded-2xl border border-divider bg-surface p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <span
                  aria-hidden="true"
                  className="-mt-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-black group-hover:scale-105"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-2 text-white">{area.title}</h3>
                  <p className="m-0 text-body">{area.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div id="how-we-build" className="mt-16 border-t border-divider pt-12">
          <h2 className="mb-6">How We Build Systems</h2>
          <div className="mx-auto max-w-3xl space-y-6 text-body">
            <p className="m-0">
              We never build before we understand the problem. Every system we
              build starts with the same approach: we study how the business
              runs day to day, find where work breaks down, and then design a
              system that fits the way the business actually works — not the
              other way around.
            </p>
            <p className="m-0">
              Because every business has a different mix of problems, our
              systems work like a set of switches. A client with several
              problems can have several systems working together, and a client
              with only one problem only needs one. They keep the systems that
              matter to them and leave the rest switched off, and they can
              always switch more on as the business grows.
            </p>
            <p className="m-0">
              Our build approach is grounded in the expertise our team holds.
              With certifications in firewall engineering, detection and
              response, security analytics, and systems administration, we
              build systems that are secure by design and maintained for the
              long term. We don't hand clients a product and ask them to adapt
              to it — we start from the problem they actually have and build
              around it, so the system fits the way their business really
              works.
            </p>
            <p className="m-0">
              In our eyes, data and LLMs are currency. We build around hardcore
              problems using AI and large language models — not as buzzwords,
              but as real engines that process information, surface insights,
              and automate the work that used to slow businesses down. Every
              system we ship treats data as an asset and puts LLMs to work
              solving the hard problems our clients actually face.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
