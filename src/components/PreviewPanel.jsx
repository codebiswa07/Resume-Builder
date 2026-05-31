import React from "react";
import ExecutiveTemplate from "../templates/ExecutiveTemplate";
import ModernTemplate    from "../templates/ModernTemplate";
import ATSTemplate       from "../templates/ATSTemplate";

export default function PreviewPanel({ data, template }) {
  return (
    <div className="flex flex-col h-full bg-stone-200 dark:bg-slate-950 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-stone-100 dark:bg-slate-900 border-b border-stone-200 dark:border-slate-700 shrink-0">
        <span className="text-xs font-medium text-stone-500 dark:text-slate-400 uppercase tracking-widest">
          Live Preview
        </span>
        <span className="tag capitalize">{template}</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div id="resume-preview" className="mx-auto shadow-2xl" style={{ width: "100%", maxWidth: "794px", background: "white" }}>
          <div id="resume-preview-inner">
            {template === "executive" && <ExecutiveTemplate data={data} />}
            {template === "modern"    && <ModernTemplate    data={data} />}
            {template === "ats"       && <ATSTemplate       data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
}
