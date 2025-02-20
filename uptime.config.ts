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
      target: 'https://auth.calliecorner.net',
    },
    {
      id: 'homarr',
      name: 'Dashboard',
      method: 'GET',
      target: 'https://dash.calliecorner.net',
    },
    {
      id: 'mokey',
      name: 'Account Portal',
      method: 'GET',
      target: 'https://id.calliecorner.net',
    },
    {
      id: 'pelicanpanel',
      name: 'Pelican Panel',
      method: 'GET',
      target: 'https://panel.calliecorner.net',
    },
    {
      id: 'bookstack',
      name: 'Bookstack',
      method: 'GET',
      target: 'https://bookstack.calliecorner.net',
    },
    {
      id: 'wastebin',
      name: 'Wastebin',
      method: 'GET',
      target: 'https://bin.calliecorner.net',
    },
    {
      id: 'synapse',
      name: 'Matrix',
      method: 'GET',
      target: 'https://matrix.calliecorner.net/_matrix/static/',
    },
    {
      id: 'mastodon',
      name: 'Mastodon',
      method: 'GET',
      target: 'https://mastodon.calliecorner.net',
    },
    {
      id: 'irc',
      name: 'IRC',
      method: 'TCP_PING',
      target: 'direct.trochalakis.com:6667',
    },
    {
      id: 'element',
      name: 'Element',
      method: 'GET',
      target: 'https://element.calliecorner.net',
    },
    {
      id: 'cinny',
      name: 'Cinny',
      method: 'GET',
      target: 'https://cinny.calliecorner.net',
    },
    {
      id: 'thelounge',
      name: 'The Lounge',
      method: 'GET',
      target: 'https://lounge.calliecorner.net',
    },
    // Example TCP Monitor
    {
      id: 'calliecorner_ssh',
      name: 'CallieCorner SSH',
      method: 'TCP_PING',
      target: 'ssh.calliecorner.net:2269',
      timeout: 5000,
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
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
