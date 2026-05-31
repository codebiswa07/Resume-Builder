import React from "react";
import { formatDate, hasItems } from "./_shared";

// Pure black-and-white, no graphics – maximum ATS compatibility

const SH = ({ children }) => (
  <div style={{ fontSize:"10pt", fontWeight:700, textTransform:"uppercase",
    letterSpacing:".1em", color:"#111", borderBottom:"1.5px solid #555",
    paddingBottom:2, marginBottom:10 }}>
    {children}
  </div>
);

export default function ATSTemplate({ data }) {
  const { personal: p, skills, experience, education, projects,
          certs, languages, awards, volunteer, publications, references } = data;

  return (
    <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"10pt", color:"#111",
      background:"#fff", width:"100%", padding:"36px 48px", boxSizing:"border-box" }}>

      {/* Header */}
      <div style={{ fontFamily:"'Crimson Pro',serif", fontSize:"28pt", fontWeight:700,
        letterSpacing:"-0.03em", textAlign:"center", marginBottom:4 }}>
        {p.name || "Your Name"}
      </div>
      {p.title && <div style={{ textAlign:"center", fontSize:"11pt", color:"#444",
        marginBottom:8 }}>{p.title}</div>}
      <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap",
        gap:12, fontSize:"8.5pt", color:"#555", marginBottom:18,
        paddingBottom:12, borderBottom:"2px solid #111" }}>
        {p.email    && <span>{p.email}</span>}
        {p.phone    && <><span>|</span><span>{p.phone}</span></>}
        {p.location && <><span>|</span><span>{p.location}</span></>}
        {p.website  && <><span>|</span><span>{p.website}</span></>}
        {p.linkedin && <><span>|</span><span>{p.linkedin}</span></>}
        {p.github   && <><span>|</span><span>{p.github}</span></>}
      </div>

      {/* Summary */}
      {p.summary && <div style={{ marginBottom:20 }}>
        <SH>Summary</SH>
        <div style={{ fontSize:"9.5pt", color:"#333", lineHeight:1.7 }}>{p.summary}</div>
      </div>}

      {/* Skills – keyword-dense for ATS parsers */}
      {hasItems(skills) && <div style={{ marginBottom:20 }}>
        <SH>Skills</SH>
        {skills.map(s => (
          <div key={s.id} style={{ marginBottom:5, fontSize:"9pt" }}>
            <span style={{ fontWeight:700 }}>{s.category}:</span> {s.items}
          </div>
        ))}
      </div>}

      {/* 2-column layout */}
      <div style={{ display:"grid", gridTemplateColumns:"1.6fr 1fr", gap:28 }}>
        <div>
          {hasItems(experience) && <div style={{ marginBottom:20 }}>
            <SH>Experience</SH>
            {experience.map(e => (
              <div key={e.id} style={{ marginBottom:14 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
                  <div style={{ fontWeight:700, fontSize:"10.5pt" }}>{e.role}</div>
                  <div style={{ fontSize:"8.5pt", fontFamily:"'IBM Plex Mono',monospace", color:"#555" }}>
                    {formatDate(e.start)}{e.start ? " – " : ""}{e.current ? "Present" : formatDate(e.end)}
                  </div>
                </div>
                <div style={{ fontSize:"9pt", color:"#555", fontStyle:"italic", margin:"1px 0 5px" }}>
                  {e.company}{e.location ? ` · ${e.location}` : ""}
                </div>
                {e.description && <div style={{ fontSize:"9pt", color:"#333", lineHeight:1.65 }}>{e.description}</div>}
              </div>
            ))}
          </div>}

          {hasItems(projects) && <div style={{ marginBottom:20 }}>
            <SH>Projects</SH>
            {projects.map(pr => (
              <div key={pr.id} style={{ marginBottom:12 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
                  <div style={{ fontWeight:700, fontSize:"9.5pt" }}>
                    {pr.name}{pr.role ? ` · ${pr.role}` : ""}
                  </div>
                  <div style={{ fontSize:"8.5pt", fontFamily:"'IBM Plex Mono',monospace", color:"#555" }}>
                    {pr.current ? "Ongoing" : formatDate(pr.end)}
                  </div>
                </div>
                {pr.tech && <div style={{ fontSize:"8.5pt", color:"#555", fontStyle:"italic", margin:"1px 0 4px" }}>{pr.tech}</div>}
                {pr.description && <div style={{ fontSize:"9pt", color:"#333", lineHeight:1.6 }}>{pr.description}</div>}
                {pr.url && <div style={{ fontSize:"8pt", color:"#555" }}>{pr.url}</div>}
              </div>
            ))}
          </div>}

          {hasItems(volunteer) && <div style={{ marginBottom:20 }}>
            <SH>Volunteer Experience</SH>
            {volunteer.map(v => (
              <div key={v.id} style={{ marginBottom:10 }}>
                <div style={{ display:"flex", justifyContent:"space-between" }}>
                  <div style={{ fontWeight:700, fontSize:"9.5pt" }}>{v.role} · {v.org}</div>
                  <div style={{ fontSize:"8.5pt", fontFamily:"'IBM Plex Mono',monospace", color:"#555" }}>
                    {formatDate(v.start)}{v.current ? " – Present" : (v.end ? ` – ${formatDate(v.end)}` : "")}
                  </div>
                </div>
                {v.description && <div style={{ fontSize:"9pt", color:"#333", lineHeight:1.6 }}>{v.description}</div>}
              </div>
            ))}
          </div>}

          {hasItems(publications) && <div style={{ marginBottom:20 }}>
            <SH>Publications</SH>
            {publications.map(pub => (
              <div key={pub.id} style={{ marginBottom:10 }}>
                <div style={{ fontWeight:700, fontSize:"9.5pt" }}>{pub.title}</div>
                <div style={{ fontSize:"8.5pt", color:"#555" }}>
                  {pub.publisher}{pub.date ? ` · ${formatDate(pub.date)}` : ""}
                </div>
                {pub.description && <div style={{ fontSize:"9pt", color:"#333", lineHeight:1.6, marginTop:2 }}>{pub.description}</div>}
              </div>
            ))}
          </div>}
        </div>

        <div>
          {hasItems(education) && <div style={{ marginBottom:18 }}>
            <SH>Education</SH>
            {education.map(ed => (
              <div key={ed.id} style={{ marginBottom:12 }}>
                <div style={{ fontWeight:700, fontSize:"10pt" }}>{ed.degree}</div>
                <div style={{ fontSize:"9pt", color:"#555", fontStyle:"italic" }}>{ed.school}</div>
                {ed.honors && <div style={{ fontSize:"8.5pt", color:"#555", fontStyle:"italic" }}>{ed.honors}</div>}
                <div style={{ fontSize:"8.5pt", color:"#777", fontFamily:"'IBM Plex Mono',monospace" }}>
                  {ed.start}{ed.end ? ` – ${ed.end}` : ""}{ed.gpa ? ` | GPA/Percentage: ${ed.gpa}` : ""}
                </div>
              </div>
            ))}
          </div>}

          {hasItems(certs) && <div style={{ marginBottom:18 }}>
            <SH>Certifications</SH>
            {certs.map(c => (
              <div key={c.id} style={{ marginBottom:8, fontSize:"9pt" }}>
                <div style={{ fontWeight:700 }}>{c.name}</div>
                <div style={{ color:"#555" }}>
                  {c.issuer}{c.date ? ` · ${formatDate(c.date)}` : ""}
                  {c.expiry ? ` (exp. ${formatDate(c.expiry)})` : ""}
                </div>
                {c.credentialId && <div style={{ fontSize:"8pt", color:"#777",
                  fontFamily:"'IBM Plex Mono',monospace" }}>ID: {c.credentialId}</div>}
              </div>
            ))}
          </div>}

          {hasItems(languages) && <div style={{ marginBottom:18 }}>
            <SH>Languages</SH>
            {languages.map(l => (
              <div key={l.id} style={{ display:"flex", justifyContent:"space-between",
                fontSize:"9pt", marginBottom:3 }}>
                <span>{l.language}</span>
                <span style={{ color:"#555" }}>{l.proficiency}</span>
              </div>
            ))}
          </div>}

          {hasItems(awards) && <div style={{ marginBottom:18 }}>
            <SH>Awards & Honors</SH>
            {awards.map(a => (
              <div key={a.id} style={{ marginBottom:6, fontSize:"9pt" }}>
                <div style={{ fontWeight:700 }}>{a.title}{a.date ? ` (${a.date})` : ""}</div>
                {a.issuer && <div style={{ color:"#555", fontSize:"8.5pt" }}>{a.issuer}</div>}
              </div>
            ))}
          </div>}

          {hasItems(references) && <div style={{ marginBottom:18 }}>
            <SH>References</SH>
            {references.map(r => (
              <div key={r.id} style={{ marginBottom:10, fontSize:"9pt" }}>
                <div style={{ fontWeight:700 }}>{r.name}</div>
                <div style={{ color:"#555" }}>{r.title}</div>
                {r.email && <div style={{ color:"#555", fontSize:"8.5pt" }}>{r.email} · {r.phone}</div>}
                {r.relationship && <div style={{ fontSize:"8pt", color:"#777" }}>{r.relationship}</div>}
              </div>
            ))}
          </div>}
        </div>
      </div>
    </div>
  );
}
