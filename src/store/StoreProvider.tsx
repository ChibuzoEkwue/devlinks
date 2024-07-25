"use context";

import React, { useReducer } from "react";
import { LinksContext } from "./StoreContext";
import { userInfo } from "os";
// import { userInfo } from "os";

const DEFUALT_STATE = {
  userInfo: { profilePicture: "", first_name: "", last_name: "", email: "" },
  links: [],
};

const linksReducer = (state: any, action: any) => {
  if (action.type === "UPDATE_USER_INFO") {
    const newItem = {
      ...state.userInfo,
      [action.item.field]: action.item.payload,
    };
    return {
      userInfo: newItem,
      links: state.links,
    };
  }
  if (action.type === "UPDATE_LINK_INFO") {
    const existingIndex = state.links.findIndex(
      (item: any) => item.id === action.item.id,
    );

    const existingLink = state.links[existingIndex];

    const updatedLink: any = {
      ...existingLink,
      [action.item.field]: action.item.payload,
    };

    const toBeUpdatedLink = [...state.links];

    toBeUpdatedLink[existingIndex] = updatedLink;

    return {
      userInfo: state.userInfo,
      links: toBeUpdatedLink,
    };
  }
  if (action.type === "ADD_LINK") {
    const newLink = [
      ...state.links,
      { id: Math.random() * 1000, platform: "", link: "" },
    ];

    return {
      userInfo: state.userInfo,
      links: newLink,
    };
  }
  if (action.type === "REMOVE_LINK") {
    const removeLink = state.links.filter((p:any) => p.id !== action.item);
    return {
      userInfo: state.userInfo,
      links: removeLink,
    };
  }

  return DEFUALT_STATE;
};

const LinksProvider = ({ children }: { children: React.ReactNode }) => {
  const [linkState, dispatchAction] = useReducer(linksReducer, DEFUALT_STATE);

  const UPDATE_USER_INFO = (payload: { field: string; payload: string }) => {
    dispatchAction({ type: "UPDATE_USER_INFO", item: payload });
  };

  const UPDATE_LINK_INFO = (payload: {
    id: number;
    field: string;
    payload: string;
  }) => {
    dispatchAction({ type: "UPDATE_LINK_INFO", item: payload });
  };

  const ADD_LINK = () => {
    dispatchAction({ type: "ADD_LINK" });
  };

  const REMOVE_LINK = (id: number) => {
    dispatchAction({ type: "REMOVE_LINK", item: id });
  };

  return (
    <LinksContext.Provider
      value={{
        userInfo: linkState.userInfo,
        links: linkState.links,
        updateUserInfo: UPDATE_USER_INFO,
        updateLinks: UPDATE_LINK_INFO,
        addLink: ADD_LINK,
        removeLink: REMOVE_LINK,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};

export default LinksProvider;
