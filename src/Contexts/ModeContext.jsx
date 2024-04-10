import { useState } from "react";

export function ModeProvider({ children }) {
  const [isEasyMode, setIsEasyMode] = useState(false);
  return <ModeContext.Provider value={{ isEasyMode, setIsEasyMode }}>{children}</ModeContext.Provider>;
}
