export const isMajorCode = (text: string) => {
  if (text.length < 4) return false;

  const charCode = text[text.length - 3].charCodeAt(0);
  if (charCode >= 48 && charCode <= 57) return false;

  for (let i = text.length - 2; i < text.length; i++) {
    const charCode = text[i].charCodeAt(0);
    if (charCode < 48 || charCode > 57) return false;
  }

  return true;
};
