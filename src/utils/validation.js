export function validateResume(data) {
  const errors = {};
  if (!data.personal.name?.trim())  errors.name  = "Full name is required";
  if (!data.personal.email?.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.personal.email))
    errors.email = "Invalid email format";
  if (!data.personal.phone?.trim()) errors.phone = "Phone number is required";
  if (data.skills.some(s => !s.category.trim()))
    errors.skills = "All skill groups need a category name";
  if (data.experience.some(e => !e.company.trim() || !e.role.trim()))
    errors.experience = "All experience entries need company and role";
  if (data.projects.some(p => !p.name.trim()))
    errors.projects = "All projects need a name";
  if (data.certs.some(c => !c.name.trim()))
    errors.certs = "All certifications need a name";
  return errors;
}
