import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { ChatBotProvider } from "@/hooks/useChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Fayaz T S",
  description: "Muhammed Fayaz T S is a skilled Full Stack Developer based in Kochi, Kerala, with expertise in both front-end and back-end technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-neutral-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ChatBotProvider>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ChatBotProvider>
        </ThemeProvider >
      </body>
    </html>
  );
}
