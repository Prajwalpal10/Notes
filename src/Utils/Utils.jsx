export const getInitials = (groupName) => {
  const words = groupName.split(" ");
  let initials = "";

  if (words.length === 1) {
    initials = words[0].substring(0, 1).toUpperCase();
  } else if (words.length >= 2) {
    initials = words
      .slice(0, 2)
      .map((word) => word.substring(0, 1).toUpperCase())
      .join("");
  }

  return initials;
};
