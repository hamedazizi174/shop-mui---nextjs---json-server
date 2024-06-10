import MainLayout from "@/src/Layout/Layout";
import React from "react";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import { Divider } from "@mui/material";

export default function HomeTemplate() {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <Divider sx={{ height: "30px" }} />
    </MainLayout>
  );
}
