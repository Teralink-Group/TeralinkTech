import {
  ShieldCheck,
  Network,
  Headset,
  Cloud,
  Server,
  DatabaseBackup,
  Monitor,
  BriefcaseBusiness,
  type LucideIcon,
  Video,
  Cable,
  PhoneCall,
} from "lucide-react";
export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  points: string[];
  outcome: string;
};
export const services: Service[] = [
  {
    slug: "it-support-maintenance",
    title: "IT Support & Annual Maintenance(AMC)",
    short:
      "Responsive technical support that keeps your people productive and your business moving.",
    description:
      "From everyday troubleshooting to proactive maintenance, we provide dependable IT support tailored to the way your organisation works. Get practical help when you need it, with a focus on preventing disruption before it starts.",
    icon: Headset,
    points: [
      "Remote and on-site technical support",
      "Desktop, laptop and software troubleshooting",
      "Preventive maintenance and health checks",
      "Annual maintenance contracts (AMC)",
      "IT asset and issue management",
    ],
    outcome:
      "A more reliable workplace, fewer avoidable interruptions and a clear point of contact for IT.",
  },
  {
    slug: "network-wifi-solutions",
    title: "Network & Wi-Fi Solutions",
    short:
      "Secure, reliable connectivity designed around your workplace and your team.",
    description:
      "We design, deploy and manage business networks that support smooth day-to-day operations. From structured network configuration to dependable Wi-Fi coverage, every solution is planned for performance, security and room to grow.",
    icon: Network,
    points: [
      "Business LAN and Wi-Fi installation",
      "Router, switch and access point configuration",
      "Network performance and coverage optimisation",
      "Network monitoring and troubleshooting",
      "Secure guest and staff network segmentation",
    ],
    outcome:
      "Consistent connectivity and a network foundation that can scale with your business.",
  },
  
{
  slug: "cybersecurity-solutions",
  title: "Cybersecurity & Firewall Management",
  short:
    "Protect your business with managed firewalls, secure remote access and practical security assessments.",
  description:
    "Strengthen your organisation's security posture with layered protection for users, devices, email and network infrastructure. We help businesses configure and manage firewalls, establish secure VPN connections, implement multi-factor authentication (MFA), improve Microsoft 365 security and conduct IT security assessments to identify potential risks and recommend appropriate safeguards. Where included in the agreed scope, services can also cover site-to-site VPN connectivity and network segmentation to help secure communication between offices and isolate network environments.",
  icon: ShieldCheck,
  points: [
    "Firewall installation, configuration and management",
    "VPN setup and secure remote access",
    "Site-to-site VPN configuration, where offered",
    "Network segmentation and access controls, where offered",
    "Multi-factor authentication (MFA) implementation",
    "Microsoft 365 security configuration and reviews",
    "Endpoint protection and business email security",
    "IT security audits and vulnerability assessments",
    "Security policy reviews and best-practice recommendations",
  ],
  outcome:
    "Improved security visibility, stronger access controls and a more resilient business IT environment, tailored to your organisation's security requirements.",
},


  {
    slug: "cloud-microsoft-365",
    title: "Microsoft 365 & Cloud Services",
    short:
      "Deploy, secure and manage Microsoft 365 tools for business email, communication and collaboration.",
    description:
      "We help businesses deploy and manage Microsoft 365 services tailored to their operational requirements. From Exchange Online business email and Microsoft Teams to SharePoint, OneDrive, multi-factor authentication (MFA) and tenant administration, we support setup, migration, user management, security configuration and ongoing administration.",
    icon: Cloud,
    points: [
      "Exchange Online business email setup and migration",
      "Microsoft Teams setup and collaboration configuration",
      "SharePoint sites, document libraries and permissions",
      "OneDrive setup, synchronisation and file sharing",
      "Multi-factor authentication (MFA) configuration",
      "Microsoft 365 tenant administration",
      "User accounts, licences and mailbox management",
      "Security settings, access controls and ongoing support",
      "Microsoft 365 data backup and recovery",
    ],
    outcome:
      "A properly managed Microsoft 365 environment that supports secure collaboration, business communication and everyday productivity.",
  },

  {
    slug: "server-it-infrastructure",
    title: "Server & IT Infrastructure",
    short:
      "A stable, well-planned infrastructure for the systems your business depends on.",
    description:
      "We help plan, implement and maintain the core infrastructure behind your operations. Whether you are setting up a new server environment or modernising existing systems, we focus on stability, manageability and future readiness.",
    icon: Server,
    points: [
      "Server installation and configuration",
      "Virtualisation planning and deployment",
      "Infrastructure management and upgrades",
      "System health and performance checks",
      "Infrastructure documentation and support",
    ],
    outcome:
      "An organised and dependable infrastructure built around your operational needs.",
  },
  {
    slug: "data-backup-recovery",
    title: "Data Backup & Recovery",
    short:
      "Protect business-critical information with planned backup and recovery solutions.",
    description:
      "A clear backup strategy helps your business prepare for accidental deletion, hardware failure and unexpected disruption. We implement practical backup routines and recovery planning so your data has a path back when it matters.",
    icon: DatabaseBackup,
    points: [
      "Automated backup solution setup",
      "Backup monitoring and verification",
      "Data recovery assistance",
      "Disaster recovery planning",
      "Retention and recovery policy guidance",
    ],
    outcome:
      "Greater confidence that important business information can be restored when required.",
  },
  {
    slug: "it-equipment-supply-installation",
    title: "IT Equipment Supply & Installation",
    short:
      "The right workplace technology, supplied, configured and ready to use.",
    description:
      "Simplify IT procurement and deployment with a single partner for equipment supply and installation. We help identify suitable devices and peripherals, then configure and set them up for your team's requirements.",
    icon: Monitor,
    points: [
      "Desktop and laptop supply",
      "Server and printer procurement",
      "Networking equipment supply",
      "Device configuration and deployment",
      "Workstation setup and handover",
    ],
    outcome:
      "A smoother equipment rollout with devices configured for your working environment.",
  },
  {
    slug: "it-consulting-office-setup",
    title: "IT Consulting & Office Setup",
    short:
      "Plan your technology with clarity, from the first office layout to the final connection.",
    description:
      "Starting a new office or relocating an existing team? We help translate business requirements into a practical IT plan, coordinate the technology setup and prepare your workplace for day one.",
    icon: BriefcaseBusiness,
    points: [
      "Technology consulting and IT planning",
      "New office IT setup",
      "Office relocation and IT coordination",
      "Infrastructure and equipment planning",
      "Technology recommendations and roadmaps",
    ],
    outcome:
      "A thoughtfully planned workplace where technology is ready to support your team.",
  },
  {
    slug: "cctv-surveillance-solutions",
    title: "CCTV & Surveillance Solutions",
    short:
      "Business surveillance systems designed for visibility, monitoring and operational security.",
    description:
      "Plan and deploy CCTV and IP surveillance systems for offices, commercial premises and other business environments. We help with camera placement, system configuration, recording infrastructure and remote viewing, with solutions planned around site requirements.",
    icon: Video,
    points: [
      "CCTV camera selection and installation",
      "IP camera and network video surveillance setup",
      "NVR and DVR configuration",
      "Recording storage and retention planning",
      "Remote viewing configuration where supported",
      "Surveillance system troubleshooting and maintenance",
    ],
    outcome:
      "A surveillance setup designed around your premises, monitoring needs and operational requirements.",
  },
  {
    slug: "structured-cabling-fiber-optics",
    title: "Structured Cabling & Fiber Optic Solutions",
    short:
      "Organised copper and fiber connectivity for reliable office networks and IT infrastructure.",
    description:
      "Build a dependable physical network foundation with structured cabling and fiber optic solutions. Depending on project requirements, services can include Cat6/Cat6A cabling, installation, termination, rack organisation, cable testing and test reports to help businesses establish organised, maintainable connectivity.",
    icon: Cable,
    points: [
      "Structured network cabling installation",
      "Cat6 and Cat6A copper cabling",
      "Fiber optic cabling and connectivity",
      "Patch panel and network rack organisation",
      "Cable routing, termination and labelling",
      "Cable testing and test reports, where available",
      "Network cabling testing and troubleshooting",
      "New office and infrastructure expansion cabling",
    ],
    outcome:
      "A structured, maintainable cabling infrastructure designed to support reliable business connectivity.",
  },
  {
    slug: "ip-telephony-pabx-voip",
    title: "IP Telephony, PABX & VoIP Solutions",
    short:
      "Business communication systems configured around your teams, extensions and calling requirements.",
    description:
      "Implement business telephony and IP-based communication systems to help teams communicate across offices and locations. Depending on your requirements and service scope, solutions can include IP PABX and VoIP setup, extension configuration, call routing, IP phone supply and SIP trunk setup.",
    icon: PhoneCall,
    points: [
      "IP telephony and VoIP deployment",
      "PABX and IP PBX setup and configuration",
      "Telephone extension creation and management",
      "Call routing and business calling configuration",
      "IP phone supply and installation",
      "SIP trunk setup",
      "Network readiness for voice communications",
      "Telephony troubleshooting and ongoing support",
    ],
    outcome:
      "A business communication system configured to support your team's calling and connectivity requirements.",
  },
];
export const industries = [
  "Professional Services",
  "Healthcare & Clinics",
  "Education & Training",
  "Retail & E-commerce",
  "Manufacturing & Logistics",
  "Corporate & Multi-office Businesses",
];
