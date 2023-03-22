import React, { createContext, useContext } from "react";

import { config, Config } from "./config";

export const ConfigContext = createContext<Config>(undefined);

export const useConfig = () => {
  const config = useContext(ConfigContext);

  if (!config) {
    throw new Error("ConfigProvider not found");
  }

  return config;
};

export type ConfigProviderProps = {
  children: React.ComponentProps<
    (typeof ConfigContext)["Provider"]
  >["children"];
};

export function ConfigProvider({ children }: ConfigProviderProps) {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}
