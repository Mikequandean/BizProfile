import { profile } from "@/data/profile";

const CURRENT_YEAR = 2026; // year of this business profile (matches PDF creation date)

export default function Footer() {
  return (
    <footer className="border-t border-divider py-8 text-sm text-gray-400">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <p className="mb-1">
          &copy; {CURRENT_YEAR} {profile.company}. A technology company that
          builds software systems for other businesses.
        </p>
        <p className="text-xs">
          All case material is presented in general terms for legal and
          confidentiality reasons.
        </p>
      </div>
    </footer>
  );
}
