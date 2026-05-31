import React from "react";
import { formatDate, hasItems } from "./_shared";

const SH = ({ children }) => (
  <div style={{ fontFamily:"'Crimson Pro',serif", fontSize:"9.5pt", fontWeight:700,
    textTransform:"uppercase", letterSpacing:".1em", color:"#78716c",
    borderBottom:"1px solid #e8e5df", paddingBottom:"3px", marginBottom:"10px" }}>
    {children}
  </div>
);

export default function ExecutiveTemplate({ data }) {
  const { personal: p, skills, experience, education, projects,
          certs, languages, awards, volunteer, publications, references } = data;

  return (
    <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"10.5pt", lineHeight:1.5,
      color:"#1a1814", background:"#fff", width:"100%", boxSizing:"border-box" }}>

      {/* Header */}
      <div style={{ background:"#1c1917", color:"#fff", padding:"32px 40px 26px",
        display:"flex", gap:"20px", alignItems:"center" }}>
        {p.photo && <img src={p.photo} alt="" style={{ width:72, height:72, borderRadius:"50%",
          objectFit:"cover", border:"2px solid rgba(255,255,255,.25)", flexShrink:0 }} />}
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:"'Crimson Pro',serif", fontSize:"26pt", fontWeight:700,
            letterSpacing:"-0.02em", lineHeight:1.1 }}>{p.name || "Your Name"}</div>
          <div style={{ fontSize:"11pt", color:"#c9b99e", fontStyle:"italic", margin:"4px 0 10px" }}>{p.title}</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", fontSize:"8pt", color:"#a89880" }}>
            {p.email    && <span>✉ {p.email}</span>}
            {p.phone    && <span>📞 {p.phone}</span>}
            {p.location && <span>📍 {p.location}</span>}
            {p.website  && <span>🔗 {p.website}</span>}
            {p.linkedin && <span>in {p.linkedin}</span>}
            {p.github   && <span>⌥ {p.github}</span>}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 2.4fr" }}>
        {/* LEFT */}
        <div style={{ padding:"24px 22px 24px 40px", borderRight:"1px solid #e8e5df" }}>
          {p.summary && <>
            <SH>Profile</SH>
            <p style={{ fontSize:"9pt", color:"#44403c", lineHeight:1.65, marginBottom:20 }}>{p.summary}</p>
          </>}

          {hasItems(skills) && <>
            <SH>Skills</SH>
            {skills.map(s => (
              <div key={s.id} style={{ marginBottom:10 }}>
                <div style={{ fontSize:"8pt", fontWeight:600, color:"#4a4438", marginBottom:3 }}>{s.category}</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:3 }}>
                  {(s.items || "").split(",").map(i => i.trim()).filter(Boolean).map((item, idx) => (
                    <span key={idx} style={{ padding:"2px 8px", background:"#f0ede6",
                      borderRadius:99, fontSize:"8pt", fontWeight:500, color:"#4a4438" }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </>}

          {hasItems(languages) && <>
            <SH>Languages</SH>
            {languages.map(l => (
              <div key={l.id} style={{ display:"flex", justifyContent:"space-between",
                fontSize:"8.5pt", marginBottom:4 }}>
                <span style={{ fontWeight:500 }}>{l.language}</span>
                <span style={{ color:"#a8a29e", fontSize:"8pt" }}>{l.proficiency}</span>
              </div>
            ))}
          </>}

          {hasItems(certs) && <div style={{ marginTop:16 }}>
            <SH>Certifications</SH>
            {certs.map(c => (
              <div key={c.id} style={{ marginBottom:8 }}>
                <div style={{ fontWeight:600, fontSize:"9pt" }}>{c.name}</div>
                <div style={{ fontSize:"8pt", color:"#78716c" }}>
                  {c.issuer}{c.date ? ` · ${formatDate(c.date)}` : ""}
                  {c.expiry ? ` – ${formatDate(c.expiry)}` : ""}
                </div>
                {c.credentialId && <div style={{ fontSize:"7.5pt", color:"#a8a29e",
                  fontFamily:"'IBM Plex Mono',monospace" }}>ID: {c.credentialId}</div>}
              </div>
            ))}
          </div>}

          {hasItems(awards) && <div style={{ marginTop:16 }}>
            <SH>Awards</SH>
            {awards.map(a => (
              <div key={a.id} style={{ fontSize:"8.5pt", color:"#44403c", marginBottom:6, lineHeight:1.5 }}>
                <span style={{ fontWeight:600 }}>{a.title}</span>
                {a.date ? ` (${a.date})` : ""}
                {a.issuer && <><br/><span style={{ color:"#78716c", fontSize:"8pt" }}>{a.issuer}</span></>}
              </div>
            ))}
          </div>}

          {hasItems(references) && <div style={{ marginTop:16 }}>
            <SH>References</SH>
            {references.map(r => (
              <div key={r.id} style={{ marginBottom:10 }}>
                <div style={{ fontWeight:600, fontSize:"9.5pt" }}>{r.name}</div>
                <div style={{ fontSize:"8.5pt", color:"#78716c" }}>{r.title}</div>
                {r.email && <div style={{ fontSize:"8pt", color:"#78716c" }}>{r.email}</div>}
              </div>
            ))}
          </div>}
        </div>

        {/* RIGHT */}
        <div style={{ padding:"24px 28px 24px 24px" }}>
          {hasItems(experience) && <>
            <SH>Experience</SH>
            <div style={{ display:"flex", flexDirection:"column", gap:16, marginBottom:22 }}>
              {experience.map(e => (
                <div key={e.id} style={{ paddingLeft:12, borderLeft:"2px solid #e8e5df" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8 }}>
                    <div>
                      <div style={{ fontWeight:600, fontSize:"10.5pt" }}>{e.role}</div>
                      <div style={{ color:"#78716c", fontStyle:"italic", fontSize:"9pt", margin:"1px 0 4px" }}>
                        {e.company}{e.location ? ` · ${e.location}` : ""}
                      </div>
                    </div>
                    <span style={{ fontSize:"7.5pt", color:"#a8a29e", whiteSpace:"nowrap",
                      fontFamily:"'IBM Plex Mono',monospace" }}>
                      {formatDate(e.start)}{e.start ? " – " : ""}{e.current ? "Present" : formatDate(e.end)}
                    </span>
                  </div>
                  {e.description && <p style={{ fontSize:"9pt", color:"#44403c", lineHeight:1.65, margin:0 }}>{e.description}</p>}
                </div>
              ))}
            </div>
          </>}

          {hasItems(projects) && <>
            <SH>Projects</SH>
            <div style={{ marginBottom:22 }}>
              {projects.map(pr => (
                <div key={pr.id} style={{ marginBottom:12 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
                    <div style={{ fontWeight:600, fontSize:"10pt" }}>
                      {pr.name}
                      {pr.role && <span style={{ fontWeight:400, color:"#78716c", fontSize:"8.5pt" }}> · {pr.role}</span>}
                    </div>
                    <span style={{ fontSize:"7.5pt", color:"#a8a29e", fontFamily:"'IBM Plex Mono',monospace" }}>
                      {formatDate(pr.start)}{pr.start ? " – " : ""}{pr.current ? "Present" : formatDate(pr.end)}
                    </span>
                  </div>
                  {pr.tech && <div style={{ fontSize:"8pt", color:"#78716c", fontStyle:"italic", margin:"1px 0 3px" }}>{pr.tech}</div>}
                  {pr.description && <div style={{ fontSize:"8.5pt", color:"#44403c", lineHeight:1.6 }}>{pr.description}</div>}
                  {pr.url && <div style={{ fontSize:"8pt", color:"#78716c" }}>🔗 {pr.url}</div>}
                </div>
              ))}
            </div>
          </>}

          {hasItems(education) && <>
            <SH>Education</SH>
            <div style={{ marginBottom:22 }}>
              {education.map(ed => (
                <div key={ed.id} style={{ paddingLeft:12, borderLeft:"2px solid #e8e5df", marginBottom:12 }}>
                  <div style={{ display:"flex", justifyContent:"space-between" }}>
                    <div>
                      <div style={{ fontWeight:600, fontSize:"10.5pt" }}>{ed.degree}</div>
                      <div style={{ color:"#78716c", fontStyle:"italic", fontSize:"9pt" }}>{ed.school}</div>
                      {ed.honors && <div style={{ fontSize:"8pt", color:"#78716c", fontStyle:"italic" }}>{ed.honors}</div>}
                    </div>
                    <div style={{ textAlign:"right" }}>
                      <div style={{ fontSize:"8pt", color:"#a8a29e", fontFamily:"'IBM Plex Mono',monospace" }}>
                        {ed.start}{ed.end ? ` – ${ed.end}` : ""}
                      </div>
                      {ed.gpa && <div style={{ fontSize:"8pt", color:"#a8a29e" }}>GPA/Percentage {ed.gpa}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>}

          {hasItems(volunteer) && <>
            <SH>Volunteer</SH>
            <div style={{ marginBottom:22 }}>
              {volunteer.map(v => (
                <div key={v.id} style={{ marginBottom:10 }}>
                  <div style={{ display:"flex", justifyContent:"space-between" }}>
                    <div style={{ fontWeight:600, fontSize:"9.5pt" }}>
                      {v.role} <span style={{ fontWeight:400, color:"#78716c" }}>· {v.org}</span>
                    </div>
                    <span style={{ fontSize:"7.5pt", color:"#a8a29e", fontFamily:"'IBM Plex Mono',monospace" }}>
                      {formatDate(v.start)}{v.current ? " – Present" : (v.end ? ` – ${formatDate(v.end)}` : "")}
                    </span>
                  </div>
                  {v.description && <div style={{ fontSize:"8.5pt", color:"#44403c", lineHeight:1.6 }}>{v.description}</div>}
                </div>
              ))}
            </div>
          </>}

          {hasItems(publications) && <>
            <SH>Publications</SH>
            {publications.map(pub => (
              <div key={pub.id} style={{ marginBottom:10 }}>
                <div style={{ fontWeight:600, fontSize:"9.5pt" }}>{pub.title}</div>
                <div style={{ fontSize:"8pt", color:"#78716c" }}>
                  {pub.publisher}{pub.date ? ` · ${formatDate(pub.date)}` : ""}
                </div>
                {pub.description && <div style={{ fontSize:"8.5pt", color:"#44403c", lineHeight:1.6, marginTop:2 }}>{pub.description}</div>}
              </div>
            ))}
          </>}
        </div>
      </div>
    </div>
  );
}
