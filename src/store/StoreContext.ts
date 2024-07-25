"use context";
import { createContext } from "react";

export const LinksContext = createContext({
  userInfo: { profilePicture: "", first_name: "", last_name: "", email: "" },
  links: [],
  updateUserInfo: (data: { field: string; payload: string }) => {},
  updateLinks: (data: { id: number; field: string; payload: string }) => {},
  addLink: () => {},
  removeLink: (id: number) => {},
});
