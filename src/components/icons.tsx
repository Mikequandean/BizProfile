/** A small set of consistent, platform-stable inline SVG icons. */
import type { SVGProps, ReactElement } from "react";

type Icon = (props: SVGProps<SVGSVGElement>) => ReactElement;

export const Icons = {
  // inventory / boxes
  asset: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <rect x={3} y={5} width={18} height={14} rx={1} />
      <path d="M8 9h.01M16 9h.01M8 13h.01M13 13h.01" />
    </svg>
  ),
  // hand / manual labour
  manual: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <path d="M18.4 11a3 3 0 1 0 0-6 3 3 0 0 0-5.6-.84M6 11a4 4 0 1 1 8 0v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a6 6 0 0 1 12 0v7" />
    </svg>
  ),
  // growth arrow
  growth: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <path d="M12 5v14M5 12l7 7 7-7" />
      <path d="M9 9h5a2 2 0 0 1 2 2v1" />
      <circle cx={16} cy={16} r={1.5} />
    </svg>
  ),
  // invoice / receipt
  invoice: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <path d="M3 8l9 5 9-5v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M5 6V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  // headset / support
  support: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <path d="M9 11h.01M15.005 11h.005" />
      <path d="M20 15.5a4.5 4.5 0 0 1-4 4.47V20a4 4 0 0 1-8 0v-.03A4.5 4.5 0 0 1 4 15.5a4.5 4.5 0 0 1 4-4.47V8a4 4 0 0 1 8 0v3.03A4.5 4.5 0 0 1 20 15.5z" />
    </svg>
  ),
  // pipeline / funnel
  pipeline: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <path d="M4 6h16M8 12h8M12 18h.01" />
      <circle cx={6} cy={6} r={1.5} />
      <circle cx={18} cy={12} r={1.5} />
      <circle cx={12} cy={18} r={1.5} />
    </svg>
  ),
  // chart / dashboard
  reporting: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <path d="M3 13l4-4 3 3 5-5 7 7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  ),
  // checkmark / approval
  approvals: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <path d="M20 6L9 17l-5-5" />
      <path d="M9 17l7-7" />
    </svg>
  ),
  // document / compliance
  compliance: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M8 4V2h8v2M8 20v2h8v-2" />
    </svg>
  ),
  // people / HR
  hr: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <path d="M17 21v-2a4 4 0 0 0-3.3-3.9" />
      <path d="M9 21v-2a4 4 0 0 1 3.3-3.9M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    </svg>
  ),
  // shopping cart / procurement
  procurement: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <path d="M3 12l18-4v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 12V5l3-3 3 3v7" />
      <circle cx={18} cy={16} r={1.5} />
      <circle cx={6} cy={16} r={1.5} />
    </svg>
  ),
} satisfies Record<string, Icon>;

export type IconName = keyof typeof Icons;
