import React from "react";

const LEVELS = ["Native", "Fluent", "Professional", "Conversational", "Elementary"];

export default function LanguagesSection({ items, add, update, remove }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">Languages</p>
        <button onClick={add} className="btn-primary text-xs">+ Add</button>
      </div>

      {items.map((lang, i) => (
        <div key={lang.id} className="entry-card">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-mono text-stone-400 dark:text-slate-500">#{i + 1}</span>
            <button onClick={() => remove(lang.id)} className="btn-danger">✕ Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="field-label">Language</label>
              <input value={lang.language} onChange={e => update(lang.id, "language", e.target.value)} placeholder="Spanish" className="input-field" />
            </div>
            <div>
              <label className="field-label">Proficiency</label>
              <select value={lang.proficiency} onChange={e => update(lang.id, "proficiency", e.target.value)} className="input-field">
                {LEVELS.map(l => <option key={l}>{l}</option>)}
              </select>
            </div>
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-sm text-stone-400 dark:text-slate-500 text-center py-8 section-card">
          No languages added yet
        </p>
      )}
    </div>
  );
}
