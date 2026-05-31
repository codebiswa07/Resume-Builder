import React from "react";
import { downloadPDF } from "../utils/pdfExport";
import { validateResume } from "../utils/validation";

const TEMPLATES = [
  { id: "executive", label: "Executive" },
  { id: "modern",    label: "Modern"    },
  { id: "ats",       label: "ATS Clean" }
];

export default function Toolbar({ data, template, setTemplate, darkMode, setDarkMode, onReset }) {
  const handleDownload = () => {
    const errors = validateResume(data);
    if (Object.keys(errors).length > 0) {
      alert("Please fix the following before downloading:\n\n" + Object.values(errors).join("\n"));
      return;
    }
    downloadPDF("resume-preview-inner", `${data.personal.name || "resume"}.pdf`);
  };

  return (
    <header
      id="toolbar"
      className="fixed top-0 left-0 right-0 z-50 h-14 bg-white/95 dark:bg-slate-900/95 backdrop-blur
        border-b border-stone-200 dark:border-slate-700 px-4 flex items-center justify-between gap-4"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-lg">📄</span>
        <span className="font-display font-bold text-stone-800 dark:text-stone-100 text-base hidden sm:block tracking-tight">
          Resume<span className="font-normal opacity-50">Build</span>
        </span>
      </div>

      <div className="flex items-center gap-2 flex-wrap justify-end">
        {/* Template switcher */}
        <div className="flex rounded-lg overflow-hidden border border-stone-200 dark:border-slate-600 text-xs shrink-0">
          {TEMPLATES.map(t => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`px-3 py-1.5 font-medium transition-colors
                ${template === t.id
                  ? "bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900"
                  : "bg-white dark:bg-slate-800 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-slate-700"
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Dark mode */}
        <button
          onClick={() => setDarkMode(d => !d)}
          title="Toggle dark mode"
          className="w-8 h-8 flex items-center justify-center rounded-lg
            hover:bg-stone-100 dark:hover:bg-slate-700 transition-colors text-base"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Reset */}
        <button
          onClick={onReset}
          className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-medium
            text-stone-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
        >
          ↺ Reset
        </button>

        {/* Download */}
        <button onClick={handleDownload} className="btn-primary flex items-center gap-1.5 text-xs">
          ⬇ Download PDF
        </button>
      </div>
    </header>
  );
}
