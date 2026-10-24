/**
 * House of Mzozoyana — Business Profile
 * Single source of truth for all on-page copy.
 * Content transcribed from the official business profile PDF.
 */

export type ProblemArea = {
  id: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  /** /public path of the portrait image */
  image: string;
  alt: string;
};

export type Profile = {
  company: string;
  tagline: string;
  description: string;
  whoWeAre: string;
  brothers: {
    intro: string;
    members: TeamMember[];
  };
  whatWeDo: {
    introA: string;
    introB: string;
    introC: string;
    problemAreas: ProblemArea[];
  };
  howWeWork: {
    intro: string;
    steps: ProcessStep[];
    whoWeWorkWith: string;
  };
  differentiators: {
    realProblems: { title: string; description: string };
    tieOurSuccess: { title: string; description: string };
  };
  goal: string;
};

export const profile: Profile = {
  company: "House of Mzozoyana",
  tagline:
    "A technology company that builds systems for the problems businesses face.",
  description:
    "House of Mzozoyana is a bold, vigorous technology company that builds software systems for other businesses.",
  whoWeAre:
    "House of Mzozoyana is a bold, vigorous technology company that builds software systems for other businesses. Most companies, whatever their size or industry, run into the same kinds of operational problems: processes that are slow, work that is still done by hand, information scattered across too many places, and money or opportunities that quietly slip away. We exist to fix those problems. We take the time to understand what is actually going wrong inside a business, and then we design and build a system that solves it properly, so the people in the company can spend their time on the work that moves the business forward.",
  brothers: {
    intro:
      "House of Mzozoyana is led by two brothers, Qhama and Xhanti Mzozoyana, who are aggressive strategists at heart. They approach every problem the same way: study it closely, find the sharpest route through it, cut deep, and then move on it decisively. That mindset is built into how the company works. We don't wait for problems to become crises, and we don't settle for quick fixes. We look for the move that makes the biggest difference and we go after it with full commitment. Being brothers gives the company something rare: a shared vision, complete trust, and the ability to be direct with each other. That honesty carries over into how we treat our clients, who get the same straight talk and the same determination to see their problems solved.",
    members: [
      {
        name: "Qhama Mzozoyana",
        image: "/qhama.png",
        alt: "Portrait of Qhama Mzozoyana",
      },
      {
        name: "Xhanti Mzozoyana",
        image: "/xhanti.png",
        alt: "Portrait of Xhanti Mzozoyana",
      },
    ],
  },
  whatWeDo: {
    introA:
      "We build solutions around the problems most companies face. Rather than selling a one-size-fits-fits product that a client has to bend their business around, we study the problem inside the business first and then build the system that fits it. That is what sets our work apart from off-the-shelf software: every system starts with a real problem and is shaped around it.",
    introB:
      "Because every business has a different mix of problems, our systems work like a set of switches. A client with several problems can have several systems working together, and a client with only one problem only needs one. They keep the systems that matter to them and leave the rest switched off, and they can always switch more on as the business grows.",
    introC:
      "We can build a system around any problem a business faces, not only the ones listed here. The examples below show the kinds of problems we solve and the difference the right system can make. For legal and confidentiality reasons, we don't name the companies involved, so clients are described only in general terms.",
    problemAreas: [
      {
        id: "asset-stock",
        title: "Asset and stock management",
        description:
          "Automated stock takes and device registers that give a company one accurate, up-to-date picture of what it owns and uses. Without that picture, old equipment stays on the books long after it should have been removed, and costs keep running on things the business no longer needs. In one case, a television company was still insuring old devices that should have been taken off cover long ago. That is exactly the kind of hidden waste an automated stock-take system is built to catch.",
      },
      {
        id: "manual-work",
        title: "Manual, repetitive work",
        description:
          "Replacing slow, error-prone processes that people currently do by hand, such as copying figures between spreadsheets, retyping the same information into different places, or chasing updates by phone and email. When a system takes over that work, results come faster and more consistently, mistakes drop, and staff are freed up for work that needs their skills and judgement.",
      },
      {
        id: "revenue-growth",
        title: "Revenue growth",
        description:
          "Campaigns and systems that bring new business in, not only ones that cut waste. For one property company, our campaigns generated over a hundred home sellers, which left them with a full stock of listings and a packed appointment book. It shows that the right system can help a business grow, not just run more efficiently.",
      },
      {
        id: "invoicing-payments",
        title: "Invoicing and payments",
        description:
          "Automated invoicing, payment reminders and reconciliation, so money isn't lost or delayed because of manual admin, and the finance team always knows where things stand.",
      },
      {
        id: "customer-support",
        title: "Customer queries and support",
        description:
          "Systems that capture, route and answer customer requests quickly, so nothing slips through the cracks and customers always get a timely response.",
      },
      {
        id: "sales-pipeline",
        title: "Sales pipeline and lead follow-up",
        description:
          "Tracking leads, bookings and follow-ups in one place, so no opportunity goes cold simply because someone forgot to call back.",
      },
      {
        id: "reporting",
        title: "Reporting and dashboards",
        description:
          "Replacing spreadsheets and monthly manual reports with live numbers that management can trust and act on, instead of waiting weeks to see how the business is doing.",
      },
      {
        id: "approvals",
        title: "Approvals and workflows",
        description:
          "Moving requests, sign-offs and purchase orders through the business without paper trails or long email chains, so decisions are made faster and every step is on record.",
      },
      {
        id: "compliance",
        title: "Compliance and document management",
        description:
          "Tracking contracts, licences and expiry dates, so renewals and deadlines are never missed and important documents are always easy to find.",
      },
      {
        id: "hr-admin",
        title: "HR and admin",
        description:
          "Managing leave, onboarding, timesheets and other staff processes that eat up time, so the people team can focus on people rather than paperwork.",
      },
      {
        id: "procurement",
        title: "Procurement and inventory",
        description:
          "Tracking suppliers, orders and stock levels, so the business avoids overspending, shortages and last-minute scrambles.",
      },
    ],
  },
  howWeWork: {
    intro:
      "We never build before we understand the problem. Every project follows the same four steps, each one leading into the next.",
    steps: [
      {
        number: "1",
        title: "Discovery first",
        description:
          "Every project starts with listening. We learn how the business runs day to day: where processes break down, how often it happens, and how many people and hours are involved. This shows us the real problem, which is often not the one first described.",
      },
      {
        number: "2",
        title: "Agree on the problem",
        description:
          "Before anything is built, we agree with the client on exactly what needs fixing and what success will look like. This keeps everyone aligned and makes sure the system we build solves the right thing.",
      },
      {
        number: "3",
        title: "Build and launch",
        description:
          "We then build the system around that agreed problem and get it running in the business, making sure the people who will use it every day are comfortable with it.",
      },
      {
        number: "4",
        title: "Support and improve",
        description:
          "A system is never finished on the day it launches. We maintain it, fix issues quickly, and keep improving it as the business grows and its needs change.",
      },
    ],
    whoWeWorkWith:
      "Our model suits serious and large companies with real operational challenges, where a well-built system can make a clear difference to how the business runs. These are businesses with enough scale, activity and complexity that a problem left unsolved holds the whole operation back. Before taking on a project, we make sure it's the right fit for both sides, so that every system we build has the best chance of delivering real results.",
  },
  differentiators: {
    realProblems: {
      title: "Systems built around real problems, not generic software",
      description:
        "We don't hand clients a product and ask them to adapt to it. We start from the problem they actually have and build around it, so the system fits the way their business really works.",
    },
    tieOurSuccess: {
      title: "We tie our success to theirs",
      description:
        "We want clients to be so happy with the results that they talk about us unprompted and refer us to others. Our reputation grows when our clients' businesses do, so we care about how a system performs long after it launches.",
    },
  },
  goal:
    "Our goal is to build systems that make a real difference to the businesses we work with. The real asset we are building is reputation: clients who feel they got more value than they expected, who speak well of us without being asked, and who bring us the next client. We want House of Mzozoyana to be known as a company that solves real problems and delivers on what it promises, and we want that reputation to last.",
};
