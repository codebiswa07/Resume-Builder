import React from "react";

export default function VolunteerSection({ items, add, update, remove }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">Volunteer Experience</p>
        <button onClick={add} className="btn-primary text-xs">+ Add</button>
      </div>

      {items.map((vol, i) => (
        <div key={vol.id} className="entry-card space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-stone-400 dark:text-slate-500">#{i + 1}</span>
            <button onClick={() => remove(vol.id)} className="btn-danger">✕ Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="field-label">Organization</label>
              <input value={vol.org} onChange={e => update(vol.id, "org", e.target.value)} placeholder="Red Cross" className="input-field" />
            </div>
            <div>
              <label className="field-label">Role</label>
              <input value={vol.role} onChange={e => update(vol.id, "role", e.target.value)} placeholder="Mentor" className="input-field" />
            </div>
            <div>
              <label className="field-label">Start</label>
              <input type="month" value={vol.start} onChange={e => update(vol.id, "start", e.target.value)} className="input-field" />
            </div>
            <div>
              <label className="field-label">End</label>
              <input type="month" value={vol.end} disabled={vol.current} onChange={e => update(vol.id, "end", e.target.value)} className="input-field disabled:opacity-40" />
            </div>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={vol.current || false} onChange={e => update(vol.id, "current", e.target.checked)} className="accent-stone-700 dark:accent-stone-300 w-3.5 h-3.5" />
            <span className="text-xs text-stone-500 dark:text-slate-400">Currently active</span>
          </label>
          <div>
            <label className="field-label">Description</label>
            <textarea value={vol.description} onChange={e => update(vol.id, "description", e.target.value)} placeholder="Responsibilities and impact..." rows={2} className="input-field resize-none" />
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-sm text-stone-400 dark:text-slate-500 text-center py-8 section-card">
          No volunteer experience added yet
        </p>
      )}
    </div>
  );
}
