import "./globals.css";
import { Metadata } from "next";
import { MediaProvider } from "@/components/providers/MediaProvider";

export const metadata: Metadata = {
  title: "Димлэн - Лифтовое оборудование",
  description: "Монтаж, демонтаж, эксплуатация и обслуживание лифтов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <MediaProvider>{children}</MediaProvider>
      </body>
    </html>
  );
}
