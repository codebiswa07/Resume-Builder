import React from "react";

export default function CertsSection({ items, add, update, remove }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">Certifications & Licenses</p>
        <button onClick={add} className="btn-primary text-xs">+ Add</button>
      </div>

      {items.map((ct, i) => (
        <div key={ct.id} className="entry-card space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-stone-400 dark:text-slate-500">#{i + 1}</span>
            <button onClick={() => remove(ct.id)} className="btn-danger">✕ Remove</button>
          </div>
          <div>
            <label className="field-label">Certification Name *</label>
            <input value={ct.name} onChange={e => update(ct.id, "name", e.target.value)} placeholder="AWS Solutions Architect – Associate" className="input-field" />
          </div>
          <div>
            <label className="field-label">Issuing Organization</label>
            <input value={ct.issuer} onChange={e => update(ct.id, "issuer", e.target.value)} placeholder="Amazon Web Services" className="input-field" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="field-label">Issue Date</label>
              <input type="month" value={ct.date} onChange={e => update(ct.id, "date", e.target.value)} className="input-field" />
            </div>
            <div>
              <label className="field-label">Expiry (optional)</label>
              <input type="month" value={ct.expiry || ""} onChange={e => update(ct.id, "expiry", e.target.value)} className="input-field" />
            </div>
          </div>
          <div>
            <label className="field-label">Credential ID</label>
            <input value={ct.credentialId || ""} onChange={e => update(ct.id, "credentialId", e.target.value)} placeholder="CERT-12345" className="input-field" />
          </div>
          <div>
            <label className="field-label">Verification URL (optional)</label>
            <input type="url" value={ct.url || ""} onChange={e => update(ct.id, "url", e.target.value)} placeholder="https://verify.credly.com/..." className="input-field" />
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-sm text-stone-400 dark:text-slate-500 text-center py-8 section-card">
          No certifications added yet
        </p>
      )}
    </div>
  );
}
