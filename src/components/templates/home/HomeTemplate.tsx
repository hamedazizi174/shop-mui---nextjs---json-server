import MainLayout from "@/src/Layout/Layout";
import React from "react";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";

export default function HomeTemplate() {
  return (
    <MainLayout>
      <Hero />
      <Categories />
    </MainLayout>
  );
}
