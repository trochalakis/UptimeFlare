import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig = {
  // Title for your status page
  title: "Trochalakis Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'mailto:admin@trochalakis.com', label: 'Email', highlight: true },
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
      tooltip: 'Authentication and Single Sign-On (SSO) service',
      target: 'https://auth.trochalakis.com',
      checkProxy: 'worker://wnam'
    },
    {
      id: 'frigate',
      name: 'Frigate',
      method: 'GET',
      tooltip: 'Camera NVR',
      target: 'https://frigate.trochalakis.com',
      checkProxy: 'worker://wnam'
    },
    {
      id: 'hass',
      name: 'Home Assistant',
      method: 'GET',
      tooltip: 'Home Automation and Control Platform',
      target: 'https://hass.trochalakis.com',
      checkProxy: 'worker://wnam'
    },
    {
      id: 'mealie',
      name: 'Mealie',
      method: 'GET',
      tooltip: 'Recipe management and browsing service',
      target: 'https://mealie.trochalakis.com',
      checkProxy: 'worker://wnam'
    },
  ],
  notification: {
    appriseApiServer: "https://apprisevercel-chewbaccalakis-projects.vercel.app/notify",
    recipientUrl: "pover://uokzv3zuk9jigirg7goo7jdquoztmh@a5tmocddi9p6rne5pmbogwao5n4emf",
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

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
// const maintenances: MaintenanceConfig[] = []
const maintenances: MaintenanceConfig[] = [
  {
  },
]

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig, maintenances }
