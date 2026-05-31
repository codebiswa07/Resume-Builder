import React from "react";

export default function SkillsSection({ skills, add, update, remove }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="section-card">
        <div className="flex items-center justify-between mb-2">
          <p className="section-label mb-0">Skill Groups</p>
          <button onClick={add} className="btn-primary text-xs">+ Add Group</button>
        </div>
        <p className="text-xs text-stone-400 dark:text-slate-500 mb-4">
          Group by category (e.g. "Programming Languages", "Cloud Platforms") for ATS parsers.
        </p>
        <div className="space-y-3">
          {skills.map((skill, i) => (
            <div key={skill.id} className="entry-card">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-stone-400 dark:text-slate-500">#{i + 1}</span>
                <button onClick={() => remove(skill.id)} className="btn-danger">✕ Remove</button>
              </div>
              <div>
                <label className="field-label">Category Name</label>
                <input
                  type="text"
                  value={skill.category}
                  onChange={e => update(skill.id, "category", e.target.value)}
                  placeholder="e.g. Programming Languages"
                  className="input-field"
                />
              </div>
              <div>
                <label className="field-label">Skills (comma-separated)</label>
                <input
                  type="text"
                  value={skill.items}
                  onChange={e => update(skill.id, "items", e.target.value)}
                  placeholder="Python, JavaScript, TypeScript, Go"
                  className="input-field"
                />
              </div>
            </div>
          ))}
          {skills.length === 0 && (
            <p className="text-sm text-stone-400 dark:text-slate-500 text-center py-6">
              No skill groups yet — click "+ Add Group" to start
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
