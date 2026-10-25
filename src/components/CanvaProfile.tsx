export default function CanvaProfile() {
  return (
    <section
      id="our-profile"
      className="mx-auto max-w-5xl border-t border-divider px-6 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-3xl space-y-10 text-center">
        <h2 className="mb-4 text-white">View Our Business Profile</h2>
        <p className="m-0 text-body/70 max-w-2xl mx-auto">
          Explore the full House of Mzozoyana business profile — our story, our
          approach, and the systems we build — in our official design document.
        </p>

        <a
          href="https://canva.link/pacc0f7pqnzwrn0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-accent bg-accent/10 px-8 py-4 text-accent font-medium transition-all hover:bg-accent hover:text-black focus:outline-none"
        >
          Open Profile in Canva
          <svg
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>

        <p className="m-0 text-xs text-body/50 italic mt-8">
          Opens in a new tab — House of Mzozoyana official design document
        </p>
      </div>
    </section>
  );
}
