export function formatDate(str) {
  if (!str) return "";
  if (str.length === 4) return str; // bare year
  try {
    const [y, m] = str.split("-");
    return new Date(Number(y), Number(m) - 1).toLocaleDateString("en-US", {
      month: "short", year: "numeric"
    });
  } catch { return str; }
}
