import { useCallback, useState } from 'react';
import { getQueryStringValue, setQueryStringValue } from '../utils/queryString';

export const useQueryString = (
  key: string,
  initialValue = '',
): [value: string, onSetValue: (newValue: string) => void] => {
  const [value, setValue] = useState(getQueryStringValue(key) || initialValue);
  const onSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue);
      setQueryStringValue(key, newValue);
    },
    [key],
  );

  return [value as string, onSetValue];
};
