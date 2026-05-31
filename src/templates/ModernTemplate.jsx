import React from "react";
import { formatDate, hasItems } from "./_shared";

const ACCENT = "#1d4ed8";

const SH = ({ children }) => (
  <div style={{ fontSize:"9pt", fontWeight:700, textTransform:"uppercase",
    letterSpacing:".12em", color:ACCENT, marginBottom:10,
    display:"flex", alignItems:"center", gap:6 }}>
    <span style={{ display:"inline-block", width:18, height:2, background:ACCENT }} />
    {children}
  </div>
);

export default function ModernTemplate({ data }) {
  const { personal: p, skills, experience, education, projects,
          certs, languages, awards, volunteer, publications, references } = data;

  return (
    <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"10pt", color:"#1e293b",
      background:"#fff", width:"100%", boxSizing:"border-box" }}>

      {/* Header */}
      <div style={{ padding:"32px 44px 20px", borderBottom:`3px solid ${ACCENT}`,
        display:"flex", gap:18, alignItems:"flex-start" }}>
        {p.photo && <img src={p.photo} alt="" style={{ width:76, height:76, borderRadius:8,
          objectFit:"cover", border:`2px solid ${ACCENT}`, flexShrink:0 }} />}
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:"'Crimson Pro',serif", fontSize:"26pt", fontWeight:700,
            letterSpacing:"-0.03em", color:"#0f172a", lineHeight:1.1 }}>
            {p.name || "Your Name"}
          </div>
          <div style={{ color:ACCENT, fontSize:"11pt", fontWeight:600, margin:"3px 0 10px" }}>{p.title}</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:14, fontSize:"8pt", color:"#64748b" }}>
            {p.email    && <span>✉ {p.email}</span>}
            {p.phone    && <span>📞 {p.phone}</span>}
            {p.location && <span>📍 {p.location}</span>}
            {p.website  && <span>🔗 {p.website}</span>}
            {p.linkedin && <span>in {p.linkedin}</span>}
            {p.github   && <span>⌥ {p.github}</span>}
          </div>
        </div>
      </div>

      <div style={{ padding:"22px 44px" }}>
        {p.summary && (
          <div style={{ background:"#eff6ff", borderLeft:`3px solid ${ACCENT}`,
            borderRadius:"0 6px 6px 0", padding:"10px 14px", marginBottom:22,
            fontSize:"9pt", color:"#334155", lineHeight:1.7 }}>
            {p.summary}
          </div>
        )}

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:28 }}>
          {/* LEFT */}
          <div>
            {hasItems(experience) && <div style={{ marginBottom:20 }}>
              <SH>Experience</SH>
              {experience.map(e => (
                <div key={e.id} style={{ marginBottom:14 }}>
                  <div style={{ fontWeight:700, fontSize:"10.5pt" }}>{e.role}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:"8.5pt",
                    color:"#64748b", margin:"2px 0 5px" }}>
                    <span>{e.company}{e.location ? ` · ${e.location}` : ""}</span>
                    <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"8pt" }}>
                      {formatDate(e.start)}{e.start ? " → " : ""}{e.current ? "Now" : formatDate(e.end)}
                    </span>
                  </div>
                  {e.description && <div style={{ fontSize:"8.5pt", color:"#475569", lineHeight:1.6,
                    paddingLeft:8, borderLeft:"1px solid #e2e8f0" }}>{e.description}</div>}
                </div>
              ))}
            </div>}

            {hasItems(projects) && <div style={{ marginBottom:20 }}>
              <SH>Projects</SH>
              {projects.map(pr => (
                <div key={pr.id} style={{ border:"1px solid #e2e8f0", borderRadius:7,
                  padding:"10px 12px", marginBottom:10 }}>
                  <div style={{ fontWeight:600, fontSize:"10pt", color:ACCENT }}>
                    {pr.name}{pr.url ? " 🔗" : ""}
                  </div>
                  {pr.role && <div style={{ fontSize:"8pt", color:"#64748b", marginBottom:2 }}>{pr.role}</div>}
                  {pr.tech && <div style={{ fontSize:"8pt", color:"#64748b", fontStyle:"italic", marginBottom:4 }}>{pr.tech}</div>}
                  {pr.description && <div style={{ fontSize:"8.5pt", color:"#475569", lineHeight:1.6 }}>{pr.description}</div>}
                </div>
              ))}
            </div>}

            {hasItems(volunteer) && <div style={{ marginBottom:20 }}>
              <SH>Volunteer</SH>
              {volunteer.map(v => (
                <div key={v.id} style={{ marginBottom:10 }}>
                  <div style={{ fontWeight:600, fontSize:"9.5pt" }}>{v.role}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:"8.5pt", color:"#64748b" }}>
                    <span>{v.org}</span>
                    <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"8pt" }}>
                      {formatDate(v.start)}{v.current ? " → Now" : (v.end ? ` → ${formatDate(v.end)}` : "")}
                    </span>
                  </div>
                  {v.description && <div style={{ fontSize:"8.5pt", color:"#475569", lineHeight:1.6,
                    paddingLeft:8, borderLeft:"1px solid #e2e8f0", marginTop:3 }}>{v.description}</div>}
                </div>
              ))}
            </div>}

            {hasItems(publications) && <div style={{ marginBottom:20 }}>
              <SH>Publications</SH>
              {publications.map(pub => (
                <div key={pub.id} style={{ marginBottom:10 }}>
                  <div style={{ fontWeight:600, fontSize:"9.5pt" }}>{pub.title}</div>
                  <div style={{ fontSize:"8pt", color:"#64748b" }}>
                    {pub.publisher}{pub.date ? ` · ${formatDate(pub.date)}` : ""}
                  </div>
                  {pub.description && <div style={{ fontSize:"8.5pt", color:"#475569", lineHeight:1.6, marginTop:2 }}>{pub.description}</div>}
                </div>
              ))}
            </div>}
          </div>

          {/* RIGHT */}
          <div>
            {hasItems(skills) && <div style={{ marginBottom:18 }}>
              <SH>Skills</SH>
              {skills.map(s => (
                <div key={s.id} style={{ marginBottom:10 }}>
                  <div style={{ fontSize:"8.5pt", fontWeight:600, color:"#0f172a", marginBottom:4 }}>{s.category}</div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
                    {(s.items || "").split(",").map(i => i.trim()).filter(Boolean).map((item, idx) => (
                      <span key={idx} style={{ padding:"3px 10px", background:"#eff6ff",
                        color:ACCENT, border:"1px solid #bfdbfe", borderRadius:999,
                        fontSize:"8pt", fontWeight:500 }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>}

            {hasItems(education) && <div style={{ marginBottom:16 }}>
              <SH>Education</SH>
              {education.map(ed => (
                <div key={ed.id} style={{ border:"1px solid #e2e8f0", borderRadius:7,
                  padding:"10px 12px", marginBottom:10 }}>
                  <div style={{ fontWeight:600, fontSize:"10pt" }}>{ed.degree}</div>
                  <div style={{ color:"#64748b", fontSize:"9pt", margin:"2px 0" }}>{ed.school}</div>
                  {ed.honors && <div style={{ fontSize:"8pt", color:"#64748b", fontStyle:"italic" }}>{ed.honors}</div>}
                  <div style={{ fontSize:"8pt", color:"#94a3b8", fontFamily:"'IBM Plex Mono',monospace" }}>
                    {ed.start}{ed.end ? ` – ${ed.end}` : ""}{ed.gpa ? ` · GPA/Percentage: ${ed.gpa}` : ""}
                  </div>
                </div>
              ))}
            </div>}

            {hasItems(certs) && <div style={{ marginBottom:16 }}>
              <SH>Certifications</SH>
              {certs.map(c => (
                <div key={c.id} style={{ marginBottom:8, fontSize:"8.5pt" }}>
                  <div style={{ fontWeight:600, color:"#0f172a" }}>{c.name}</div>
                  <div style={{ color:"#64748b", fontSize:"8pt" }}>
                    {c.issuer}{c.date ? ` · ${formatDate(c.date)}` : ""}
                    {c.expiry ? ` – ${formatDate(c.expiry)}` : ""}
                  </div>
                  {c.credentialId && <div style={{ fontSize:"7.5pt", color:"#94a3b8",
                    fontFamily:"'IBM Plex Mono',monospace" }}>ID: {c.credentialId}</div>}
                </div>
              ))}
            </div>}

            {hasItems(languages) && <div style={{ marginBottom:16 }}>
              <SH>Languages</SH>
              {languages.map(l => (
                <div key={l.id} style={{ display:"flex", justifyContent:"space-between",
                  fontSize:"8.5pt", marginBottom:4 }}>
                  <span style={{ fontWeight:500 }}>{l.language}</span>
                  <span style={{ color:"#64748b" }}>{l.proficiency}</span>
                </div>
              ))}
            </div>}

            {hasItems(awards) && <div style={{ marginBottom:16 }}>
              <SH>Awards</SH>
              {awards.map(a => (
                <div key={a.id} style={{ marginBottom:6, fontSize:"8.5pt" }}>
                  <div style={{ fontWeight:600, color:"#0f172a" }}>{a.title}{a.date ? ` (${a.date})` : ""}</div>
                  {a.issuer && <div style={{ color:"#64748b", fontSize:"8pt" }}>{a.issuer}</div>}
                </div>
              ))}
            </div>}

            {hasItems(references) && <div>
              <SH>References</SH>
              {references.map(r => (
                <div key={r.id} style={{ marginBottom:10, fontSize:"8.5pt" }}>
                  <div style={{ fontWeight:600, color:"#0f172a" }}>{r.name}</div>
                  <div style={{ color:"#64748b" }}>{r.title}</div>
                  {r.email && <div style={{ color:"#64748b", fontSize:"8pt" }}>{r.email}</div>}
                </div>
              ))}
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
