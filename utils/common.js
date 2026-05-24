// Get Email Data
export function filterEmailSections(data, searchQuery) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  if (!normalizedQuery) {
    return data;
  }

  return data
    .map((section) => ({
      ...section,
      frames: section.frames.filter((frame) => {
        const name = frame.name.toLowerCase();
        const subject = frame.subject.toLowerCase();

        return (
          name.includes(normalizedQuery) || subject.includes(normalizedQuery)
        );
      }),
    }))
    .filter((section) => section.frames.length > 0);
}
