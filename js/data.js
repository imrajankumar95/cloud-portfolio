/**
 * data.js - Portfolio content as a JavaScript global
 *
 * Why a JS file instead of projects.json + fetch()?
 * fetch() on local file:// URLs is blocked by CORS.
 * Using a global variable works everywhere - local, GitHub Pages, Netlify, etc.
 * Phase 2: swap for fetch('/data/projects.json') once hosted on a server.
 *
 * HOW TO UPDATE:
 *   - Add a new project: push an object into PORTFOLIO_DATA.projects
 *   - Add a skill category: push into PORTFOLIO_DATA.skills
 *   - Add an education entry: push into PORTFOLIO_DATA.education
 *   - The JS components will render everything automatically
 *
 * Last content refresh: July 2026 (AZ-104 passed Jul 5, Migration Arc complete)
 */

const PORTFOLIO_DATA = {

  /* ── Skill Cards ─────────────────────────────────────────── */
  skills: [
    {
      title: "☁ Cloud Platforms",
      colorClass: "default",
      tags: [
        "Microsoft Azure (AZ-104 certified)",
        "Azure AKS",
        "Azure Virtual Machines",
        "Azure Static Web Apps",
        "Azure Data Factory",
        "Azure SQL Database",
        "Azure Blob Storage",
        "Entra ID / RBAC",
        "Virtual Network / NSG",
        "ARM Templates & Bicep",
        "Azure Key Vault",
        "AWS EC2",
        "AWS ECS Fargate",
        "AWS EKS",
        "AWS ECR",
        "AWS S3",
        "AWS Lambda",
        "AWS IAM",
        "CloudFormation"
      ]
    },
    {
      title: "⚙ DevOps & Infrastructure",
      colorClass: "green",
      tags: [
        "Docker",
        "Docker Compose",
        "Kubernetes (AKS · EKS · K3s)",
        "kubectl & eksctl",
        "Terraform",
        "GitHub Actions",
        "CI/CD Pipelines",
        "NGINX",
        "Vagrant",
        "Bash",
        "PowerShell"
      ]
    },
    {
      title: "💻 Programming & Data",
      colorClass: "purple",
      tags: [
        "Python (Strong)",
        "Go",
        "SQL",
        "C++ (240+ DSA problems)",
        "Python ETL Automation",
        "SQL Pipelines",
        "Data Modeling",
        "Salesforce CRM",
        "YAML",
        "HCL (Terraform)"
      ]
    },
    {
      title: "📊 Observability, Security & Tools",
      colorClass: "orange",
      tags: [
        "Prometheus",
        "Grafana",
        "Node Exporter",
        "AlertManager",
        "Azure Monitor / Log Analytics (KQL)",
        "Microsoft Sentinel (SIEM/SOAR)",
        "Defender for Cloud",
        "Git & GitHub",
        "Jira",
        "Agile / Scrum",
        "Linux (Ubuntu, RHEL)",
        "Windows Server"
      ]
    }
  ],

  /* ── Core Competency Cards ───────────────────────────────── */
  competencies: [
    {
      title: "Data & ETL",
      colorClass: "default",
      tags: [
        "Azure Data Factory",
        "Azure SQL Database",
        "Salesforce CRM",
        "Python ETL Automation",
        "SQL Pipelines",
        "Data Modeling"
      ]
    },
    {
      title: "Infrastructure & Security",
      colorClass: "default",
      tags: [
        "Terraform",
        "Docker & Kubernetes",
        "Entra ID / RBAC",
        "NSG & JIT VM Access",
        "Microsoft Sentinel",
        "Defender for Cloud",
        "Key Vault & Disk Encryption",
        "Audit Logging"
      ]
    },
    {
      title: "AI-Augmented Engineering",
      colorClass: "default",
      tags: [
        "Claude Code for IaC scaffolding",
        "LLM-assisted debugging & docs",
        "Engineering decision logs (DECISIONS.md)",
        "LLM-powered K8s log analysis (capstone)"
      ]
    }
  ],

  /* ── Projects ────────────────────────────────────────────── */
  projects: [
    {
      id: "migration-arc",
      flagship: true,
      badge: {
        label: "⚡ Flagship Project",
        cssClass: "badge-flagship"
      },
      status: "Complete",
      title: "The Migration Arc",
      repo: "the-migration-arc",
      repoUrl: "https://github.com/imrajankumar95/the-migration-arc",
      description:
        "Multi-cloud container journey completed in four phases: a Flask application taken from local Docker on WSL2 to AWS ECS (Fargate), then to Kubernetes on AWS EKS, and finally to Azure AKS. Every phase is documented with READMEs, architecture diagrams, screenshots, and a DECISIONS.md engineering log. All cloud resources were torn down after validation - total spend kept near $0.",
      architecture:
        "Flask App (WSL2) -> Docker -> AWS ECR -> AWS ECS (Fargate) -> AWS EKS -> Azure AKS",
      problem:
        "Demonstrates the complete build-to-deploy lifecycle that cloud and DevOps engineers own in production: containerization, cloud container registries, managed container services, and Kubernetes deployments on two cloud providers - plus the cost discipline to tear it all down when done.",
      stack: ["Docker", "Flask", "AWS ECR", "AWS ECS Fargate", "AWS EKS", "Azure AKS", "kubectl", "eksctl", "IAM", "GitHub Actions"]
    },
    {
      id: "local-to-cloud-starter",
      flagship: false,
      badge: {
        label: "🚀 Live · CI/CD",
        cssClass: "badge-cloud"
      },
      status: "Shipped · Live",
      title: "Local-to-Cloud Starter",
      repo: "local-to-cloud-starter",
      repoUrl: "https://github.com/imrajankumar95/local-to-cloud-starter",
      liveUrl: "https://ashy-bay-0d76ae90f.7.azurestaticapps.net",
      description:
        "First project shipped to production and still live today: a static site containerized with NGINX and Docker for local development, deployed to Azure Static Web Apps through a GitHub Actions pipeline. Every push to main triggers an automatic build and deploy - zero manual steps.",
      architecture:
        "NGINX + Docker (local, WSL2) -> GitHub Push -> GitHub Actions -> Azure Static Web Apps",
      problem:
        "Proves the simplest complete path from local development to a live cloud endpoint with zero-touch deployment - the CI/CD foundation pattern reused in every later project.",
      stack: ["NGINX", "Docker", "GitHub Actions", "Azure Static Web Apps", "WSL2", "Git"]
    },
    {
      id: "k8s-log-explainer",
      flagship: false,
      badge: {
        label: "🤖 AI · AKS Capstone",
        cssClass: "badge-obs"
      },
      status: "In Progress · Ships Jul 2026",
      title: "K8s Log Explainer",
      repo: "k8s-log-explainer",
      repoUrl: null,
      description:
        "Capstone in flight: an application on Azure AKS ships pod logs to an LLM API that returns plain-English incident summaries - applied AIOps. Infrastructure provisioned with Terraform, deployed via GitHub Actions, with Prometheus and Grafana dashboards on top. Repository goes public at launch.",
      architecture:
        "AKS Pods -> Log Collector -> LLM API -> Plain-English Incident Summary + Prometheus / Grafana",
      problem:
        "On-call engineers drown in raw Kubernetes logs. This capstone turns log noise into readable incident explanations - combining cloud infrastructure, DevOps automation, observability, and applied AI in a single system.",
      stack: ["Azure AKS", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "LLM API", "Python"]
    },
    {
      id: "infra-monitoring",
      flagship: false,
      badge: {
        label: "📊 Observability",
        cssClass: "badge-obs"
      },
      status: "In Progress",
      title: "Infrastructure Monitoring Stack",
      repo: "infrastructure-monitoring",
      repoUrl: "https://github.com/imrajankumar95/infrastructure-monitoring",
      description:
        "Full observability stack deployed with Docker Compose - Prometheus for metrics scraping, Grafana for custom dashboards, Node Exporter for host-level metrics (CPU, memory, disk, network), and AlertManager with Slack and email notification channels. The dashboards and alert rules are being folded into the K8s Log Explainer capstone.",
      architecture:
        "Node Exporter -> Prometheus Scrape -> Grafana Dashboards -> AlertManager -> Slack / Email Alerts",
      problem:
        "Production systems need observability before they need new features. This stack replicates what engineering teams actually run - custom dashboards, threshold-based alerting, and cross-environment portability.",
      stack: ["Prometheus", "Grafana", "Node Exporter", "AlertManager", "Docker Compose", "AWS EC2", "Slack Integration"]
    },
    {
      id: "azure-vm-nginx",
      flagship: false,
      badge: {
        label: "☁ Azure · Linux",
        cssClass: "badge-cloud"
      },
      status: "Complete",
      title: "Azure VM + Bash Automation",
      repo: "azure-vm-nginx-automation",
      repoUrl: "https://github.com/imrajankumar95/azure-vm-nginx-automation",
      description:
        "Automated deployment of a Linux VM on Azure with NGINX installation, configuration, and networking setup via Bash scripts. Demonstrates core Azure fundamentals alongside practical Linux administration - the foundation for the IaC and CI/CD work in the Migration Arc.",
      architecture:
        "Azure CLI -> VM Provision -> Bash Scripts -> NGINX Config -> NSG Rules -> Public Endpoint",
      problem:
        "Manual VM setup is slow and non-repeatable. This project automates the full lifecycle from VM creation to serving traffic - building the baseline for Azure infrastructure before moving to Terraform.",
      stack: ["Azure", "Bash", "Linux", "NGINX", "Azure CLI", "NSG"]
    }
  ],

  /* ── Education & Acknowledgements ───────────────────────── */
  education: [
    {
      id: "diploma",
      fullWidth: true,
      icon: "🎓",
      title: "Ontario College Diploma - Cloud Computing Technology",
      institution: "George Brown College, Toronto, ON",
      date: "Jan 2026 - Dec 2026 (includes mandatory co-op, Fall 2026)",
      description:
        "Coursework: Azure Administration (AZ-104), Azure Architecture, Azure Security (AZ-500), AWS Cloud Practitioner & Solutions Architect, Cloud Infrastructure & Virtualization, Linux Administration, DevOps. Program includes a mandatory industry co-op placement in Fall 2026.",
      certs: null,
      placeholder: "📎 Official transcript will be attached upon completion."
    },
    {
      id: "certs-completed",
      fullWidth: false,
      icon: "✅",
      title: "Completed Certifications",
      institution: "Microsoft · DataCamp · DataExpert.io · BESA",
      date: "2023 - 2026",
      description: null,
      certs: [
        "Azure Administrator Associate (AZ-104) - Microsoft (Jul 2026)",
        "Azure Data Engineer Associate (DP-203) - Microsoft",
        "Azure Fundamentals (AZ-900) - Microsoft (May 2026)",
        "Microsoft 365 Copilot & Agent Administration Fundamentals (AB-900) - Microsoft (May 2026)",
        "Microsoft Applied Skills ×3 - Azure Networking · Azure Monitor · Secure Storage (Jun 2026)",
        "Data Engineer in Python - DataCamp (Jan 2025)",
        "Agentic AI on AWS - BESA (2026)",
        "Data Engineering + Analytical Engineering Bootcamps - DataExpert.io"
      ],
      placeholder: "📎 Verification badges available on Credly and Microsoft Learn."
    },
    {
      id: "certs-inprogress",
      fullWidth: false,
      icon: "📜",
      title: "Certifications - Next Up",
      institution: "Microsoft · AWS",
      date: "Expected 2026 - 2027",
      description: null,
      certs: [
        "Azure Security Engineer (AZ-500) - GBC coursework and labs complete, exam planned",
        "AWS Certified Solutions Architect - Associate - GBC coursework underway"
      ],
      placeholder: "📎 Certificates will be added upon completion."
    },
    {
      id: "transcripts",
      fullWidth: true,
      icon: "📄",
      title: "Transcripts & Documentation",
      institution: "Official Academic Records",
      date: "",
      description:
        "Official and unofficial academic transcripts, diplomas, and supporting documentation are available upon request. All credentials reflect coursework completed within the Cloud Computing Technology program at George Brown College.",
      certs: null,
      placeholder:
        "📎 Unofficial transcript · Official diploma · Letters of recommendation - to be attached directly to this portfolio upon receipt. Contact me at the information below to request copies."
    }
  ]
};
