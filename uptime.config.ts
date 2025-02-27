const pageConfig = {
  // Title for your status page
  title: "CallieCorner Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'mailto:admin@calliecorner.net', label: 'Email', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      id: 'authelia',
      name: 'Authelia',
      method: 'GET',
      tooltip: 'Authentication and Single Sign-On (SSO) service for CallieCorner',
      statusPageLink: 'https://auth.calliecorner.net',
      target: 'https://auth.calliecorner.net',
    },
    {
      id: 'homarr',
      name: 'Dashboard',
      method: 'GET',
      tooltip: 'Central dashboard for access to CallieCorner services',
      statusPageLink: 'https://dash.calliecorner.net',
      target: 'https://dash.calliecorner.net',
    },
    {
      id: 'mokey',
      name: 'Account Portal',
      method: 'GET',
      tooltip: 'Portal to manage CallieCorner account and credentials',
      statusPageLink: 'https://id.calliecorner.net',
      target: 'https://id.calliecorner.net',
    },
    {
      id: 'pelicanpanel',
      name: 'Pelican Panel',
      method: 'GET',
      tooltip: 'Control panel for managing game servers',
      statusPageLink: 'https://panel.calliecorner.net',
      target: 'https://panel.calliecorner.net',
    },
    {
      id: 'bookstack',
      name: 'Bookstack',
      method: 'GET',
      tooltip: 'Wiki and documentation platform for CallieCorner',
      statusPageLink: 'https://bookstack.calliecorner.net',
      target: 'https://bookstack.calliecorner.net',
    },
    {
      id: 'wastebin',
      name: 'Wastebin',
      method: 'GET',
      tooltip: 'Simple pastebin for sharing text and code snippets',
      statusPageLink: 'https://bin.calliecorner.net',
      target: 'https://bin.calliecorner.net',
    },
    {
      id: 'synapse',
      name: 'Matrix',
      method: 'GET',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'CallieCorner Matrix server for decentralized chat',
      target: 'https://matrix.calliecorner.net/_matrix/static/',
    },
    {
      id: 'mastodon',
      name: 'Mastodon',
      method: 'GET',
      tooltip: 'Decentralized social media platform for CallieCorner',
      statusPageLink: 'https://mastodon.calliecorner.net',
      target: 'https://mastodon.calliecorner.net',
    },
    {
      id: 'element',
      name: 'Element',
      method: 'GET',
      tooltip: 'Web matrix chat client for CallieCorner users',
      statusPageLink: 'https://element.calliecorner.net',
      target: 'https://element.calliecorner.net',
    },
    {
      id: 'cinny',
      name: 'Cinny',
      method: 'GET',
      tooltip: 'Web matrix chat client for CallieCorner users',
      statusPageLink: 'https://cinny.calliecorner.net',
      target: 'https://cinny.calliecorner.net',
    },
    {
      id: 'thelounge',
      name: 'The Lounge',
      method: 'GET',
      tooltip: 'Web-based IRC client',
      statusPageLink: 'https://lounge.calliecorner.net',
      target: 'https://lounge.calliecorner.net',
    },
  ],
  notification: {
    appriseApiServer: "https://apprisevercel-chewbaccalakis-projects.vercel.app/notify",
    recipientUrl: { 
      "pagerduty://688a877add924200c09ed41fadb771ea@u+4s6v2VfToBY6rHfL4g",
      "matrix://uptimeflare:sadspace63@matrix.calliecorner.net/!btPuxiCbrMiPAdhKBo:calliecorner.net"
    },
    timeZone: "America/Los_Angeles",
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
