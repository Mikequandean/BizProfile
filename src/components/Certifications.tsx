import { profile } from "@/data/profile";
import { Icons, type IconName } from "@/components/icons";

const iconForIssuer: Record<string, IconName> = {
  sophos: "shield",
  compTIA: "badge",
  compTIAcertification: "badge",
};

export default function Certifications() {
  const certs = profile.certifications;

  return (
    <section
      id="certifications"
      className="mx-auto max-w-5xl border-t border-divider px-6 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8">Licenses & Certifications</h2>
        <p className="m-0 mb-12 text-body max-w-2xl">
          Our team holds industry-recognised certifications in cybersecurity,
          systems administration, and threat detection. These credentials back
          the way we build: secure by design, grounded in real-world practice,
          and kept current as technology and threats evolve.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert) => {
            const Icon = Icons[iconForIssuer[cert.issuer.toLowerCase().replace(/\s+/g, "")] ?? "badge"];
            return (
              <article
                key={cert.name}
                className="rounded-2xl border border-divider bg-surface p-6 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-black">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="mb-1 text-white">{cert.name}</h3>
                    <p className="m-0 text-sm text-body/70">{cert.issuer}</p>
                  </div>
                </div>
                <dl className="space-y-2 text-sm text-body/70">
                  <dt className="font-medium">Issued</dt>
                  <dd className="m-0">{cert.issued}</dd>
                  <dt className="font-medium">Expires</dt>
                  <dd className="m-0">{cert.expires}</dd>
                  {cert.credentialId && (
                    <>
                      <dt className="font-medium">Credential ID</dt>
                      <dd className="m-0">{cert.credentialId}</dd>
                    </>
                  )}
                  <dt className="font-medium">Skills</dt>
                  <dd className="m-0">{cert.skills.join(", ")}</dd>
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
