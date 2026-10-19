type IconName = 'code' | 'database' | 'monitor' | 'gear' | 'chart' | 'brain' | 'layers' | 'nodes' | 'sparkles'

const paths: Record<IconName, string> = {
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-16-2 20',
  database: 'M20 5c0 2-3.6 3-8 3S4 7 4 5s3.6-3 8-3 8 1 8 3Zm0 0v14c0 2-3.6 3-8 3s-8-1-8-3V5m0 7c0 2 3.6 3 8 3s8-1 8-3',
  monitor: 'M3 3h18v14H3V3Zm5 19h8m-4-5v5',
  gear: 'm10 2-.6 3-2 .9-2.6-1.4-2 3.4L5 10v3l-2.2 2 2 3.5 2.6-1.4 2 .9.6 3h4l.6-3 2-.9 2.6 1.4 2-3.5-2.2-2v-3l2.2-2.1-2-3.4-2.6 1.4-2-.9L14 2h-4Zm6 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  chart: 'M4 21V11h3v10H4Zm7 0V3h3v18h-3Zm7 0V7h3v14h-3Z',
  brain: 'M12 4c-2-4-7-1-6 2-4 0-5 5-2 7-3 3 0 8 3 7 2 3 5 1 5-1V4Zm0 0c2-4 7-1 6 2 4 0 5 5 2 7 3 3 0 8-3 7-2 3-5 1-5-1M6 6l2 3m-4 4h4m-1 7v-5m11-9-2 3m4 4h-4m1 7v-5',
  layers: 'm12 2 10 5-10 5L2 7l10-5Zm-10 10 10 5 10-5M2 17l10 5 10-5',
  nodes: 'M6 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm16-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-8 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm16 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 7l4 4m4-1 4-5M6 19l4-5m4 0 4 5',
  sparkles: 'm9 2 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Zm11 11 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z',
}

function TechnologyIcon({ name }: { name: IconName }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}

export default TechnologyIcon
export type { IconName }
