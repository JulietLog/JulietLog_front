import type React from "react";
import { useState } from "react";

const useInput = (initialState?: string | number) => {
  const [value, setValue] = useState<string | number>(initialState ?? "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange, setValue };
};

export default useInput;
