import React from "react";

export default function EducationSection({ items, add, update, remove }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">Education</p>
        <button onClick={add} className="btn-primary text-xs">+ Add</button>
      </div>

      {items.map((ed, i) => (
        <div key={ed.id} className="entry-card space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-stone-400 dark:text-slate-500">#{i + 1}</span>
            <button onClick={() => remove(ed.id)} className="btn-danger">✕ Remove</button>
          </div>
          <div>
            <label className="field-label">School / University *</label>
            <input value={ed.school} onChange={e => update(ed.id, "school", e.target.value)} placeholder="MIT" className="input-field" />
          </div>
          <div>
            <label className="field-label">Degree / Field *</label>
            <input value={ed.degree} onChange={e => update(ed.id, "degree", e.target.value)} placeholder="B.S. Computer Science" className="input-field" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="field-label">From</label>
              <input value={ed.start} onChange={e => update(ed.id, "start", e.target.value)} placeholder="2018" className="input-field" />
            </div>
            <div>
              <label className="field-label">To</label>
              <input value={ed.end} onChange={e => update(ed.id, "end", e.target.value)} placeholder="2022" className="input-field" />
            </div>
            <div>
              <label className="field-label">GPA/Percentage</label>
              <input value={ed.gpa} onChange={e => update(ed.id, "gpa", e.target.value)} placeholder="3.9" className="input-field" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="field-label">Honors / Awards</label>
              <input value={ed.honors || ""} onChange={e => update(ed.id, "honors", e.target.value)} placeholder="Magna Cum Laude" className="input-field" />
            </div>
            <div>
              <label className="field-label">Location</label>
              <input value={ed.location || ""} onChange={e => update(ed.id, "location", e.target.value)} placeholder="Cambridge, MA" className="input-field" />
            </div>
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-sm text-stone-400 dark:text-slate-500 text-center py-8 section-card">
          No education added yet
        </p>
      )}
    </div>
  );
}
