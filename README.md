# 📄 ResumeBuild - Resume Builder

A **real-time, ATS-optimised resume builder** built with React 18, Vite, and Tailwind CSS.
Fill in your details, pick a template, and download a polished PDF instantly.

---

## ✨ Feature Overview

### Form Sections (11 total)
| Section        | Fields                                                              |
|----------------|----------------------------------------------------------------------|
| Personal Info  | Name, title, email, phone, location, website, LinkedIn, GitHub, photo, summary |
| Skills         | Grouped by category (ATS keyword-dense format)                       |
| Experience     | Company, role, location, dates, "current" toggle, description        |
| Education      | School, degree, GPA, honors, location, dates                         |
| Projects       | Name, role, tech stack, URL, dates, "ongoing" toggle, description    |
| Certifications | Name, issuer, issue/expiry dates, credential ID, verification URL    |
| Languages      | Language + proficiency level (Native → Elementary)                   |
| Awards         | Title, issuing body, year, description                               |
| Volunteer      | Org, role, dates, "active" toggle, description                       |
| Publications   | Title, publisher, date, URL/DOI, abstract                            |
| References     | Name, title, email, phone, relationship                              |

### Templates
| Template      | Style                                                                 |
|---------------|-----------------------------------------------------------------------|
| **Executive** | Dark charcoal header · Crimson Pro serif · skill tag clouds · two-column |
| **Modern**    | Blue accent (#1d4ed8) · pill-style skills · card-based education      |
| **ATS Clean** | Plain black & white · no graphics · maximum ATS parser compatibility  |

### UX Extras
- **Live preview** — updates on every keystroke
- **Dark / light mode** — toolbar toggle; respects OS preference on load
- **Profile photo** — upload, preview, remove (stored as base64)
- **LocalStorage persistence** — data survives page refresh
- **Form validation** — required fields checked before PDF export
- **Responsive** — mobile-first, bottom tab bar for Edit/Preview switching
- **PDF download** — high-quality A4 via html2pdf.js

---

## 🛠 Tech Stack

| Tool             | Version   | Purpose                           |
|------------------|-----------|-----------------------------------|
| React            | 18.3      | UI components & reactive state    |
| Vite             | 5.4       | Dev server & production bundler   |
| Tailwind CSS     | 3.4       | Utility-first responsive styling  |
| html2pdf.js      | 0.10      | Client-side PDF generation        |
| Google Fonts     | –         | Crimson Pro · Sora · IBM Plex Mono |

---

## 📁 Project Structure

```
resume-builder/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── globals.css
    ├── hooks/
    │   └── useResumeStore.js          # All state + localStorage sync
    ├── utils/
    │   ├── pdfExport.js               # html2pdf wrapper
    │   ├── validation.js              # Pre-download validation
    │   └── dateFormat.js              # Month/year formatter
    ├── components/
    │   ├── Toolbar.jsx                # Top nav
    │   ├── FormPanel.jsx              # Tabbed form shell
    │   ├── PreviewPanel.jsx           # Live preview panel
    │   └── form/
    │       ├── PersonalSection.jsx
    │       ├── SkillsSection.jsx
    │       ├── ExperienceSection.jsx
    │       ├── EducationSection.jsx
    │       ├── ProjectsSection.jsx    # NEW
    │       ├── CertsSection.jsx       # NEW
    │       ├── LanguagesSection.jsx   # NEW
    │       ├── AwardsSection.jsx      # NEW
    │       ├── VolunteerSection.jsx   # NEW
    │       ├── PublicationsSection.jsx # NEW
    │       └── ReferencesSection.jsx  # NEW
    └── templates/
        ├── _shared.js                 # formatDate + hasItems helpers
        ├── ExecutiveTemplate.jsx
        ├── ModernTemplate.jsx
        └── ATSTemplate.jsx            # NEW – ATS-clean black & white
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📖 Usage Guide

1. Open http://localhost:5173
2. Fill in your details across the 11 form tabs on the left
3. Watch the live preview update in real time on the right
4. Switch between **Executive**, **Modern**, and **ATS Clean** templates using the toolbar
5. Toggle dark mode with 🌙 / ☀️
6. Click **⬇ Download PDF** — validation runs first, then your resume downloads as A4 PDF

### Mobile
Use the **Edit / Preview** tabs at the bottom of the screen to switch views.

---

## 🎨 Adding a New Template

1. Create `src/templates/YourTemplate.jsx`
2. Import `{ formatDate, hasItems }` from `./_shared`
3. Accept `{ data }` prop — same shape as existing templates
4. Add your template ID to the `TEMPLATES` array in `Toolbar.jsx`
5. Add a conditional render in `PreviewPanel.jsx`

---

## 📄 License

MIT — free to use, modify, and distribute.
#
