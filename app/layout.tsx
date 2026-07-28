import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import { SubjectProvider } from "@/components/providers/SubjectProvider";
import { DialogProvider } from "@/components/providers/DialogProvider";
import GlobalDialogs from "@/components/providers/GlobalDialogs";
import { ChapterProvider } from "@/components/providers/ChapterProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MathOS",
  description: "The Operating System for Mathematics Students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <ClerkProvider>
    <DialogProvider>
      <SubjectProvider>
        <ChapterProvider>
          {children}

          <GlobalDialogs />
        </ChapterProvider>
      </SubjectProvider>
    </DialogProvider>
  </ClerkProvider>
</body>
    </html>
  );
}