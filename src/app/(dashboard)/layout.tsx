import Header from "@/components/Header";
import Provider from "@/store/Provider";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <div className="bg-neutral-50 p-2 ">
        <Header />
        {children}
      </div>
    </Provider>
  );
};

export default layout;
