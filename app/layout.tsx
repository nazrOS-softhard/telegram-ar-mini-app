import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AR Mini App",
  description: "Сканер открыток CyberEden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}