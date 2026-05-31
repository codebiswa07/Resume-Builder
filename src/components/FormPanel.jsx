import React, { useState } from "react";
import PersonalSection     from "./form/PersonalSection";
import SkillsSection       from "./form/SkillsSection";
import ExperienceSection   from "./form/ExperienceSection";
import EducationSection    from "./form/EducationSection";
import ProjectsSection     from "./form/ProjectsSection";
import CertsSection        from "./form/CertsSection";
import LanguagesSection    from "./form/LanguagesSection";
import AwardsSection       from "./form/AwardsSection";
import VolunteerSection    from "./form/VolunteerSection";
import PublicationsSection from "./form/PublicationsSection";
import ReferencesSection   from "./form/ReferencesSection";

const TABS = [
  { id: "personal",      label: "Info",        icon: "👤" },
  { id: "skills",        label: "Skills",      icon: "⚡" },
  { id: "experience",    label: "Experience",  icon: "💼" },
  { id: "education",     label: "Education",   icon: "🎓" },
  { id: "projects",      label: "Projects",    icon: "🚀" },
  { id: "certs",         label: "Certs",       icon: "🏆" },
  { id: "languages",     label: "Languages",   icon: "🌍" },
  { id: "awards",        label: "Awards",      icon: "⭐" },
  { id: "volunteer",     label: "Volunteer",   icon: "❤️" },
  { id: "publications",  label: "Pubs",        icon: "📝" },
  { id: "references",    label: "Refs",        icon: "👥" }
];

export default function FormPanel({ store }) {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div id="builder-sidebar" className="flex flex-col h-full">
      {/* Tab bar */}
      <div className="flex overflow-x-auto border-b border-stone-200 dark:border-slate-700
        bg-white dark:bg-slate-900 px-2 pt-1 gap-0.5 shrink-0 scrollbar-none">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1 px-2.5 py-2 text-xs font-medium rounded-t-lg
              transition-colors whitespace-nowrap border-b-2
              ${activeTab === tab.id
                ? "bg-stone-100 dark:bg-slate-800 text-stone-800 dark:text-stone-200 border-stone-800 dark:border-stone-300"
                : "text-stone-500 dark:text-slate-400 border-transparent hover:text-stone-700 dark:hover:text-slate-300"
              }`}
          >
            <span>{tab.icon}</span>
            <span className="hidden md:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50 dark:bg-slate-900">
        {activeTab === "personal"     && <PersonalSection     data={store.data.personal}      update={store.updatePersonal} />}
        {activeTab === "skills"       && <SkillsSection       skills={store.data.skills}       add={store.addSkill}        update={store.updateSkill}        remove={store.removeSkill} />}
        {activeTab === "experience"   && <ExperienceSection   items={store.data.experience}    add={store.addExperience}   update={store.updateExperience}   remove={store.removeExperience} />}
        {activeTab === "education"    && <EducationSection    items={store.data.education}     add={store.addEducation}    update={store.updateEducation}    remove={store.removeEducation} />}
        {activeTab === "projects"     && <ProjectsSection     items={store.data.projects}      add={store.addProject}      update={store.updateProject}      remove={store.removeProject} />}
        {activeTab === "certs"        && <CertsSection        items={store.data.certs}         add={store.addCert}         update={store.updateCert}         remove={store.removeCert} />}
        {activeTab === "languages"    && <LanguagesSection    items={store.data.languages}     add={store.addLanguage}     update={store.updateLanguage}     remove={store.removeLanguage} />}
        {activeTab === "awards"       && <AwardsSection       items={store.data.awards}        add={store.addAward}        update={store.updateAward}        remove={store.removeAward} />}
        {activeTab === "volunteer"    && <VolunteerSection    items={store.data.volunteer}     add={store.addVolunteer}    update={store.updateVolunteer}    remove={store.removeVolunteer} />}
        {activeTab === "publications" && <PublicationsSection items={store.data.publications}  add={store.addPublication}  update={store.updatePublication}  remove={store.removePublication} />}
        {activeTab === "references"   && <ReferencesSection   items={store.data.references}    add={store.addReference}    update={store.updateReference}    remove={store.removeReference} />}
      </div>
    </div>
  );
}
