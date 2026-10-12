export const SITE_NAME = 'RR City';
export const SITE_TAGLINE = 'Reality is the referee.';

export function formatSiteTitle(section?: string): string {
  return section ? `${section} | ${SITE_NAME}` : SITE_NAME;
}
