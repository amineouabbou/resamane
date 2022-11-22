const config = {
  defaultTitle: 'Résidence et logement universitaire a agadir',
  url:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_SITE_URL
      : 'http://localhost:8888/resamane',
  apiUrl: 'https://api.residencesamane.ma',
  defaultDescription:
    'Résidences universitaires Amane est une résidence et un campus multi-services inclusif et fonctionnel, pour étudiantes située à agadir',
  googleAnalyticsID: 'G-PE8QW0ZGTZ2',
  GRAPHQL_URL:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_GRAPHQL_URL
      : 'https://api.residencesamane.ma/graphql',
}

export default config
