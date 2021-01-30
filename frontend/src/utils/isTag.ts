export const isTag = (text: string): boolean => {
  // console.log(text.length);
  return text.length > 2 && text[0] === '?' && text[text.length - 1] === '?';
};
