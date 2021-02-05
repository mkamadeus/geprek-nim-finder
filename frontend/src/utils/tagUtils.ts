import { hasNumber, isNumber } from './numberUtils';
import facultyCode from '@/json/kode_fakultas.json';
import majorCode from '@/json/kode_jurusan.json';

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

export const parseKeywordsWithoutNumber = (splittedKeywords: string[]) => {
  const result = [];
  for (const keyword of splittedKeywords) {
    if (hasTag(keyword)) continue;
    if (!hasNumber(keyword)) result.push(keyword);
  }
  return result;
};

export const parseKeywordsWithNumber = (splittedKeywords: string[]) => {
  const result = [];
  for (const keyword of splittedKeywords) {
    if (hasTag(keyword)) continue;

    if (isNumber(keyword)) {
      result.push(keyword);
    } else if (hasNumber(keyword)) {
      for (const key of Object.keys(facultyCode)) {
        const replacedKeyword = keyword.replace(
          key.toLowerCase(),
          facultyCode[key as keyof typeof facultyCode],
        );
        if (keyword !== replacedKeyword) {
          result.push(replacedKeyword);
        }
      }
      for (const key of Object.keys(majorCode)) {
        const replacedKeyword = keyword.replace(
          key.toLowerCase(),
          majorCode[key as keyof typeof majorCode],
        );
        if (keyword !== replacedKeyword) {
          result.push(replacedKeyword);
        }
      }
    }
  }

  return result;
};

export const checkMatch = (
  studentData: string[],
  keywordsWithoutNumber: string[],
  keywordsWithNumber: string[],
) => {
  // First check -- word check
  for (const keyword of keywordsWithoutNumber) {
    if (keyword.length < 2) continue;

    const status = studentData[0].toLowerCase().includes(keyword.toLowerCase());
    if (status) return status;
  }

  // Second check -- number check
  for (const keyword of keywordsWithNumber) {
    if (keyword.length < 2) continue;

    const status =
      studentData[1].startsWith(keyword) ||
      (studentData[2] && studentData[2].startsWith(keyword));
    if (status) return status;
  }

  return false;
};

type HighlightedPhrase = { s: string; h: boolean }[];

export const highlight = (
  studentData: string[],
  keywordsWithoutNumber: string[],
  keywordsWithNumber: string[],
) => {
  const result: HighlightedPhrase[] = [];
  for (const keyword of keywordsWithoutNumber) {
    const p: HighlightedPhrase = [];

    const index = studentData[0].toLowerCase();
    // if(studentData[0].toLowerCase().)
  }
};
