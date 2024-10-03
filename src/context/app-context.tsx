import { createContext, useContext, useState } from "react";

type AppContextType = {
  isOverlayOpen: boolean;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType>({
  isOverlayOpen: true,
  setIsOverlayOpen: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  return (
    <AppContext.Provider
      value={{
        isOverlayOpen,
        setIsOverlayOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
