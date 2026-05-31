import React from "react";

export default function PublicationsSection({ items, add, update, remove }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">Publications & Articles</p>
        <button onClick={add} className="btn-primary text-xs">+ Add</button>
      </div>

      {items.map((pub, i) => (
        <div key={pub.id} className="entry-card space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-stone-400 dark:text-slate-500">#{i + 1}</span>
            <button onClick={() => remove(pub.id)} className="btn-danger">✕ Remove</button>
          </div>
          <div>
            <label className="field-label">Title</label>
            <input value={pub.title} onChange={e => update(pub.id, "title", e.target.value)} placeholder="My Research Paper" className="input-field" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="field-label">Publisher / Journal</label>
              <input value={pub.publisher} onChange={e => update(pub.id, "publisher", e.target.value)} placeholder="IEEE Transactions" className="input-field" />
            </div>
            <div>
              <label className="field-label">Date</label>
              <input type="month" value={pub.date} onChange={e => update(pub.id, "date", e.target.value)} className="input-field" />
            </div>
          </div>
          <div>
            <label className="field-label">URL / DOI</label>
            <input type="url" value={pub.url || ""} onChange={e => update(pub.id, "url", e.target.value)} placeholder="https://doi.org/..." className="input-field" />
          </div>
          <div>
            <label className="field-label">Description / Abstract</label>
            <textarea value={pub.description} onChange={e => update(pub.id, "description", e.target.value)} placeholder="Brief summary..." rows={2} className="input-field resize-none" />
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-sm text-stone-400 dark:text-slate-500 text-center py-8 section-card">
          No publications added yet
        </p>
      )}
    </div>
  );
}
