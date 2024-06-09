import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
