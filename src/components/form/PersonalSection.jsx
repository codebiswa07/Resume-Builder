import React, { useRef } from "react";

const FIELDS = [
  { key: "name",     label: "Full Name",             placeholder: "Alexandra Chen",         type: "text",  required: true },
  { key: "title",    label: "Professional Title",     placeholder: "Senior Product Designer",type: "text"  },
  { key: "email",    label: "Email",                  placeholder: "alex@email.com",         type: "email", required: true },
  { key: "phone",    label: "Phone",                  placeholder: "+1 (555) 012-3456",      type: "tel",   required: true },
  { key: "location", label: "Location",               placeholder: "San Francisco, CA",      type: "text"  },
  { key: "website",  label: "Website / Portfolio",    placeholder: "alexchen.design",        type: "url"   },
  { key: "linkedin", label: "LinkedIn URL",           placeholder: "linkedin.com/in/username",type: "url"  },
  { key: "github",   label: "GitHub URL",             placeholder: "github.com/username",    type: "url"   }
];

export default function PersonalSection({ data, update }) {
  const fileRef = useRef();

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => update("photo", ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Photo */}
      <div className="section-card">
        <p className="section-label">Profile Photo</p>
        <div className="flex items-center gap-4">
          <div
            onClick={() => fileRef.current.click()}
            className="w-16 h-16 rounded-full bg-stone-100 dark:bg-slate-700 flex items-center
              justify-center overflow-hidden cursor-pointer hover:opacity-80 transition-opacity
              border-2 border-dashed border-stone-300 dark:border-slate-600 shrink-0"
          >
            {data.photo
              ? <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
              : <span className="text-2xl">🙂</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <button onClick={() => fileRef.current.click()} className="btn-secondary text-xs">
              Upload Photo
            </button>
            {data.photo && (
              <button onClick={() => update("photo", "")} className="btn-danger text-xs">
                Remove
              </button>
            )}
            <p className="text-xs text-stone-400 dark:text-slate-500">JPG, PNG · Max 2MB</p>
          </div>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
        </div>
      </div>

      {/* Basic info */}
      <div className="section-card">
        <p className="section-label">Basic Information</p>
        <div className="grid grid-cols-1 gap-3">
          {FIELDS.map(f => (
            <div key={f.key}>
              <label className="field-label">
                {f.label}
                {f.required && <span className="text-red-400 ml-0.5">*</span>}
              </label>
              <input
                type={f.type || "text"}
                value={data[f.key] || ""}
                onChange={e => update(f.key, e.target.value)}
                placeholder={f.placeholder}
                className="input-field"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="section-card">
        <p className="section-label">Professional Summary</p>
        <p className="text-xs text-stone-400 dark:text-slate-500 mb-2">
          3–5 sentences. Include keywords from the job description for ATS optimization.
        </p>
        <textarea
          value={data.summary || ""}
          onChange={e => update("summary", e.target.value)}
          placeholder="Brief professional summary highlighting key achievements and goals..."
          rows={5}
          className="input-field resize-none"
        />
      </div>
    </div>
  );
}
