import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Spacer pushes content below the fixed header (logo 100px + py-3 padding 24px) */}
      <div style={{ height: "124px", flexShrink: 0 }} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
