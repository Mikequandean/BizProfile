import Image from "next/image";

export default function ProfilePdf() {
  return (
    <section
      id="our-profile"
      className="mx-auto max-w-5xl border-t border-divider px-6 py-12 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-3xl space-y-12 text-center">
        <h2 className="mb-6 text-white">Our Business Profile</h2>
        <p className="m-0 text-body/70 max-w-2xl mx-auto">
          View the full House of Mzozoyana business profile as presented in our
          official design document.
        </p>

        <div className="mx-auto max-w-2xl relative rounded-2xl border border-divider shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <Image
              src="/pdf_images/x0.jpg"
              alt="Business profile page 1"
              width={722}
              height={1600}
              className="h-auto w-full object-cover"
              priority
              sizes="100vw"
            />
            <Image
              src="/pdf_images/x1.jpg"
              alt="Business profile page 2"
              width={722}
              height={1600}
              className="h-auto w-full object-cover"
              sizes="100vw"
            />
            <Image
              src="/pdf_images/x2.jpg"
              alt="Business profile page 3"
              width={650}
              height={1440}
              className="h-auto w-full object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        <p className="m-0 text-xs text-body/50 italic mt-4">
          Business profile design — House of Mzozoyana
        </p>
      </div>
    </section>
  );
}
