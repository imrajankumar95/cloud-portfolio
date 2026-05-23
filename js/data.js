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
 */

const PORTFOLIO_DATA = {

  /* ── Skill Cards ─────────────────────────────────────────── */
  skills: [
    {
      title: "☁ Cloud Platforms",
      colorClass: "default",
      tags: [
        "Microsoft Azure",
        "Azure VM",
        "Azure Data Factory",
        "Azure SQL Database",
        "Azure Blob Storage",
        "Azure DevOps",
        "Azure AD / RBAC",
        "AWS EC2",
        "AWS S3",
        "AWS ECS",
        "AWS EKS",
        "AWS ECR",
        "AWS Lambda",
        "AWS RDS",
        "AWS IAM",
        "AWS Bedrock",
        "CloudFormation"
      ]
    },
    {
      title: "⚙ DevOps & Infrastructure",
      colorClass: "green",
      tags: [
        "Docker",
        "Docker Compose",
        "Kubernetes (K3s + EKS)",
        "Terraform",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Vagrant",
        "NGINX",
        "Bash",
        "PowerShell"
      ]
    },
    {
      title: "💻 Programming & Data",
      colorClass: "purple",
      tags: [
        "Python (Strong)",
        "SQL",
        "Bash",
        "Python ETL Automation",
        "SQL Pipelines",
        "Data Modeling",
        "Salesforce CRM",
        "YAML",
        "HCL (Terraform)"
      ]
    },
    {
      title: "📊 Observability & Tools",
      colorClass: "orange",
      tags: [
        "Prometheus",
        "Grafana",
        "Node Exporter",
        "AlertManager",
        "Azure Monitor",
        "Git & GitHub",
        "Jira",
        "Agile / Scrum",
        "Draw.io",
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
        "IAM & RBAC",
        "VPC Architecture",
        "Security Groups",
        "Audit Logging"
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
      status: "In Progress",
      title: "The Migration Arc",
      repo: "the-migration-arc",
      repoUrl: "https://github.com/imrajankumar95/the-migration-arc",
      description:
        "Multi-cloud container deployment pipeline built at George Brown College. Takes a Flask application from local Docker on WSL2 through AWS ECS (Fargate) and AWS EKS (Kubernetes) with LoadBalancer exposure. Phase 4 (Azure AKS) planned. Each phase adds a real layer of production infrastructure: containerization, managed container services, and Kubernetes orchestration.",
      architecture:
        "Flask App (WSL2) -> Docker -> AWS ECR -> AWS ECS (Fargate) -> AWS EKS (eksctl + kubectl) -> Azure AKS (planned)",
      problem:
        "Demonstrates the complete build-to-deploy lifecycle that cloud and DevOps engineers own in production: local containerization, cloud container registries, managed container services, and Kubernetes deployments across multiple cloud providers.",
      stack: ["Docker", "Flask", "WSL2", "AWS ECR", "AWS ECS Fargate", "AWS EKS", "eksctl", "kubectl", "IAM", "GitHub Actions"]
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
        "Full observability stack deployed with Docker Compose - Prometheus for metrics scraping, Grafana for custom dashboards, Node Exporter for host-level metrics (CPU, memory, disk, network), and AlertManager with Slack and email notification channels. Monitors the Migration Arc app and validated by deploying the identical stack to an AWS cloud VM.",
      architecture:
        "Node Exporter -> Prometheus Scrape -> Grafana Dashboards -> AlertManager -> Slack / Email Alerts",
      problem:
        "Production systems need observability before they need new features. This stack replicates what engineering teams actually run - custom dashboards, threshold-based alerting, and cross-environment portability validated on both local Docker and an AWS VM.",
      stack: ["Prometheus", "Grafana", "Node Exporter", "AlertManager", "Docker Compose", "AWS EC2", "Slack Integration"]
    },
    {
      id: "azure-vm-nginx",
      flagship: false,
      badge: {
        label: "☁ Azure · Linux",
        cssClass: "badge-cloud"
      },
      status: "In Progress",
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
        "Coursework: Cloud Infrastructure & Virtualization, Linux Administration, Cybersecurity Fundamentals, DevOps, Database Management. Program includes a mandatory industry co-op placement in Fall 2026.",
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
        "Azure Data Engineer Associate (DP-203) - Microsoft",
        "Microsoft Azure Fundamentals (AZ-900) - Microsoft (May 2026)",
        "Microsoft 365 Copilot & Agent Administration Fundamentals (AB-900) - Microsoft (May 2026)",
        "Data Engineer in Python - DataCamp (Jan 2025)",
        "Agentic AI on AWS - BESA (2026)",
        "Free Data Engineering Bootcamp - DataExpert.io",
        "Combined Excellence: Data Engineering + Analytical Engineering - DataExpert.io"
      ],
      placeholder: "📎 Certificates available on request."
    },
    {
      id: "certs-inprogress",
      fullWidth: false,
      icon: "📜",
      title: "Certifications In Progress",
      institution: "Microsoft · AWS",
      date: "Expected 2026",
      description: null,
      certs: [
        "Azure Administrator Associate (AZ-104) - Microsoft",
        "AWS Solutions Architect Associate - AWS"
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
