import React from "react";

export default function ExperienceSection({ items, add, update, remove }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">Work Experience</p>
        <button onClick={add} className="btn-primary text-xs">+ Add</button>
      </div>

      {items.map((exp, i) => (
        <div key={exp.id} className="entry-card space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-stone-400 dark:text-slate-500">#{i + 1}</span>
            <button onClick={() => remove(exp.id)} className="btn-danger">✕ Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="field-label">Company *</label>
              <input value={exp.company} onChange={e => update(exp.id, "company", e.target.value)} placeholder="Google" className="input-field" />
            </div>
            <div>
              <label className="field-label">Role *</label>
              <input value={exp.role} onChange={e => update(exp.id, "role", e.target.value)} placeholder="Product Manager" className="input-field" />
            </div>
            <div>
              <label className="field-label">Start</label>
              <input type="month" value={exp.start} onChange={e => update(exp.id, "start", e.target.value)} className="input-field" />
            </div>
            <div>
              <label className="field-label">End</label>
              <input type="month" value={exp.end} disabled={exp.current} onChange={e => update(exp.id, "end", e.target.value)} className="input-field disabled:opacity-40" />
            </div>
          </div>
          <div>
            <label className="field-label">Location</label>
            <input value={exp.location || ""} onChange={e => update(exp.id, "location", e.target.value)} placeholder="San Francisco, CA (Remote)" className="input-field" />
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={exp.current} onChange={e => update(exp.id, "current", e.target.checked)} className="accent-stone-700 dark:accent-stone-300 w-3.5 h-3.5" />
            <span className="text-xs text-stone-500 dark:text-slate-400">Currently working here</span>
          </label>
          <div>
            <label className="field-label">Key Responsibilities & Achievements</label>
            <textarea value={exp.description} onChange={e => update(exp.id, "description", e.target.value)} placeholder="Use action verbs + metrics (e.g. 'Led redesign that increased conversion by 40%')" rows={4} className="input-field resize-none" />
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-sm text-stone-400 dark:text-slate-500 text-center py-8 section-card">
          No experience added yet
        </p>
      )}
    </div>
  );
}
