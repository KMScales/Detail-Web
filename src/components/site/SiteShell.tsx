import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import bgAsset from "@/assets/network-bg.jpg.asset.json";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10">
        <img
          src={bgAsset.url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-50 scale-110"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>
      <Header />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}