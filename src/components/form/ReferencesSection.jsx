import React from "react";

export default function ReferencesSection({ items, add, update, remove }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">References</p>
        <button onClick={add} className="btn-primary text-xs">+ Add</button>
      </div>

      <div className="section-card">
        <p className="text-xs text-stone-500 dark:text-slate-400">
          💡 <strong>Tip:</strong> Many employers prefer "Available upon request." Only include
          references if specifically requested. Ensure you have their permission first.
        </p>
      </div>

      {items.map((ref, i) => (
        <div key={ref.id} className="entry-card space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-stone-400 dark:text-slate-500">#{i + 1}</span>
            <button onClick={() => remove(ref.id)} className="btn-danger">✕ Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="field-label">Full Name</label>
              <input value={ref.name} onChange={e => update(ref.id, "name", e.target.value)} placeholder="Jane Doe" className="input-field" />
            </div>
            <div>
              <label className="field-label">Title & Company</label>
              <input value={ref.title} onChange={e => update(ref.id, "title", e.target.value)} placeholder="CTO at Acme Inc." className="input-field" />
            </div>
            <div>
              <label className="field-label">Email</label>
              <input type="email" value={ref.email} onChange={e => update(ref.id, "email", e.target.value)} placeholder="jane@acme.com" className="input-field" />
            </div>
            <div>
              <label className="field-label">Phone</label>
              <input type="tel" value={ref.phone} onChange={e => update(ref.id, "phone", e.target.value)} placeholder="+1 555 000 0000" className="input-field" />
            </div>
          </div>
          <div>
            <label className="field-label">Relationship</label>
            <input value={ref.relationship || ""} onChange={e => update(ref.id, "relationship", e.target.value)} placeholder="Direct Manager" className="input-field" />
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-sm text-stone-400 dark:text-slate-500 text-center py-8 section-card">
          No references added yet
        </p>
      )}
    </div>
  );
}
