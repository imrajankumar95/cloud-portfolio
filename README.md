# Rajan Kumar — Cloud Data & DevOps Portfolio

> Azure Data Engineer (DP-203) · 17 months enterprise experience at TD Bank · George Brown College Cloud Computing

**Live Site:** [your-username.github.io/portfolio](https://imrajankumar95.github.io/portfolio)
**GitHub:** [github.com/imrajankumar95](https://github.com/imrajankumar95)
**LinkedIn:** [linkedin.com/in/rajankumar95](https://linkedin.com/in/rajankumar95)

---

## About This Portfolio

Personal portfolio built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools.
Designed to meet professional standards while remaining fully maintainable and easy to deploy.

---

## Project Structure

```
Portfolio/
├── index.html              # Entry point — semantic HTML, no inline styles
├── css/
│   ├── variables.css       # Design tokens (colors, spacing, fonts)
│   ├── styles.css          # All component styles
│   └── responsive.css      # Mobile breakpoints
├── js/
│   ├── data.js             # All portfolio content (edit this to update content)
│   ├── components.js       # Card renderers (projects, skills, education)
│   └── main.js             # Nav, scroll behaviour, dark mode hook
├── data/
│   └── projects.json       # Reference JSON (for future server-side use)
└── assets/
    └── resume/
        └── Rajan_Kumar_Resume_CloudDataEng.docx
```

---

## How to Run Locally

**Requires Node.js installed:**

```bash
cd Portfolio
npx serve .
```

Open `http://localhost:3000` in your browser.

> Note: Do not open index.html directly via file:// — JS modules won't load due to browser CORS restrictions.

---

## How to Update Content

| What to change | Where to edit |
|---|---|
| Projects, skills, certifications | `js/data.js` |
| Bio, hero text, experience bullets | `index.html` |
| Colors, fonts, spacing | `css/variables.css` |
| Layout and component styles | `css/styles.css` |
| Mobile breakpoints | `css/responsive.css` |

### Add a New Project

Open `js/data.js` and push a new object into the `projects` array:

```js
{
  id: "my-project",
  flagship: false,
  badge: { label: "☁ Azure", cssClass: "badge-cloud" },
  status: "In Progress",
  title: "My New Project",
  repo: "my-repo-name",
  repoUrl: "https://github.com/imrajankumar95/my-repo-name",
  description: "What it does...",
  architecture: "Step 1 -> Step 2 -> Step 3",
  problem: "Problem it solves...",
  stack: ["Azure", "Python", "Docker"]
}
```

---

## Tech Stack

- **HTML5** — semantic structure, accessibility (ARIA labels, skip link)
- **CSS3** — custom properties, CSS Grid, Flexbox, responsive design
- **Vanilla JavaScript** — IntersectionObserver, dynamic rendering, mobile nav
- **No frameworks** — easy to migrate to React (components are 1:1 mappable)

---

## Featured Projects

### The Migration Arc (Flagship)
End-to-end cloud migration pipeline — Vagrant VM to AWS EKS via Docker, Terraform, ECS, and Kubernetes.
[github.com/imrajankumar95/the-migration-arc](https://github.com/imrajankumar95/the-migration-arc)

### Infrastructure Monitoring Stack
Full observability with Prometheus, Grafana, Node Exporter, and AlertManager — deployed on Docker Compose and AWS EC2.
[github.com/imrajankumar95/infrastructure-monitoring](https://github.com/imrajankumar95/infrastructure-monitoring)

### Azure VM + Bash Automation
Automated Linux VM deployment on Azure with NGINX configuration via Bash scripts.
[github.com/imrajankumar95/azure-vm-nginx-automation](https://github.com/imrajankumar95/azure-vm-nginx-automation)

---

## License

MIT — free to use as a template with attribution.
