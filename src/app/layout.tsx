import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";
import { siteConfig } from "../config/site";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics Script */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.googleAnalyticsId}');
          `}
        </Script>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            let theme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (theme === 'dark' || (!theme && prefersDark)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider>
        <header className="header-footer p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Scotland</Link>
            <div className="flex items-center space-x-4">
              {siteConfig.mainNav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-blue-300">
                  {item.title}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="container mx-auto py-8 px-4">
          {children}
        </main>
        <footer className="header-footer p-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <p>© {new Date().getFullYear()} Scotland Site</p>
              </div>
              <div>
                <Link href="/rss" className="hover:text-blue-300 mr-4">RSS</Link>
                <Link href="/sitemap.xml" className="hover:text-blue-300">Sitemap</Link>
              </div>
            </div>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
