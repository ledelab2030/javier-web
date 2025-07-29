// src/app/layout.tsx
import React from "react";
import Layout from "@/components/layout";

export default function LedeLabLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
