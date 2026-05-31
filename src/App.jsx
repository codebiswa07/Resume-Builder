import React, { useState, useEffect } from "react";
import Toolbar       from "./components/Toolbar";
import FormPanel     from "./components/FormPanel";
import PreviewPanel  from "./components/PreviewPanel";
import useResumeStore from "./hooks/useResumeStore";

export default function App() {
  const [template,   setTemplate]   = useState("executive");
  const [darkMode,   setDarkMode]   = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [activeView, setActiveView] = useState("form"); // mobile: "form" | "preview"
  const store = useResumeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-slate-900">
      <Toolbar
        data={store.data}
        template={template}
        setTemplate={setTemplate}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onReset={store.resetData}
      />

      {/* Mobile bottom tab bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900
        border-t border-stone-200 dark:border-slate-700 flex">
        <button
          onClick={() => setActiveView("form")}
          className={`flex-1 py-3 text-xs font-semibold flex flex-col items-center gap-0.5 transition-colors
            ${activeView === "form"
              ? "text-stone-800 dark:text-stone-200"
              : "text-stone-400 dark:text-slate-500"}`}
        >
          <span className="text-base">✏️</span> Edit
        </button>
        <button
          onClick={() => setActiveView("preview")}
          className={`flex-1 py-3 text-xs font-semibold flex flex-col items-center gap-0.5 transition-colors
            ${activeView === "preview"
              ? "text-stone-800 dark:text-stone-200"
              : "text-stone-400 dark:text-slate-500"}`}
        >
          <span className="text-base">👁</span> Preview
        </button>
      </div>

      {/* Main layout */}
      <main
        className="flex-1 mt-14 mb-14 md:mb-0 flex overflow-hidden"
        style={{ height: "calc(100vh - 56px)" }}
      >
        {/* Form Panel */}
        <div
          className={`${activeView === "form" ? "flex" : "hidden"} md:flex flex-col
            w-full md:w-[360px] lg:w-[420px] shrink-0
            border-r border-stone-200 dark:border-slate-700 overflow-hidden`}
        >
          <FormPanel store={store} />
        </div>

        {/* Preview Panel */}
        <div className={`${activeView === "preview" ? "flex" : "hidden"} md:flex flex-col flex-1 overflow-hidden`}>
          <PreviewPanel data={store.data} template={template} />
        </div>
      </main>
    </div>
  );
}
