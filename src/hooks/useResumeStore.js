import { useState, useEffect, useCallback } from "react";

const uid = (prefix = "id") =>
  prefix + Date.now() + Math.random().toString(36).slice(2, 5);

const DEFAULT_DATA = {
  personal: {
    name:     "Alexandra Chen",
    title:    "Senior Product Designer",
    email:    "alex.chen@email.com",
    phone:    "+1 (555) 012-3456",
    location: "San Francisco, CA",
    website:  "alexchen.design",
    linkedin: "linkedin.com/in/alexchen",
    github:   "github.com/alexchen",
    summary:
      "Creative product designer with 6+ years crafting intuitive digital experiences for millions of users. " +
      "Passionate about the intersection of design systems and user psychology. " +
      "Led cross-functional teams to deliver 40% improvement in user retention.",
    photo: ""
  },

  skills: [
    { id: "s1", category: "Design",       items: "Figma, Sketch, Adobe XD, Prototyping, Design Systems" },
    { id: "s2", category: "Development",  items: "React, HTML/CSS, JavaScript, TypeScript" },
    { id: "s3", category: "Research",     items: "User Interviews, Usability Testing, A/B Testing, Data Analysis" },
    { id: "s4", category: "Tools",        items: "Jira, Notion, Miro, Loom, Linear" }
  ],

  experience: [
    {
      id: "e1", company: "Stripe", role: "Senior Product Designer",
      start: "2021-03", end: "", current: true, location: "San Francisco, CA",
      description:
        "Led redesign of dashboard onboarding flow, reducing time-to-first-transaction by 42%. " +
        "Built component library used across 8 product teams. Mentored 3 junior designers."
    },
    {
      id: "e2", company: "Airbnb", role: "Product Designer",
      start: "2018-06", end: "2021-02", current: false, location: "San Francisco, CA",
      description:
        "Owned end-to-end design for host management experience. " +
        "Collaborated with data science to A/B test listing improvements boosting host engagement by 28%."
    }
  ],

  education: [
    {
      id: "ed1", school: "California College of the Arts",
      degree: "B.F.A. Interaction Design",
      start: "2014", end: "2018", gpa: "3.9",
      honors: "Summa Cum Laude", location: "San Francisco, CA"
    }
  ],

  projects: [
    {
      id: "p1", name: "DesignOS",
      tech: "Figma, React, Storybook", role: "Lead Designer",
      url: "github.com/alexchen/designos",
      start: "2023-01", end: "", current: true,
      description:
        "Open-source design system with 200+ components, used by 50+ teams worldwide. " +
        "Featured in Figma Community with 3K+ duplicates."
    },
    {
      id: "p2", name: "FlowBoard",
      tech: "React Native, Firebase, TypeScript", role: "Co-founder & Designer",
      url: "flowboard.app",
      start: "2022-03", end: "2023-06", current: false,
      description:
        "Productivity app with 10K+ downloads. Designed entire UX flow from ideation to launch in 3 months."
    }
  ],

  certs: [
    {
      id: "c1", name: "Google UX Design Certificate",
      issuer: "Google / Coursera", date: "2021-06", expiry: "",
      credentialId: "GUX-2021-0924", url: ""
    },
    {
      id: "c2", name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services", date: "2022-09", expiry: "2025-09",
      credentialId: "AWS-CCP-8821", url: ""
    }
  ],

  languages: [
    { id: "l1", language: "English",  proficiency: "Native" },
    { id: "l2", language: "Mandarin", proficiency: "Professional" },
    { id: "l3", language: "Spanish",  proficiency: "Conversational" }
  ],

  awards: [
    {
      id: "a1", title: "Designer of the Year",
      issuer: "UXDA Global", date: "2023",
      description: "Recognized for outstanding contribution to design systems in enterprise software."
    },
    {
      id: "a2", title: "Red Dot Design Award",
      issuer: "Red Dot", date: "2022",
      description: "Won for innovative UX design in the FlowBoard mobile application."
    }
  ],

  volunteer: [
    {
      id: "v1", org: "Code.org", role: "UX Mentor",
      start: "2020-01", end: "", current: true,
      description: "Mentor underrepresented students in product design. Conducted 60+ 1:1 sessions."
    },
    {
      id: "v2", org: "Figma Community", role: "Ambassador",
      start: "2021-06", end: "", current: true,
      description: "Create free design resources and tutorials. 5K+ community members."
    }
  ],

  publications: [
    {
      id: "pub1", title: "Building Design Systems at Scale",
      publisher: "UX Collective / Medium", date: "2023-03",
      url: "medium.com/@alexchen/design-systems",
      description: "In-depth guide on structuring design tokens and component APIs for large teams. 15K+ reads."
    },
    {
      id: "pub2", title: "The Psychology of Onboarding",
      publisher: "Smashing Magazine", date: "2022-11",
      url: "smashingmagazine.com",
      description: "Research-backed article on reducing user drop-off in onboarding flows."
    }
  ],

  references: [
    {
      id: "r1", name: "Jordan Kim", title: "VP Design, Stripe",
      email: "jordan.kim@stripe.com", phone: "+1 (415) 555-0198",
      relationship: "Direct Manager"
    },
    {
      id: "r2", name: "Sam Patel", title: "CPO, Airbnb",
      email: "sam.patel@airbnb.com", phone: "+1 (415) 555-0321",
      relationship: "Skip-level Manager"
    }
  ]
};

const STORAGE_KEY = "resumecraft_pro_v2";

export default function useResumeStore() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_DATA;
    } catch { return DEFAULT_DATA; }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch (e) { console.warn("LocalStorage save failed", e); }
  }, [data]);

  // ── Personal ──────────────────────────────────────────────────────────────
  const updatePersonal = useCallback((field, value) => {
    setData(d => ({ ...d, personal: { ...d.personal, [field]: value } }));
  }, []);

  // ── Generic list helpers ──────────────────────────────────────────────────
  const makeAdder = (key, template) =>
    useCallback(() => setData(d => ({ ...d, [key]: [...d[key], { id: uid(key[0]), ...template }] })), []);

  const makeUpdater = (key) =>
    useCallback((id, field, value) =>
      setData(d => ({ ...d, [key]: d[key].map(item => item.id === id ? { ...item, [field]: value } : item) })), []);

  const makeRemover = (key) =>
    useCallback((id) => setData(d => ({ ...d, [key]: d[key].filter(item => item.id !== id) })), []);

  // ── Skills ────────────────────────────────────────────────────────────────
  const addSkill    = useCallback(() => setData(d => ({ ...d, skills: [...d.skills, { id: uid("s"), category: "", items: "" }] })), []);
  const updateSkill = useCallback((id, f, v) => setData(d => ({ ...d, skills: d.skills.map(s => s.id === id ? { ...s, [f]: v } : s) })), []);
  const removeSkill = useCallback((id) => setData(d => ({ ...d, skills: d.skills.filter(s => s.id !== id) })), []);

  // ── Experience ────────────────────────────────────────────────────────────
  const addExperience    = useCallback(() => setData(d => ({ ...d, experience: [...d.experience, { id: uid("e"), company: "", role: "", start: "", end: "", current: false, location: "", description: "" }] })), []);
  const updateExperience = useCallback((id, f, v) => setData(d => ({ ...d, experience: d.experience.map(e => e.id === id ? { ...e, [f]: v } : e) })), []);
  const removeExperience = useCallback((id) => setData(d => ({ ...d, experience: d.experience.filter(e => e.id !== id) })), []);

  // ── Education ─────────────────────────────────────────────────────────────
  const addEducation    = useCallback(() => setData(d => ({ ...d, education: [...d.education, { id: uid("ed"), school: "", degree: "", start: "", end: "", gpa: "", honors: "", location: "" }] })), []);
  const updateEducation = useCallback((id, f, v) => setData(d => ({ ...d, education: d.education.map(e => e.id === id ? { ...e, [f]: v } : e) })), []);
  const removeEducation = useCallback((id) => setData(d => ({ ...d, education: d.education.filter(e => e.id !== id) })), []);

  // ── Projects ──────────────────────────────────────────────────────────────
  const addProject    = useCallback(() => setData(d => ({ ...d, projects: [...d.projects, { id: uid("p"), name: "", tech: "", role: "", url: "", start: "", end: "", current: false, description: "" }] })), []);
  const updateProject = useCallback((id, f, v) => setData(d => ({ ...d, projects: d.projects.map(p => p.id === id ? { ...p, [f]: v } : p) })), []);
  const removeProject = useCallback((id) => setData(d => ({ ...d, projects: d.projects.filter(p => p.id !== id) })), []);

  // ── Certifications ────────────────────────────────────────────────────────
  const addCert    = useCallback(() => setData(d => ({ ...d, certs: [...d.certs, { id: uid("c"), name: "", issuer: "", date: "", expiry: "", credentialId: "", url: "" }] })), []);
  const updateCert = useCallback((id, f, v) => setData(d => ({ ...d, certs: d.certs.map(c => c.id === id ? { ...c, [f]: v } : c) })), []);
  const removeCert = useCallback((id) => setData(d => ({ ...d, certs: d.certs.filter(c => c.id !== id) })), []);

  // ── Languages ─────────────────────────────────────────────────────────────
  const addLanguage    = useCallback(() => setData(d => ({ ...d, languages: [...d.languages, { id: uid("l"), language: "", proficiency: "Professional" }] })), []);
  const updateLanguage = useCallback((id, f, v) => setData(d => ({ ...d, languages: d.languages.map(l => l.id === id ? { ...l, [f]: v } : l) })), []);
  const removeLanguage = useCallback((id) => setData(d => ({ ...d, languages: d.languages.filter(l => l.id !== id) })), []);

  // ── Awards ────────────────────────────────────────────────────────────────
  const addAward    = useCallback(() => setData(d => ({ ...d, awards: [...d.awards, { id: uid("a"), title: "", issuer: "", date: "", description: "" }] })), []);
  const updateAward = useCallback((id, f, v) => setData(d => ({ ...d, awards: d.awards.map(a => a.id === id ? { ...a, [f]: v } : a) })), []);
  const removeAward = useCallback((id) => setData(d => ({ ...d, awards: d.awards.filter(a => a.id !== id) })), []);

  // ── Volunteer ─────────────────────────────────────────────────────────────
  const addVolunteer    = useCallback(() => setData(d => ({ ...d, volunteer: [...d.volunteer, { id: uid("v"), org: "", role: "", start: "", end: "", current: false, description: "" }] })), []);
  const updateVolunteer = useCallback((id, f, v) => setData(d => ({ ...d, volunteer: d.volunteer.map(v2 => v2.id === id ? { ...v2, [f]: v } : v2) })), []);
  const removeVolunteer = useCallback((id) => setData(d => ({ ...d, volunteer: d.volunteer.filter(v2 => v2.id !== id) })), []);

  // ── Publications ──────────────────────────────────────────────────────────
  const addPublication    = useCallback(() => setData(d => ({ ...d, publications: [...d.publications, { id: uid("pub"), title: "", publisher: "", date: "", url: "", description: "" }] })), []);
  const updatePublication = useCallback((id, f, v) => setData(d => ({ ...d, publications: d.publications.map(p => p.id === id ? { ...p, [f]: v } : p) })), []);
  const removePublication = useCallback((id) => setData(d => ({ ...d, publications: d.publications.filter(p => p.id !== id) })), []);

  // ── References ────────────────────────────────────────────────────────────
  const addReference    = useCallback(() => setData(d => ({ ...d, references: [...d.references, { id: uid("r"), name: "", title: "", email: "", phone: "", relationship: "" }] })), []);
  const updateReference = useCallback((id, f, v) => setData(d => ({ ...d, references: d.references.map(r => r.id === id ? { ...r, [f]: v } : r) })), []);
  const removeReference = useCallback((id) => setData(d => ({ ...d, references: d.references.filter(r => r.id !== id) })), []);

  // ── Reset ─────────────────────────────────────────────────────────────────
  const resetData = useCallback(() => {
    if (window.confirm("Reset all resume data to defaults?")) setData(DEFAULT_DATA);
  }, []);

  return {
    data,
    updatePersonal,
    addSkill, updateSkill, removeSkill,
    addExperience, updateExperience, removeExperience,
    addEducation, updateEducation, removeEducation,
    addProject, updateProject, removeProject,
    addCert, updateCert, removeCert,
    addLanguage, updateLanguage, removeLanguage,
    addAward, updateAward, removeAward,
    addVolunteer, updateVolunteer, removeVolunteer,
    addPublication, updatePublication, removePublication,
    addReference, updateReference, removeReference,
    resetData
  };
}
