"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import Header from "../../components/ui/Header";

export default function ClientWrapper({ children }) {
  return (
    <div className="min-h-svh overscroll-none">
      <Header />

      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </div>
  );
}
