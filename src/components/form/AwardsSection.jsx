import React from "react";

export default function AwardsSection({ items, add, update, remove }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">Awards & Honors</p>
        <button onClick={add} className="btn-primary text-xs">+ Add</button>
      </div>

      {items.map((aw, i) => (
        <div key={aw.id} className="entry-card space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-stone-400 dark:text-slate-500">#{i + 1}</span>
            <button onClick={() => remove(aw.id)} className="btn-danger">✕ Remove</button>
          </div>
          <div>
            <label className="field-label">Award Title</label>
            <input value={aw.title} onChange={e => update(aw.id, "title", e.target.value)} placeholder="Best Innovation Award" className="input-field" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="field-label">Issuing Body</label>
              <input value={aw.issuer} onChange={e => update(aw.id, "issuer", e.target.value)} placeholder="IEEE" className="input-field" />
            </div>
            <div>
              <label className="field-label">Year</label>
              <input value={aw.date} onChange={e => update(aw.id, "date", e.target.value)} placeholder="2023" className="input-field" />
            </div>
          </div>
          <div>
            <label className="field-label">Description (optional)</label>
            <textarea value={aw.description} onChange={e => update(aw.id, "description", e.target.value)} placeholder="Brief context about this award..." rows={2} className="input-field resize-none" />
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-sm text-stone-400 dark:text-slate-500 text-center py-8 section-card">
          No awards added yet
        </p>
      )}
    </div>
  );
}
