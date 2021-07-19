import { ChangeEvent, useCallback } from "react";

type stringCb = (value: string) => void;

export function useInputChangeHandler(func: stringCb) {
  return useCallback((event: ChangeEvent<HTMLInputElement>) => {
    func(event.target.value);
  }, [func]);
}
