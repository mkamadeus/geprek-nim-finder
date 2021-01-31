export const isTag = (text: string): boolean => {
  return text.length > 2 && text[0] === '?' && text[text.length - 1] === '?';
};

export const tokenizeTag = (text: string): string[] => {
  const result = [];

  let isCurrentTag = false;
  let currentString = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '?') {
      isCurrentTag = !isCurrentTag;
    }

    if (text[i] === ' ' && !isCurrentTag) {
      result.push(currentString);
      currentString = '';
    } else {
      currentString += text[i];
    }
  }

  result.push(currentString);

  return result.filter((v) => v.length !== 0);
};

export const hasTag = (text: string): boolean => text.includes('?');
