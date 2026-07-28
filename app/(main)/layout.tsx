"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import CommandPalette from "@/components/layout/CommandPalette";

import { useDialog } from "@/components/providers/DialogProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { commandOpen, setCommandOpen } = useDialog();

  return (
    <div className="flex h-screen overflow-hidden bg-[#08111F]">
      <CommandPalette
        open={commandOpen}
        setOpen={setCommandOpen}
      />

      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="px-8 pt-6">
          <Header />
        </div>

        <main className="main-scroll flex-1 overflow-y-auto px-8 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}