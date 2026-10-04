import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Z'BARBER — Barber Shop", description: "Z'BARBER — Coupe, dégradé et barbe. Rendez-vous directement sur Snapchat." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }