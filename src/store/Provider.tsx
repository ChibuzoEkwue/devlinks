"use client";

import React from "react";
import LinksProvider from "./StoreProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <LinksProvider>{children}</LinksProvider>;
};

export default Provider;
