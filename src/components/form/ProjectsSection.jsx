import React from "react";

export default function ProjectsSection({ items, add, update, remove }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">Projects</p>
        <button onClick={add} className="btn-primary text-xs">+ Add</button>
      </div>

      {items.map((pr, i) => (
        <div key={pr.id} className="entry-card space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-stone-400 dark:text-slate-500">#{i + 1}</span>
            <button onClick={() => remove(pr.id)} className="btn-danger">✕ Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="field-label">Project Name *</label>
              <input value={pr.name} onChange={e => update(pr.id, "name", e.target.value)} placeholder="MyApp" className="input-field" />
            </div>
            <div>
              <label className="field-label">Your Role</label>
              <input value={pr.role || ""} onChange={e => update(pr.id, "role", e.target.value)} placeholder="Lead Developer" className="input-field" />
            </div>
          </div>
          <div>
            <label className="field-label">Technologies Used</label>
            <input value={pr.tech} onChange={e => update(pr.id, "tech", e.target.value)} placeholder="React, Node.js, PostgreSQL, Docker" className="input-field" />
          </div>
          <div>
            <label className="field-label">URL / GitHub Link</label>
            <input value={pr.url || ""} onChange={e => update(pr.id, "url", e.target.value)} placeholder="github.com/user/project" className="input-field" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="field-label">Start</label>
              <input type="month" value={pr.start || ""} onChange={e => update(pr.id, "start", e.target.value)} className="input-field" />
            </div>
            <div>
              <label className="field-label">End</label>
              <input type="month" value={pr.end || ""} disabled={pr.current} onChange={e => update(pr.id, "end", e.target.value)} className="input-field disabled:opacity-40" />
            </div>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={pr.current || false} onChange={e => update(pr.id, "current", e.target.checked)} className="accent-stone-700 dark:accent-stone-300 w-3.5 h-3.5" />
            <span className="text-xs text-stone-500 dark:text-slate-400">Ongoing project</span>
          </label>
          <div>
            <label className="field-label">Description & Impact</label>
            <textarea value={pr.description} onChange={e => update(pr.id, "description", e.target.value)} placeholder="What it does, your contributions, and measurable impact..." rows={3} className="input-field resize-none" />
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-sm text-stone-400 dark:text-slate-500 text-center py-8 section-card">
          No projects added yet
        </p>
      )}
    </div>
  );
}
