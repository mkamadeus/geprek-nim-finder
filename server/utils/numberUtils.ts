export const hasNumber = (text: string) => {
  for (const c of text) {
    const charCode = c.charCodeAt(0);
    if (charCode >= 48 && charCode <= 57) return true;
  }
  return false;
};

export const isNumber = (text: string) => {
  for (const c of text) {
    const charCode = c.charCodeAt(0);
    if (charCode < 48 || charCode > 57) return false;
  }
  return true;
};
